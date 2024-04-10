//VERSION=3
// NDVI

function setup() {
  return {
    input: ["Red", "NIR", "dataMask"],
    output: [
      { id: "default", bands: 1 },
    ]
  }
}

function evaluatePixel(sample) {
  let NDVI = index(sample.NIR, sample.Red);
  return { default: [NDVI] };
}
