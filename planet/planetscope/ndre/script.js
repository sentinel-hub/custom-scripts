//VERSION=3
//PlanetScope NDRE

function setup() {
  return {
    input: [
      {
        bands: ["nir", "rededge", "dataMask"],
      },
    ],
    output: { id: "default", bands: 4 },
  };
}

function evaluatePixel(sample) {
  let ndre = index(sample.nir, sample.rededge);

  let ndre_colored = colorBlend(
    ndre,
    [0.0, 0.5, 1.0],
    [
      [1, 0, 0],
      [1, 1, 0],
      [0.1, 0.31, 0],
    ]
  );

  return [...ndre_colored, sample.dataMask];
}
