//VERSION=3

function setup() {
  return {
    input: ["B02", "B03", "B04", "BQA"],
    output: { bands: 3, sampleType: "UINT8" }
  };
}
// define the BQA decoder function

decodeL8C2Qa(55052);
  
function evaluatePixel(sample) {

// decoding BQA classes  

var water_pixels = decodeL8C2Qa(sample.BQA).water
var snow_pixels = decodeL8C2Qa(sample.BQA).snow
var clouds = decodeL8C2Qa(sample.BQA).cloud
var cloud_dilated = decodeL8C2Qa(sample.BQA).dilatedCloud
var cloudshadows = decodeL8C2Qa(sample.BQA).cloudShadow
var cirrus_clouds = decodeL8C2Qa(sample.BQA).cirrus
var fill_pixels = decodeL8C2Qa(sample.BQA).fill
var clear_pixels = decodeL8C2Qa(sample.BQA).clear

// defining the colormap


if (water_pixels == 1){
  return [0, 0, 204]
}
else if (snow_pixels == 1) {
  return [255, 0, 255]
}
else if (clouds == 1) {
  return [225, 225, 225]
}
else if (cloud_dilated == 1) {
  return [175, 175, 175]
}
else if (cloudshadows == 1) {
  return [153, 102, 51]
}
else if (cirrus_clouds == 1) {
  return [102, 255, 255]
}
else if (fill_pixels == 1) {
  return [255, 0, 0]
}
else if (clear_pixels == 1) {
  return [1000*sample.B04, 1000*sample.B03, 1000*sample.B02]
}
else{
  return [0, 0, 0]
}
}