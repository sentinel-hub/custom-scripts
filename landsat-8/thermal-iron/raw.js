//VERSION=3 

function setup() {
  return {
    input: ["B10"],
    output: {
      bands: 1,
      sampleType: "FLOAT32"
    }
  };
}

function evaluatePixel(samples) {
  // Convert to Celsius
  return [samples.B10 - 273];
}
