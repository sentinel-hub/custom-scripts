//VERSION=3
//PlanetScope NDVI EO Browser

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

function evaluatePixel(sample) {

  let band1 = sample.nir;
  let band2 = sample.red;
  const denominator = band1 + band2;  
  let ndvi = denominator === 0 ? NaN : (band1 - band2) / denominator;

  const clear = (sample.dataMask * sample.clear);

  let id_default = colorBlend(ndvi, [0.0, 0.5, 1.0],
    [
      [1, 0, 0],
      [1, 1, 0],
      [0.1, 0.31, 0],
    ])

  return {
    default: [...id_default, clear],
    index: [ndvi],
    eobrowserStats: [ndvi, +!clear],
    dataMask: [sample.dataMask],
  };
}
