//VERSION=3
// User must set these three values
var indexNumber = 0; // Necessary to choose the visualization option
var minValue = 0;
var maxValue = 30;

// Color Scale
//var scaleLimits = [0, 5, 10, 20, 30]; // Define the borders
var scaleLimits = [minValue, (maxValue + 3 * minValue) / 4, (maxValue + minValue) / 2, (3 * maxValue + minValue) / 4, maxValue]
var s = 255; // Values range from 0 to 255 for every color channel
var colorScale =  // Define the RGB colors for each border
  [
    [0 / s, 0 / s, 255 / s], // Blue
    [0 / s, 255 / s, 255 / s], // Cyan
    [0 / s, 255 / s, 0 / s], // Green
    [255 / s, 255 / s, 0 / s], // Yellow
    [255 / s, 0 / s, 0 / s], // Red
  ];

// For evalscript V3 you need to specify two functions
//    setup() - where you specify inputs and outputs
//    evaluatePixel() - which calculates the output values for each pixel
function setup() {
  return {
    input: ["B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "SCL", "dataMask"], // You need to add here all the bands you are going to use
    output: [
      { id: "default", bands: 3 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 2, sampleType: 'FLOAT32' },
      { id: "dataMask", bands: 1 }
    ]
  };
}

function evaluatePixel(samples) {
  let NDWI = index(samples.B03, samples.B08); // Calculate the Normalized Difference Water Index, used in visualization
  let TrueColor = [samples.B04 * 2.5, samples.B03 * 2.5, samples.B02 * 2.5]; // Define true color composites multiplying each band by 2.5 to improve the appearance of images, used in visualization

  // Visualization
  // choose which one to use for visualization by setting indexNumber at the beginning of the code
  // indexNumber = 0 | Chlorophyll a mg / m3 (Mishra 2012 – Based on NDCI) 
  let index0 = 14.039 + (86.11 * (samples.B05 - samples.B04) / (samples.B05 + samples.B04)) + (194.325 * Math.pow((samples.B05 - samples.B04) / (samples.B05 + samples.B04), 2));
  let viz0 = colorBlend(index0, scaleLimits, colorScale);
  // indexNumber = 1 | Chlorophyll a for high values > 5 mg / m3 (Soria-Perpinyà 2021)
  let index1 = 19.866 * Math.pow(samples.B05 / samples.B04, 2.3051);
  let viz1 = colorBlend(index1, scaleLimits, colorScale);
  // indexNumber = 2 | Chlorophyll a  low values < 5 mg / m3 (Soria-Perpinyà 2021) 
  let index2 = Math.pow(10, -2.4792 * Math.log10(Math.max(samples.B03, samples.B02) / samples.B03) - 0.0389);
  let viz2 = colorBlend(index2, scaleLimits, colorScale);
  // indexNumber = 3 | Cyanobacteria (phycocyanin) cells/mL (Potes et al. 2018)
  let index3 = 115530.31 * Math.pow((samples.B03 * samples.B04) / samples.B02, 2.38);
  let viz3 = colorBlend(index3, scaleLimits, colorScale);
  // indexNumber = 4 | Cyanobacteria (Phycocyanin) mg/m3 (Soria-Perpinyà 2021)
  let index4 = 21.554 * Math.pow((samples.B05 / samples.B04), 3.47941);
  let viz4 = colorBlend(index4, scaleLimits, colorScale);
  // indexNumber = 5 | Turbidity NTU (Zhan et al. 2022)
  let index5 = 194.79 * (samples.B05 * (samples.B05 / samples.B02)) + 0.9061;
  let viz5 = colorBlend(index5, scaleLimits, colorScale);
  // indexNumber = 6 | CDOM ug/L (Soria-Perpinyà 2021)
  let index6 = 2.4072 * (samples.B04 / samples.B02) + 0.0709;
  let viz6 = colorBlend(index6, scaleLimits, colorScale);
  // indexNumber = 7 | Total Suspended Solids (TSS) mg/L (Soria-Perpinyà 2021)
  let index7 = 14.464 * (samples.B07 / samples.B02) + 16.336;
  let viz7 = colorBlend(index7, scaleLimits, colorScale);


  let imgVals = null;
  let val = NaN;
  // We made a first filter by NDWI (Water Index)
  if (NDWI < -0) { // If NDWI is lower than 0 is not water, so return  true color
    imgVals = [...TrueColor, samples.dataMask];
  } else { // Evaluate indexNumber
    switch (indexNumber) {
      case 0: // indexNumber = 0
        imgVals = [...viz0, samples.dataMask];
        val = index0;
        break;
      case 1: // indexNumber = 1
        imgVals = [...viz1, samples.dataMask];
        val = index1;
        break;
      case 2: // indexNumber = 2
        imgVals = [...viz2, samples.dataMask];
        val = index2;
        break;
      case 3: // indexNumber = 3
        imgVals = [...viz3, samples.dataMask];
        val = index3;
        break;
      case 4: // indexNumber = 4
        imgVals = [...viz4, samples.dataMask];
        val = index4;
        break;
      case 5: // indexNumber = 5
        imgVals = [...viz5, samples.dataMask];
        val = index5;
        break;
      case 6: // indexNumber = 6
        imgVals = [...viz6, samples.dataMask];
        val = index6;
        break;
      case 7: // indexNumber = 7
        imgVals = [...viz7, samples.dataMask];
        val = index7;
        break;
      default: // By default true color
        imgVals = [...TrueColor, samples.dataMask];
    }
  }

  // The library for tiffs works well only if there is only one channel returned. 
  // So we encode the "no data" as NaN here and ignore NaNs on frontend. 
  const indexVal = samples.dataMask === 1 ? val : NaN;

  return {
    default: imgVals,
    index: [indexVal],
    eobrowserStats: [val, isCloud(samples.SCL) ? 1 : 0],
    dataMask: [samples.dataMask]
  };
}

function isCloud(scl) {
  if (scl == 3) {
    // SC_CLOUD_SHADOWS
    return true;
  } else if (scl == 9) {
    // SC_CLOUD_HIGH_PROBABILITY
    return true;
  } else if (scl == 8) {
    // SC_CLOUD_MEDIUM_PROBABILITY
    return true;
  } else if (scl == 7) {
    // SC_UNCLASSIFIED
    return false;
  } else if (scl == 10) {
    // SC_THIN_CIRRUS
    return true;
  } else if (scl == 11) {
    // SC_SNOW_ICE
    return true;
  } else if (scl == 1) {
    // SC_SATURATED_OR_DEFECTIVE
    return true;
  } else if (scl == 2) {
    // SC_DARK_FEATURE_SHADOW
    return false;
  } else {
    return false;
  }
}
