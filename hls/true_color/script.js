//VERSION=3

function setup() {
  return {
    input: ["Red", "Green", "Blue", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
  return [2.5 * sample.Red, 2.5 * sample.Green, 2.5 * sample.Blue, sample.dataMask];
}