//VERSION=3

function setup() {
  return {
    input: ["SWIR2", "NIR_Narrow", "Red", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
  var ndvi = (sample.NIR_Narrow - sample.Red) / (sample.NIR_Narrow + sample.Red)
  return [2.5 * sample.SWIR2, 2.5 * sample.NIR_Narrow, 2.5 * sample.Red, sample.dataMask];

}