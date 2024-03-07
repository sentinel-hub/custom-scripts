//VERSION=3
//NDVI

function setup() {
  return {
    input: [{
      bands: [
        "red",
        "nir",
        "dataMask",
        "clear"
      ]
    }],
    output: [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 2, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ]
  }
}

function evaluatePixel(samples) {
  let ndvi = (samples.nir - samples.red) / (samples.nir + samples.red);
  const indexVal = samples.dataMask === 1 ? ndvi : NaN;
  const clear = samples.dataMask * samples.clear;

  let id_default = colorBlend(ndvi, [0.0, 0.5, 1.0],
    [
      [1, 0, 0, clear],
      [1, 1, 0, clear],
      [0.1, 0.31, 0, clear],
    ])

  return {
    default: id_default,
    index: [indexVal],
    eobrowserStats: [indexVal, samples.clear],
    dataMask: [samples.dataMask],
  };
}
