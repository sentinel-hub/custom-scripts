//VERSION=3
//True color S3OLCI under S5P
//Author: Monja B. Šebela

function setup() {
  return {
    input: [
      {datasource: "S3OLCI", bands:["B04", "B06", "B08"]},
      {datasource: "S5PL2", bands:["CLOUD_TOP_PRESSURE"]}],
    output: [
      {id: "default", bands: 3, sampleType: SampleType.AUTO}
    ]
  }
}

function evaluatePixel(samples, inputData, inputMetadata, customData, outputMetadata){
var S5 = samples.S5PL2[0]
var S3 = samples.S3OLCI[0]
var CLOUD_TOP_PRESSURE = S5.CLOUD_TOP_PRESSURE
//CLOUD_TOP_PRESSURE visualization
var minVal = 10000.0;
var maxVal = 110000.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];
//End of CLOUD_TOP_PRESSURE visualization
  if (CLOUD_TOP_PRESSURE>0){
    return{default:colorBlend(CLOUD_TOP_PRESSURE, limits, colors)}
  }
    return{default:[S3.B08*3, S3.B06*3, S3.B04*3.5]}
}

/*To replace the CLOUD_TOP_PRESSURE product with other products, replace all "CLOUD_TOP_PRESSURE" mentions in the script with the other available products: 
AER_AI_340_380, AER_AI_354_388, CLOUD_BASE_HEIGHT, CLOUD_BASE_PRESSURE, CLOUD_FRACTION, CLOUD_OPTICAL_THICKNESS, CLOUD_TOP_HEIGHT, CLOUD_TOP_PRESSURE, CO, HCHO, NO2, O3, SO2, CH4
*/

// Visualizations for other products: 

/*
-- AER_AI_340_380
var minVal = -1.0;
var maxVal = 5.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0,0,0.5], [0,0,1], [0,1,1], [1,1,0], [1,0,0], [0.5,0,0]];

-- AER_AI_354_388
var minVal = -1.0;
var maxVal = 5.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0,0,0.5], [0,0,1], [0,1,1], [1,1,0], [1,0,0], [0.5,0,0]];

-- CH4
var minVal = 1600.0;
var maxVal = 2000.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- CO
var minVal = 0.0;
var maxVal = 0.1;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- HCHO
var minVal = 0.0;
var maxVal = 0.001;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- NO2
var minVal = 0.0;
var maxVal = 0.0001;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- O3
var minVal = 0.0;
var maxVal = 0.36;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- SO2
var minVal = 0.0;
var maxVal = 0.01;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0,0,0.5], [0,0,1], [0,1,1], [1,1,0], [1,0,0], [0.5,0,0]];

-- CLOUD_BASE_HEIGHT
var minVal = 0.0;
var maxVal = 20000.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- CLOUD_BASE_PRESSURE;
var minVal = 10000.0;
var maxVal = 110000.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- CLOUD_FRACTION;
var minVal = 0.0;
var maxVal = 1.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0,0,0.5], [0,0,1], [0,1,1], [1,1,0], [1,0,0], [0.5,0,0]];

-- CLOUD_OPTICAL_THICKNESS;
var minVal = 0.0;
var maxVal = 250.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- CLOUD_TOP_HEIGHT;
var minVal = 0.0;
var maxVal = 20000.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];

-- CLOUD_TOP_PRESSURE;
var minVal = 10000.0;
var maxVal = 110000.0;
var diff = maxVal - minVal;
var limits = [minVal, minVal + 0.125 * diff, minVal + 0.375 * diff, minVal + 0.625 * diff, minVal + 0.875 * diff, maxVal];
var colors = [[0, 0, 0.5], [0, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0.5, 0, 0]];
*/
