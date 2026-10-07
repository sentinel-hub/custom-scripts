//VERSION=3

/**
 * Native Landsat LST reference layer, for validating the sharpened CLMS product.
 *
 * Deliberately identical to the Landsat half of script.js in this folder: same band,
 * same emissivity model, same constants, same guards, same CLMS magma color ramp and
 * same output ids. Run it on a Landsat overpass date and compare side by side with the
 * sharpened layer for that same date - any visible difference is the sharpening, not a
 * difference in method.
 *
 * Single dataset: Landsat 8-9 L1. No data fusion, no aliases to set.
 */

//// ---- USER OPTIONS ---------------------------------------------------------

// choose which Landsat TIRS band drives brightness temperature (B10 or B11)
var band = "B10";

// keep this at 0 to show the raw Landsat retrieval. Set it to the SAME value used in
// script.js if you want the two layers on a common absolute scale: Landsat L1 B10 is
// top-of-atmosphere brightness temperature (no atmospheric correction), so it reads
// systematically colder than the atmospherically corrected CLMS LST.
var biasOffset = 0;

// physical sanity range for the derived LST (degC)
var minValidC = -20;
var maxValidC = 60;

// surface roughness term, added to the emissivity of mixed soil/vegetation pixels.
// 0.005 follows Sobrino et al. (2008) and Avdan & Jovanovska (2016). Note that the
// Landsat-8 LST Mapping script this retrieval is ported from uses 0.009 - set it to
// that value if you need results consistent with that script (see README).
// Keep this identical to the value in script.js so the two layers stay comparable.
var C = 0.005;

// mask pixels the Landsat Collection 2 QA band flags as cloud-affected
var applyCloudMask = true;

// color-map range for the RGBA "default" output, in Kelvin. The defaults
// 240-330 K (-33 to +57 degC) reproduce the CLMS LST 3km hourly V3 palette
// exactly. Narrowing the range (e.g. 295-325 K, +22 to +52 degC, for a summer
// morning) makes intra-urban contrast easier to read - but keep these identical
// to the values in script.js, or the two layers cannot be compared by color.
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
    input: [{ bands: ["B03", "B04", "B05", "B10", "B11", "BQA", "dataMask"] }],
    output: [
      { id: "default", bands: 4, sampleType: "UINT8" }, // RGBA color map
      { id: "index", bands: 1, sampleType: "FLOAT32" }, // LST (K)
      { id: "browserStats", bands: 1, sampleType: "FLOAT32" }, // LST (K) for stats
      { id: "dataMask", bands: 1 }, // validity mask
    ],
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
  // 5 LST (degC)
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

function evaluatePixel(sample) {
  if (sample.dataMask === 0) {
    return invalid();
  }

  if (applyCloudMask) {
    var qa = decodeL8C2Qa(sample.BQA);
    if (qa.fill || qa.cloud || qa.dilatedCloud || qa.cirrus || qa.cloudShadow) {
      return invalid();
    }
  }

  var lst = landsatLST(sample);
  if (lst === null) {
    return invalid();
  }

  lst = lst + biasOffset;

  var rgb = visualizer.process(lst);
  return {
    default: rgb.concat(255),
    index: [lst],
    browserStats: [lst],
    dataMask: [1],
  };
}
