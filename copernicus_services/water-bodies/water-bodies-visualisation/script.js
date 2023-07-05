//VERSION=3

// This custom script visualises water bodies derived from water bodies detection layer (WB )

//set up the input and output settings.
function setup() {
  return {
    input: ["WB", "dataMask"],
    output: { 
      bands: 4, 
      sampleType: "AUTO"
    }
  }
}

// evaluatePixel function
function evaluatePixel(sample) {
  if (sample.WB == 70) return[0,0,1,1]; // blue
  else return [0,0,0,0] // transparent
}
