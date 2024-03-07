//VERSION=3
//False Color

function setup() {
  return {
    input: ["nir", "green", "blue"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [sample.nir / 3000, sample.green / 3000, sample.blue / 3000];
}