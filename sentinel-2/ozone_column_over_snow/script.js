function setup() {
  return {
    input: [
      "sunZenithAngles",
      "viewZenithMean",
      "B01",
      "B03",
      "B8A",
      "dataMask",
    ],
    output: { bands: 4, sampleType: "AUTO" },
  };
}

// Constants
// Make a visualisation based on the preset colour ramp
const visualizer = ColorRampVisualizer.createRedTemperature(140, 340);
// ac is a constant from Table 2
const ac = 3.49e-2;
// ab and cAbsB are constants from Table 2
const ab = 7.48e-4;
const cAbsB = 3.87e-21;

function degrees_to_radians(degrees) {
  // Convert degrees to radians
  return degrees * (Math.PI / 180);
}

function amf(sza, vza) {
  // Compute the air mass factor (AMF)
  // sza in radians
  // vza in radians

  let epsilon = Math.cos(sza);
  let eta = Math.cos(vza);

  // Calculate AMF
  let m = 1 / epsilon + 1 / eta;

  return m;
}

function calcK(reflA, reflB, L) {
  // Compute K from Eq. 5
  let K = (Math.log(reflA / reflB) - Math.sqrt(ab * L)) / cAbsB;

  return K;
}

function calcL(reflA, reflC) {
  // Compute L from Eq. 5
  let L = Math.pow(Math.log(reflC / reflA), 2) / ac;

  return L;
}

function compute_ozone(sza, vza, reflA, reflB, reflC) {
  // Compute air mass factor
  let szaRad = degrees_to_radians(sza);
  let vzaRad = degrees_to_radians(vza);
  let m = amf(szaRad, vzaRad);

  // Compute L
  let L = calcL(reflA, reflC);

  // Compute K
  let K = calcK(reflA, reflB, L);

  // Compute ozone
  let N = K / m;

  return N;
}

function evaluatePixel(sample) {
  // Define bands
  var SZA = sample.sunZenithAngles;
  var VZA = sample.viewZenithMean;

  // Set bands and wavelengths in cm
  var reflA = sample.B01;
  var reflB = sample.B03;
  var reflC = sample.B8A;

  // Compute ozone
  let ozoneCol = compute_ozone(SZA, VZA, reflA, reflB, reflC);

  // Convert ozone from mol/cm2 to DU
  let k = 3.722 * Math.pow(10, -17);
  let ozoneDu = ozoneCol * k;

  // Visualisation
  let rgbVis = visualizer.process(ozoneDu);

  return rgbVis.concat(sample.dataMask);
}
