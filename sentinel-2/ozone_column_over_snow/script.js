function setup () {
  return {
    input: [
      'sunZenithAngles',
      'viewZenithMean',
      'B01',
      'B03',
      'B8A',
      'dataMask'
    ],
    output: { bands: 4, sampleType: 'AUTO' }
  }
}

function degrees_to_radians (degrees) {
  // Convert degrees to radians
  return degrees * (Math.PI / 180)
}

function amf (sza, vza) {
  // Compute the air mass factor (AMF)
  // sza in radians
  // vza in radians

  let epsilon = Math.cos(sza)
  let eta = Math.cos(vza)

  // Calculate AMF
  var m = 1 / epsilon + 1 / eta

  return m
}

function calcK (reflA, reflB, L) {
  // Compute K from Eq. 5

  // ab and cAbsB are constants from Table 2
  const ab = 7.48 * Math.pow(10, -4)
  const cAbsB = 3.87 * Math.pow(10, -21)

  var K = (Math.log(reflA / reflB) - Math.sqrt(ab * L)) / cAbsB

  return K
}

function calcL (reflA, reflC) {
  // Compute L from Eq. 5

  // ac is a constant from Table 2
  const ac = 3.49 * Math.pow(10, -2)

  var L = Math.pow(Math.log(reflC / reflA), 2) / ac

  return L
}

function compute_ozone (sza, vza, reflA, reflB, reflC) {
  // Compute air mass factor
  let szaRad = degrees_to_radians(sza)
  let vzaRad = degrees_to_radians(vza)
  var m = amf(szaRad, vzaRad)

  // Compute L
  var L = calcL(reflA, reflC)

  // Compute K
  var K = calcK(reflA, reflB, L)

  // Compute ozone
  var N = K / m

  return N
}

function evaluatePixel (sample) {
  // Define bands
  var SZA = sample.sunZenithAngles
  var VZA = sample.viewZenithMean

  // Set bands and wavelengths in cm
  var reflA = sample.B01
  var reflB = sample.B03
  var reflC = sample.B8A

  // Compute ozone
  let ozoneCol = compute_ozone(SZA, VZA, reflA, reflB, reflC)

  // Convert ozone from mol/cm2 to DU
  let k = 3.722 * Math.pow(10, -17)
  var ozoneDu = ozoneCol * k

  // Make a visualisation based on the preset colour ramp
  const visualizer = ColorGradientVisualizer.createRedTemperature(140, 340)

  return [
    visualizer.process(ozoneDu)[0],
    visualizer.process(ozoneDu)[1],
    visualizer.process(ozoneDu)[2],
    sample.dataMask
  ]
}
