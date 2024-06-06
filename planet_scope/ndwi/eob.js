//VERSION=3
//NDWI

function setup() {
  return {
    input: [{ bands: ["Green", "NIR", "dataMask"] }],
    output: [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 2, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ]
  }
}

function evaluatePixel(sample) {
  let ndwi = (sample.Green / 3000 - sample.NIR / 3000) / (sample.Green / 3000 + sample.NIR / 3000);
  ndwi = isFinite(ndwi) ? ndwi : NaN;
  const indexVal = sample.dataMask === 1 ? ndwi : NaN;

  let id_default = colorBlend(ndwi,
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
    default: [...id_default, sample.dataMask],
    index: [indexVal],
    eobrowserStats: [indexVal, sample.dataMask],
    dataMask: [sample.dataMask],
  };
}