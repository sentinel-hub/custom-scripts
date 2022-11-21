//VERSION=3
function setup() {
  return {
    input: [{"bands": ["Red", "NIR","dataMask"]}],
    output: { bands: 4}
  }
}
var f = 10000
function evaluatePixel(sample) {
  var NDVI = index (sample.NIR/f, sample.Red/f)
  return valueInterpolate (NDVI,
    [-1, -0.5, 0.2, 0.3, 0.4, 0.5, 1.0],
    [
      [1, 0, 1, sample.dataMask],
      [1, 0.5, 0, sample.dataMask],
      [1, 1, 0, sample.dataMask],
      [0.2, 1, 0.5, sample.dataMask],
      [0,0, 1, sample.dataMask],
      [0, 0, 0.3, sample.dataMask],
      [0, 0, 0, sample.dataMask],
  ])
}