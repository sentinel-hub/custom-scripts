//VERSION=3

/**
 * Thermal sharpening of CLMS LST (3 km hourly V3) with Landsat thermal imagery.
 * By András Zlinszky, Sinergise (azlinszky.bsky.social) and Claude Code
 * Based on the Landsat Land Surface Temperature custom script by Mohor Gartner
 * https://custom-scripts.sentinel-hub.com/custom-scripts/landsat-8/land_surface_temperature_mapping/
 * Data fusion of three sources; see README.md for the method, caveats and setup.
 *
 * Quick setup (Copernicus Browser -> "use additional datasets (advanced)"):
 *   - Primary dataset      Landsat 8-9 L1        -> alias  LANDSAT-OT-L1
 *   - Additional dataset 1 CLMS LST 3km hourly V3 -> alias  CLMS_CAL
 *   - Additional dataset 2 CLMS LST 3km hourly V3 -> alias  CLMS_TGT
 *   Customize timespans: LANDSAT-OT-L1 + CLMS_CAL = calibration date (clear-sky
 *   Landsat overpass); CLMS_TGT = the target date you want to sharpen. Set CLMS_CAL
 *   to the hourly slot CONTAINING the overpass (~09:30 UTC over central Europe, so
 *   the 09:00 slot) - a time gap between Landsat and CLMS_CAL corrupts the residual.
 *
 * Per pixel, in Kelvin:
 *   residual      = LST_landsat_cal - LST_clms_cal
 *   LST_sharpened = LST_clms_target + residual + biasOffset
 *
 * Optional scaling of the CLMS change (changeScale = s, default 1 = the formula above):
 *   LST_sharpened = LST_landsat_cal + s * (LST_clms_target - LST_clms_cal)
 *                   + (1 - s) * deltaTMean + biasOffset
 */

//// ---- USER OPTIONS ---------------------------------------------------------

// choose which Landsat TIRS band drives brightness temperature (B10 or B11)
var band = "B10";

// scene-wide bias offset (see header). Units match the LST (Kelvin degrees).
// 0 = pure additive Landsat detail; set to mean(CLMS_cal)-mean(Landsat_cal)
// to anchor the sharpened scene-mean to CLMS.
var biasOffset = 0;

// scale s of the 3 km CLMS change between the calibration and the target date.
// 1 = additive sharpening, the full CLMS change is applied (default). Values below 1
// damp the change: use the median slope of Landsat on CLMS over several calibration
// dates (companion notebook, Section 12.5); over Budapest any value 0.25-0.5 worked.
var changeScale = 1;

// only used when changeScale != 1: mean(CLMS_TGT) - mean(CLMS_CAL) over your area,
// in Kelvin (the same number in degC). Keeps the sharpened scene mean on the CLMS level.
var deltaTMean = 0;

// physical sanity range for the Landsat-derived calibration LST (degC).
// Pixels whose derived LST falls outside this band are masked out.
var minValidC = -20;
var maxValidC = 60;

// surface roughness term, added to the emissivity of mixed soil/vegetation pixels.
// 0.005 follows Sobrino et al. (2008) and Avdan & Jovanovska (2016).
var C = 0.005;

// color-map range for the RGBA "default" output, in Kelvin. The defaults
// 240-330 K (-33 to +57 degC) reproduce the CLMS LST 3km hourly V3 palette
// exactly. Use the same values in landsat_lst_reference.js when comparing the two layers.
// degC = K - 273.15
var paletteMinK = 240;
var paletteMaxK = 330;

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

//// ---- VISUALIZATION (CLMS LST 3km hourly V3 magma-style ramp) --------------

// the 10 magma colors of the CLMS ramp, spread evenly over [paletteMinK, paletteMaxK]
const RampColors = [
  [0, 0, 4],
  [27, 12, 65],
  [76, 12, 107],
  [120, 28, 109],
  [165, 45, 96],
  [206, 68, 70],
  [237, 105, 37],
  [251, 154, 7],
  [247, 208, 60],
  [252, 255, 164],
];
const ColorBar = RampColors.map(function (rgb, i) {
  var t = i / (RampColors.length - 1);
  return [paletteMinK + t * (paletteMaxK - paletteMinK), rgb];
});
const visualizer = new ColorRampVisualizer(ColorBar);

//// ---- SETUP ----------------------------------------------------------------

function setup() {
  return {
    input: [
      { datasource: "LANDSAT-OT-L1", bands: ["B03", "B04", "B05", "B10", "B11"] },
      { datasource: "CLMS_CAL", bands: ["LST", "dataMask"] },
      { datasource: "CLMS_TGT", bands: ["LST", "dataMask"] },
    ],
    output: [
      { id: "default", bands: 4, sampleType: "UINT8" }, // RGBA color map
      { id: "index", bands: 1, sampleType: "FLOAT32" }, // sharpened LST (K)
      { id: "dataMask", bands: 1 }, // validity mask
    ],
    mosaicking: "SIMPLE", // one clear scene per layer; access samples.X[0]
  };
}

//// ---- LANDSAT EMISSIVITY (unchanged from source script) --------------------

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
    dataMask: [0],
  };
}

function evaluatePixel(samples) {
  // note: LANDSAT-OT-L1 has hyphens, so it must be accessed via bracket notation
  var landsat = samples["LANDSAT-OT-L1"][0];
  var clmsCal = samples.CLMS_CAL[0];
  var clmsTgt = samples.CLMS_TGT[0];

  // CLMS validity
  if (clmsCal.dataMask === 0 || clmsTgt.dataMask === 0) {
    return invalid();
  }

  // Landsat calibration LST (Kelvin), with raw-band + physical-range guards
  var lstLandsatCal = landsatLST(landsat);
  if (lstLandsatCal === null) {
    return invalid();
  }

  // CLMS LST (Kelvin)
  var lstClmsCal = clmsCal.LST * CLMS_FACTOR + CLMS_OFFSET;
  var lstClmsTgt = clmsTgt.LST * CLMS_FACTOR + CLMS_OFFSET;

  // additive residual sharpening: here we calculate the difference between Landsat
  // and the simultaneous CLMS, and apply it to the target CLMS together with the
  // bias offset.
  var residual = lstLandsatCal - lstClmsCal;
  var lstSharpened = lstClmsTgt + residual + biasOffset;

  // optional: damp the local CLMS change by changeScale, but keep the full
  // scene-mean change deltaTMean, so the scene mean stays on the CLMS level
  if (changeScale !== 1) {
    var clmsChange = lstClmsTgt - lstClmsCal;
    lstSharpened -= (1 - changeScale) * (clmsChange - deltaTMean);
  }

  var rgb = visualizer.process(lstSharpened);
  return {
    default: rgb.concat(255),
    index: [lstSharpened],
    dataMask: [1],
  };
}
