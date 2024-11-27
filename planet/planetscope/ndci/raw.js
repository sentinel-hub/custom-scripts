//VERSION=3
//PlanetScope NDRE

function setup() {
  return {
    input: [
      {
        bands: ["red", "rededge", "dataMask"],
      },
    ],
    output: { id: "default", bands: 1, sampleType: "FLOAT32" },
  };
}

function evaluatePixel(sample) {
  let ndci = index(sample.rededge, sample.red);
  return [ndci];
}
