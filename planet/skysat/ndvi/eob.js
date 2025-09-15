//VERSION=3
// NDVI

function setup() {
  return {
    input: ["red", "nir", "dataMask"],
    output: [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 2, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ]
  }
}

function evaluatePixel(sample) {
  let NDVI = index(sample.nir, sample.red);
  const indexVal = isFinite(NDVI) && sample.dataMask === 1 ? NDVI : NaN;
  let id_default = valueInterpolate(NDVI,
    [0, 0.2, 0.3, 0.4, 0.5, 1.0],
    [
      [1, 1, 0.88],
      [0.57, 0.75, 0.32],
      [0.44, 0.64, 0.25],
      [0.31, 0.54, 0.18],
      [0.19, 0.43, 0.11],
      [0.06, 0.33, 0.04],
      [0, 0.27, 0],
    ]
  );

  return {
    default: [...id_default, sample.dataMask],
    index: [indexVal],
    eobrowserStats: [indexVal, sample.dataMask],
    dataMask: [sample.dataMask],
  };
}
