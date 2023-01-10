//VERSION=3

function setup() {
  return {
    input: ["B02", "B03", "B04", "BQA"],
    output: { bands: 3, sampleType: "UINT8" }
  };
}
  
function evaluatePixel(sample) {

// decoding BQA classes  
var bqa = decodeL8C2Qa(sample.BQA)

var water_pixels = bqa.water
var snow_pixels = bqa.snow
var clouds = bqa.cloud
var cloud_dilated = bqa.dilatedCloud
var cloudshadows = bqa.cloudShadow
var cirrus_clouds = bqa.cirrus
var fill_pixels = bqa.fill
var clear_pixels = bqa.clear

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
