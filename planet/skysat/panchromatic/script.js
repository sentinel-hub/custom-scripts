//VERSION=3
//Panchromatic

function setup() {
  return {
    input: ["pan", "dataMask"],
    output: { bands: 4 }
  }
}
var f = 10000
function evaluatePixel(sample) {
  return [sample.pan / f, sample.pan / f, sample.pan / f, sample.dataMask]
}
