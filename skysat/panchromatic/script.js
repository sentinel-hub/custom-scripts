//VERSION=3
//Panchromatic

function setup() {
  return {
    input: [{"bands": ["PAN","dataMask"]}],
    output: { bands: 4}
  }
}
var f = 10000
function evaluatePixel(sample) {
  return [sample.PAN/f, sample.PAN/f, sample.PAN/f, sample.dataMask]
}
