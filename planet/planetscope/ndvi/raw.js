//VERSION=3
// ndvi

function setup() {
  return {
    input: ["NIR", "red", "dataMask"],
    output: {
      bands: 4,
    },
  };
}

function evaluatePixel(sample) {
  return [index(sample.NIR, sample.red)];
}
