//VERSION=3 
// By András Zlinszky, Sinergise and Github Copilot
// RGB visualization of air pollution from Sentinel-5P
// Red: NO2, Green: SO2, Blue: O3
// Adjust min and max values below to change color mapping

var NO2minVal = 0.0;
var NO2maxVal = 0.0001;

var SO2minVal = 0.0;
var SO2maxVal = 0.0001;

var O3minVal = 0.0;
var O3maxVal = 0.18;

var statband = ["NO2", "SO2", "O3"];

function setup() {
  return {
    input: [
      { datasource: "S5PL2", bands: ["NO2", "dataMask"] },
      { datasource: "S5PL2_1", bands: ["SO2", "dataMask"] },
      { datasource: "S5PL2_2", bands: ["O3", "dataMask"] }
    ],
    output: [
      { id: "default", bands: 4 },
      { id: "dataMask", bands: 1 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" }
    ],
    mosaicking: "ORBIT"
  };
}

function mean(arr, key) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][key];
  }
  return sum / arr.length;
}

function isClear(sample) {
  return sample.dataMask === 1;
}

function evaluatePixel(samples, inputData, inputMetadata, customData) {
  // samples.S5PL2 = NO2, samples.S5PL2_1 = SO2, samples.S5PL2_2 = O3
  const clearNO2 = samples.S5PL2.filter(isClear);
  const clearSO2 = samples.S5PL2_1.filter(isClear);
  const clearO3  = samples.S5PL2_2.filter(isClear);

  const meanNO2 = mean(clearNO2, "NO2");
  const meanSO2 = mean(clearSO2, "SO2");
  const meanO3  = mean(clearO3, "O3");

  let r = (meanNO2 - NO2minVal) / (NO2maxVal - NO2minVal);
  let g = (meanSO2 - SO2minVal) / (SO2maxVal - SO2minVal);
  let b = (meanO3 - O3minVal) / (O3maxVal - O3minVal);

  r = Math.max(0, Math.min(1, r));
  g = Math.max(0, Math.min(1, g));
  b = Math.max(0, Math.min(1, b));

  const dataMask = (clearNO2.length > 0 && clearSO2.length > 0 && clearO3.length > 0) ? 1 : 0;

  return {
    default: [r, g, b, dataMask],
    index: [meanNO2, meanSO2, meanO3],
    eobrowserStats: [meanNO2, meanSO2, meanO3],
    dataMask: [dataMask]
  };
}