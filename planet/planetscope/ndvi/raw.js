//VERSION=3
// ndvi

function setup() {
  return {
    input: ["nir", "red", "dataMask"],
    output: {
      bands: 4,
    },
  };
}

function evaluatePixel(sample) {
  return [index(sample.nir, sample.red)];
}
