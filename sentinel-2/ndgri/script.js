//VERSION=3

function setup() {
  return {
    input: ["B04", "B12", "dataMask"],
    output: {
      bands: 4
    }
  };
}

function evaluatePixel(sample) {
  let denominator = sample.B04 + sample.B12;

  // Avoid division by zero and mask pixels without data
  if (sample.dataMask === 0 || denominator === 0) {
    return [0, 0, 0, 0];
  }

  let ndgri = (sample.B04 - sample.B12) / denominator;

  // Class 2: highest gamma-radiation class
  // NDGRI approximately -0.109 to -0.040
  if (ndgri >= -0.109 && ndgri <= -0.040) {
    return [1, 0, 0, sample.dataMask]; // red
  }

  // Class 1: broader anomalous range
  // NDGRI approximately -0.129 to -0.109
  if (ndgri >= -0.129 && ndgri < -0.109) {
    return [0, 1, 0, sample.dataMask]; // green
  }

  // Class 0 / values outside the anomalous range
  return [0.5, 0, 0.5, sample.dataMask]; // purple
}
