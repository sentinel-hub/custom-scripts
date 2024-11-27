//VERSION=3
//PlanetScope NDRE

function setup() {
  return {
    input: [
      {
        bands: ["red", "rededge", "dataMask"],
      },
    ],
    output: { id: "default", bands: 4 },
  };
}

function evaluatePixel(sample) {
  let ndci = index(sample.rededge, sample.red);

  let ndci_colored = colorBlend(
    ndci,
    [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
    [
      [0, 0, 1], // Blue
      [0, 0, 1], // Blue
      [0, 1, 0], // Green
      [0, 0.8, 0], // Yellow-green
      [0, 0.6, 0], // Darker green
      [0, 0.4, 0], // Even darker green
    ]
  );

  return [...ndci_colored, sample.dataMask];
}
