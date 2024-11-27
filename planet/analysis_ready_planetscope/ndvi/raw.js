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
  return [(sample.nir - sample.red) / (sample.nir + sample.red)];
}
