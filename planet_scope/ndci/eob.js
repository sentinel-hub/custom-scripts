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

  let ndci = index(sample.rededge, sample.red); 

  const clear = sample.dataMask && sample.clear;  

  let ndci_colored = colorBlend(ndci, [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
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
  let ndci_colored_masked = (ndci < threshold) ? true_color : ndci_map;

  return {
    default: [...ndci_colored_masked, clear],
    index: [ndci],
    eobrowserStats: [ndci, !clear],
    dataMask: [sample.dataMask],
  };
}
