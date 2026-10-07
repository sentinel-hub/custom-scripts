//VERSION=3

/**
 * Landsat - CLMS LST residual, for measuring the biasOffset that script.js needs.
 *
 * Data fusion of two sources. Outputs the per-pixel difference
 *   residual = LST_landsat_cal - LST_clms_cal
 * in Kelvin degrees. The scene-wide mean of that field is the bias script.js needs:
 *
 *   biasOffset = -mean(residual)
 *
 * Note the sign. Landsat L1 B10 is top-of-atmosphere brightness temperature with no
 * atmospheric correction, so it reads colder than CLMS: the mean residual is negative
 * and the biasOffset that cancels it is positive.
 *
 * KNOWN COPERNICUS BROWSER LIMITATION: the statistics / histogram panel does not work
 * on data fusion layers. It fails with "Dataset with id: <alias> not found" even though
 * the layer renders correctly, and declaring a browserStats output (as this script
 * does) makes no difference. This has been reported to CDSE. Until it is fixed, read
 * the mean off the map by tuning residualCenterK (see USER OPTIONS), or compute it with
 * the Statistical API. The browserStats output is kept so that the histogram starts
 * working here as soon as the fix lands.
 *
 * The spread of the residual is the other number worth having, and it needs the
 * Statistical API. It says how tightly the residual clusters around the offset - a
 * narrow spread means the field is mostly a constant bias plus stable spatial
 * structure, which is the assumption the sharpening rests on.
 *
 * Quick setup (Copernicus Browser -> "use additional datasets (advanced)"):
 *   - Primary dataset      Landsat 8-9 L1        -> alias  LANDSAT-OT-L1
 *   - Additional dataset 1 CLMS LST 3km hourly V3 -> alias  CLMS_CAL
 *   Set both timespans to the same calibration date, with CLMS_CAL on the hourly slot
 *   CONTAINING the Landsat overpass (~09:30 UTC over central Europe, so the 09:00
 *   slot). A time gap between the two corrupts the residual.
 *
 * Keep band, C, minValidC and maxValidC identical to script.js, or the offset measured
 * here is not the offset script.js needs.
 */

//// ---- USER OPTIONS ---------------------------------------------------------

// choose which Landsat TIRS band drives brightness temperature (B10 or B11)
var band = "B10";

// physical sanity range for the Landsat-derived LST (degC).
// Keep identical to script.js.
var minValidC = -20;
var maxValidC = 60;

// surface roughness term, added to the emissivity of mixed soil/vegetation pixels.
// 0.005 follows Sobrino et al. (2008) and Avdan & Jovanovska (2016).
// Keep identical to script.js.
var C = 0.005;

// mask pixels the Landsat Collection 2 QA band flags as cloud-affected. Leave this on
// when measuring the offset: cloud tops read cold and drag the mean residual down.
var applyCloudMask = true;

// also drop water pixels (NDVI < 0). Thermal inertia decouples water temperature from
// the land signal, so water residuals are large and noisy and a river or lake inside
// the area can shift the scene mean. Turn on if your area contains open water.
var excludeWater = false;

// color-map for the RGBA "default" output, in Kelvin degrees. This is a DIVERGING
// ramp spanning residualCenterK +/- residualSpreadK: blue = Landsat colder than CLMS,
// neutral = the residual equals residualCenterK, red = Landsat warmer.
//
// These two are how you READ THE OFFSET OFF THE MAP, by bisection - currently the only
// way to obtain it in Copernicus Browser (see header). Set residualCenterK to a guess:
// if the scene skews blue the true mean is lower, if it skews red it is higher. When
// the bulk of the land renders neutral, residualCenterK IS the mean residual, and
// biasOffset = -residualCenterK. Shrink residualSpreadK as you close in - at +/-2 K the
// mean is readable to a few tenths of a Kelvin degree.
//
// Leave the centre at 0 to see the raw sign pattern: whether Landsat reads warmer or
// colder than CLMS, and where.
var residualCenterK = 0;
var residualSpreadK = 15;

//// ---- LANDSAT LST CONSTANTS ------------------------------------------------

// NDVI thresholds for bare soil / full vegetation
var NDVIs = 0.2;
var NDVIv = 0.8;

// emissivity
var waterE = 0.991;
var soilE = 0.966;
var vegetationE = 0.973;

// central/mean wavelength in meters, B10 or B11
var bCent = band == "B10" ? 0.000010895 : 0.000012005;

// rho = h*c/sigma = PlanckC*velocityLight/BoltzmannC
var rho = 0.01438; // m K

//// ---- CLMS DECODE ----------------------------------------------------------

// raw CLMS LST -> Kelvin
var CLMS_FACTOR = 1 / 100;
var CLMS_OFFSET = 273.15;

//// ---- VISUALIZATION (diverging ramp, ColorBrewer RdBu reversed) -------------

// 11 stops spread evenly over the ramp. Blue = Landsat colder, the neutral middle stop
// = residualCenterK, red = Landsat warmer.
const RampColors = [
  [5, 48, 97],
  [33, 102, 172],
  [67, 147, 195],
  [146, 197, 222],
  [209, 229, 240],
  [247, 247, 247],
  [253, 219, 199],
  [244, 165, 130],
  [214, 96, 77],
  [178, 24, 43],
  [103, 0, 31],
];
var residualMinK = residualCenterK - residualSpreadK;
var residualMaxK = residualCenterK + residualSpreadK;
const ColorBar = RampColors.map(function (rgb, i) {
  var t = i / (RampColors.length - 1);
  return [residualMinK + t * (residualMaxK - residualMinK), rgb];
});
const visualizer = new ColorRampVisualizer(ColorBar);

//// ---- SETUP ----------------------------------------------------------------

function setup() {
  return {
    input: [
      {
        datasource: "LANDSAT-OT-L1",
        bands: ["B03", "B04", "B05", "B10", "B11", "BQA", "dataMask"],
      },
      { datasource: "CLMS_CAL", bands: ["LST", "dataMask"] },
    ],
    output: [
      { id: "default", bands: 4, sampleType: "UINT8" }, // RGBA color map
      { id: "index", bands: 1, sampleType: "FLOAT32" }, // residual (K)
      { id: "browserStats", bands: 1, sampleType: "FLOAT32" }, // residual, for stats
      { id: "dataMask", bands: 1 }, // validity mask
    ],
    mosaicking: "SIMPLE", // one clear scene per layer; access samples.X[0]
  };
}

//// ---- LANDSAT EMISSIVITY ---------------------------------------------------

function LSEcalc(NDVI, Pv) {
  var LSE;
  if (NDVI < 0) {
    // water
    LSE = waterE;
  } else if (NDVI < NDVIs) {
    // soil
    LSE = soilE;
  } else if (NDVI > NDVIv) {
    // vegetation
    LSE = vegetationE;
  } else {
    // mixtures of vegetation and soil
    LSE = vegetationE * Pv + soilE * (1 - Pv) + C;
  }
  return LSE;
}

// Landsat single-scene LST in KELVIN, or null if the pixel is invalid.
function landsatLST(s) {
  var Bi = band == "B10" ? s.B10 : s.B11;
  var B03i = s.B03;
  var B04i = s.B04;
  var B05i = s.B05;

  // raw-band guard: screens error scenes / fill (same as source script)
  if (!(Bi > 173 && Bi < 65000 && B03i > 0 && B04i > 0 && B05i > 0)) {
    return null;
  }

  // 1 Kelvin to C (brightness temperature)
  var btC = Bi - 273.15;
  // 2 NDVI
  var NDVI = (B05i - B04i) / (B05i + B04i);
  // 3 Pv - proportional vegetation
  var Pv = Math.pow((NDVI - NDVIs) / (NDVIv - NDVIs), 2);
  // 4 LSE - land surface emissivity
  var LSE = LSEcalc(NDVI, Pv);
  // 5 LST (degC): the single-channel land surface temperature calculation based on
  // (Artis & Carnahan, 1982), converting brightness temperature (btC) to Land
  // Surface Temperature (lstC) using the emissivity (LSE) and the central wavelength
  // (bCent) and rho (Planck's constant times the speed of light divided by
  // Boltzmann's constant).
  var lstC = btC / (1 + ((bCent * btC) / rho) * Math.log(LSE));

  // physical sanity range
  if (lstC < minValidC || lstC > maxValidC) {
    return null;
  }

  // return Kelvin
  return lstC + 273.15;
}

//// ---- EVALUATE PIXEL -------------------------------------------------------

function invalid() {
  return {
    default: [0, 0, 0, 0],
    index: [NaN],
    browserStats: [NaN],
    dataMask: [0],
  };
}

function evaluatePixel(samples) {
  // note: LANDSAT-OT-L1 has hyphens, so it must be accessed via bracket notation
  var landsat = samples["LANDSAT-OT-L1"][0];
  var clmsCal = samples.CLMS_CAL[0];

  if (landsat.dataMask === 0 || clmsCal.dataMask === 0) {
    return invalid();
  }

  if (applyCloudMask) {
    var qa = decodeL8C2Qa(landsat.BQA);
    if (qa.fill || qa.cloud || qa.dilatedCloud || qa.cirrus || qa.cloudShadow) {
      return invalid();
    }
  }

  if (excludeWater) {
    var ndvi = (landsat.B05 - landsat.B04) / (landsat.B05 + landsat.B04);
    if (ndvi < 0) {
      return invalid();
    }
  }

  // Landsat calibration LST (Kelvin), with raw-band + physical-range guards
  var lstLandsatCal = landsatLST(landsat);
  if (lstLandsatCal === null) {
    return invalid();
  }

  // CLMS LST (Kelvin)
  var lstClmsCal = clmsCal.LST * CLMS_FACTOR + CLMS_OFFSET;

  // the residual field. Its mean over a large clear-sky area, negated, is the
  // biasOffset to enter in script.js; its standard deviation says how well a single
  // scene-wide constant describes the Landsat-CLMS difference.
  var residual = lstLandsatCal - lstClmsCal;

  var rgb = visualizer.process(residual);
  return {
    default: rgb.concat(255),
    index: [residual],
    browserStats: [residual],
    dataMask: [1],
  };
}
