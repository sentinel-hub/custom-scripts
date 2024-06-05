//VERSION=3
//PlanetScope NDCI EO Browser

function setup() {
  return {
    input: [{
      bands: [
        "red",
        "rededge",
        "green",
        "blue",
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
  };
}

function evaluatePixel(sample) {
  let band1 = sample.rededge;
  let band2 = sample.red;
  const denominator = band1 + band2;
  let ndci = denominator === 0 ? NaN : (band1 - band2) / denominator;

  const clear = (sample.dataMask * sample.clear);

  let ndci_map = colorBlend(ndci, [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
  [
    [0, 0, 1],   // Blue
    [0, 0, 1],   // Blue
    [0, 1, 0],   // Green
    [0, 0.8, 0], // Yellow-green
    [0, 0.6, 0], // Darker green
    [0, 0.4, 0]  // Even darker green
  ]);

  // Normalize true color bands
  let true_color = [sample.red/3000, sample.green/3000, sample.blue/3000];

  // Threshold value for switching between true color and ndci_map
  let threshold = 0.3; 

  // Conditional logic to select either true_color or ndci_map
  let id_default = (ndci < threshold) ? true_color : ndci_map;

  return {
    default: [...id_default, clear],
    index: [ndci],
    eobrowserStats: [ndci, +!clear],
    dataMask: [sample.dataMask],
  };
}
