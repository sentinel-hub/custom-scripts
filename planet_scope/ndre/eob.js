//VERSION=3
//PlanetScope NDRE EO Browser

function setup() {
  return {
    input: [{
      bands: [
        "nir",
        "rededge",
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
  let ndre = (samples.nir - samples.rededge) / (samples.nir + samples.rededge);
  const clear = (samples.dataMask * samples.clear);
  let id_default = colorBlend(ndre, [0.0, 0.5, 1.0],
    [
      [1, 0, 0, clear],
      [1, 1, 0, clear],
      [0.1, 0.31, 0, clear],
    ])

  return {
    default: id_default,
    index: [ndre],
    eobrowserStats: [ndre, +!clear],
    dataMask: [samples.dataMask],
  };
}