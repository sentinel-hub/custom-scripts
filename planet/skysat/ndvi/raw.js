//VERSION=3
// NDVI

function setup() {
  return {
    input: ["red", "nir"],
    output: [
      { id: "default", bands: 1 },
    ]
  }
}

function evaluatePixel(sample) {
  let NDVI = index(sample.nir, sample.red);
  return { default: [NDVI] };
}
