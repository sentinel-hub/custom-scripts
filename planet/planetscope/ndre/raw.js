//VERSION=3
//PlanetScope NDRE

function setup() {
  return {
    input: [
      {
        bands: ["nir", "rededge", "dataMask"],
      },
    ],
    output: { id: "default", bands: 1, sampleType: "FLOAT32" },
  };
}

function evaluatePixel(sample) {
  let ndre = index(sample.nir, sample.rededge);
  return [ndre];
}
