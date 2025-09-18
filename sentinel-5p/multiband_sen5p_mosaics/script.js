//VERSION=3 
// example script to calculate Sentinel-5P multi-band mosaics

function setup() {
  return {
    input: [
      { datasource: "S5PL2", bands: ["CH4", "dataMask"] },
      { datasource: "S5PL2_1", bands: ["CLOUD_FRACTION", "dataMask"] },
      { datasource: "S5PL2_2", bands: ["CO", "dataMask"] },
      { datasource: "S5PL2_3", bands: ["HCHO", "dataMask"] },
      { datasource: "S5PL2_4", bands: ["NO2", "dataMask"] },
      { datasource: "S5PL2_5", bands: ["SO2", "dataMask"] }
    ],
    output: [
      { id: "default", bands: 6, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 }
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
  const clearCH4 = samples.S5PL2.filter(isClear);
  const clearCLOUD = samples.S5PL2_1.filter(isClear);
  const clearCO = samples.S5PL2_2.filter(isClear);
  const clearHCHO = samples.S5PL2_3.filter(isClear);
  const clearNO2 = samples.S5PL2_4.filter(isClear);
  const clearSO2 = samples.S5PL2_5.filter(isClear);

  const meanCH4 = mean(clearCH4, "CH4");
  const meanCLOUD = mean(clearCLOUD, "CLOUD_FRACTION");
  const meanCO = mean(clearCO, "CO");
  const meanHCHO = mean(clearHCHO, "HCHO");
  const meanNO2 = mean(clearNO2, "NO2");
  const meanSO2 = mean(clearSO2, "SO2");

  // Data is valid if any of the bands have at least one valid sample
  let dataMask = (
    clearCH4.length > 0 ||
    clearCLOUD.length > 0 ||
    clearCO.length > 0 ||
    clearHCHO.length > 0 ||
    clearNO2.length > 0 ||
    clearSO2.length > 0
  ) ? 1 : 0;

  return {
    default: [meanCH4, meanCLOUD, meanCO, meanHCHO, meanNO2, meanSO2],
    dataMask: [dataMask]
  };
}
