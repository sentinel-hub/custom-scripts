//VERSION=3
//PlanetScope NDWI EO Browser

function setup() {
  return {
    input: [
      {
        bands: ["green", "nir", "dataMask", "clear"],
      },
    ],
    output: [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 2, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ],
  };
}

function evaluatePixel(sample) {
  let ndwi = index(sample.green, sample.nir);

  const clear = sample.dataMask && sample.clear;

  let ndwi_colored = colorBlend(
    ndwi,
    [-1, -0.5, -0.2, 0, 0.2, 0.5, 1.0],
    [
      [1, 0, 1],
      [1, 0.5, 0],
      [1, 1, 0],
      [0.2, 1, 0.5],
      [0, 0, 1],
      [0, 0, 0.3],
      [0, 0, 0],
    ]
  );

  return {
    default: [...ndwi_colored, clear],
    index: [ndwi],
    eobrowserStats: [ndwi, !clear],
    dataMask: [sample.dataMask],
  };
}
