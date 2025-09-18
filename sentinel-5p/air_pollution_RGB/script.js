//VERSION=3 
// By András Zlinszky, Sinergise and Github Copilot
// RGB visualization of air pollution from Sentinel-5P
// Red: NO2, Green: SO2, Blue: HCHO

//How to use this script:
// In Copernicus Browser, select Sentinel-5P and N02 as the dataset
// On the date selector panel, choose time interval mode and set your time of interest - a period of typically a month 
// you need to enable data fusion in Copernicus Browser, and add the data source S5P_L2 twice.
// Then rename the new data sources to S5PL2_1 and S5PL2_2, respectively (replace the dash with the underscore)
// Finally, you can tune the min and max values below to get a better contrast for your area of interest. 

var NO2minVal = 0.00001;
var NO2maxVal = 0.0001;

var SO2minVal = 0.0001;
var SO2maxVal = 0.001;

var HCHOminVal = 0.00001;
var HCHOmaxVal = 0.0005;

function setup() {
  return {
    input: [
      { datasource: "S5PL2", bands: ["NO2", "dataMask"] },
      { datasource: "S5PL2_1", bands: ["SO2", "dataMask"] },
      { datasource: "S5PL2_2", bands: ["HCHO", "dataMask"] }
    ],
    output: [
      { id: "default", bands: 4 },
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
  // samples.S5PL2 = NO2, samples.S5PL2_1 = SO2, samples.S5PL2_2 = HCHO
  const clearNO2 = samples.S5PL2.filter(isClear);
  const clearSO2 = samples.S5PL2_1.filter(isClear);
  const clearHCHO  = samples.S5PL2_2.filter(isClear);

  const meanNO2 = mean(clearNO2, "NO2");
  const meanSO2 = mean(clearSO2, "SO2");
  const meanHCHO  = mean(clearHCHO, "HCHO");

  let r = (meanNO2 - NO2minVal) / (NO2maxVal - NO2minVal);
  let g = (meanSO2 - SO2minVal) / (SO2maxVal - SO2minVal);
  let b = (meanHCHO - HCHOminVal) / (HCHOmaxVal - HCHOminVal);

  r = Math.max(0, Math.min(1, r));
  g = Math.max(0, Math.min(1, g));
  b = Math.max(0, Math.min(1, b));

  // Data is valid only if all three bands have at least one valid sample
  let dataMask = (clearNO2.length > 0 && clearSO2.length > 0 && clearHCHO.length > 0) ? 1 : 0;

  return {
    default: [r, g, b, dataMask],
    dataMask: [dataMask]
  };
}
