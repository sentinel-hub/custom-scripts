//VERSION=3
// NDVI

function setup() {
  return {
    input: ["Red", "NIR", "dataMask"],
    output: [
      { id: "default", bands: 4 },
    ]
  }
}

function evaluatePixel(sample) {
  let NDVI = index(sample.NIR, sample.Red);
  let id_default = valueInterpolate(NDVI,
    [0, 0.2, 0.3, 0.4, 0.5, 1.0],
    [
      [1, 1, 0.88, sample.dataMask],
      [0.57, 0.75, 0.32, sample.dataMask],
      [0.44, 0.64, 0.25, sample.dataMask],
      [0.31, 0.54, 0.18, sample.dataMask],
      [0.19, 0.43, 0.11, sample.dataMask],
      [0.06, 0.33, 0.04, sample.dataMask],
      [0, 0.27, 0, sample.dataMask],
    ]);

  return {
    default: id_default,
  };
}
