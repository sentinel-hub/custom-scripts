//VERSION=3

function setup() {
  return {
    input: ["NIR_Narrow", "Red", "Green", "dataMask"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [2.5 * sample.NIR_Narrow, 2.5 * sample.Red, 2.5 * sample.Green, sample.dataMask];
}