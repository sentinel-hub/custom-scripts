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
// create a visualizer
const map = [
    [70, 0x0032c8], // water //blue
	];

const visualizer = new ColorMapVisualizer(map);

// evaluatePixel function
function evaluatePixel(sample) {
  return [visualizer.process(sample.WB)[0], visualizer.process(sample.WB)[1], visualizer.process(sample.WB)[2], sample.dataMask];
}
