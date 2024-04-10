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

function evaluatePixel(samples) {
  let ndwi = (samples.Green / 3000 - samples.NIR / 3000) / (samples.Green / 3000 + samples.NIR / 3000);
  const indexVal = samples.dataMask === 1 ? ndwi : NaN;

  let id_default = colorBlend(ndwi,
    [-1, -0.5, -0.2, 0, 0.2, 0.5, 1.0],
    [
      [1, 0, 1, samples.dataMask],
      [1, 0.5, 0, samples.dataMask],
      [1, 1, 0, samples.dataMask],
      [0.2, 1, 0.5, samples.dataMask],
      [0, 0, 1, samples.dataMask],
      [0, 0, 0.3, samples.dataMask],
      [0, 0, 0, samples.dataMask],
    ]
  );

  return {
    default: id_default,
    index: [indexVal],
    eobrowserStats: [indexVal, samples.dataMask],
    dataMask: [samples.dataMask],
  };
}