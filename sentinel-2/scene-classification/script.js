//VERSION=3
function setup() {
  return {
    input: ["SCL", "dataMask"],
    output: { bands: 4, sampleType: "UINT8" }
  };
}

const classes = {
  0: [0, 0, 0], // No Data (Missing data) - black  
  1: [255, 0, 0], // Saturated or defective pixel - red 
  2: [47, 47, 47], // Topographic casted shadows ("Dark features/Shadows" for data before 2022-01-25) - very dark grey
  3: [100, 50, 0], // Cloud shadows - dark brown
  4: [0, 160, 0], // Vegetation - green
  5: [255, 230, 90], // Not-vegetated - dark yellow
  6: [0, 0, 255], // Water (dark and bright) - blue
  7: [128, 128, 128], // Unclassified - dark grey
  8: [192, 192, 192], // Cloud medium probability - grey
  9: [255, 255, 255], // Cloud high probability - white
  10: [100, 200, 255], // Thin cirrus - very bright blue
  11: [255, 150, 255], // Snow or ice - very bright pink
}

function evaluatePixel(samples) {
  // return black if key not available
  let imgVals = classes[samples.SCL] || [0, 0, 0];
  return imgVals.concat(samples.dataMask * 255);
}
