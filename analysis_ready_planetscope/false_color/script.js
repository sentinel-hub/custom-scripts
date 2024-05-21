//VERSION=3

function setup() {
  return {
    input: ["nir", "green", "blue", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
  return [sample.nir / 3000, sample.green / 3000, sample.blue / 3000,  sample.dataMask];
}