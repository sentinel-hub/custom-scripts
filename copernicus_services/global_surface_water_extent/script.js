//VERSION=3

//This custom script visualises the maximum water extent layer according to the data user guide.

//Set up the input and output settings.
function setup() {
  return {
    input: ["extent"],
    output: {
      bands: 3,
      sampleType: "AUTO"
    }
  };
}

//Create discrete color map
const map = [
  [0, 0xffffff],  //Not water (White)
  [1, 0x6666ff],  //Water detected (Light blue)
  [255, 0xcccccc] //No data (Light gray)
];

//Create visualizer
const visualizer = new ColorMapVisualizer(map);

//EvaluatePixel function
function evaluatePixel(sample) {
  return [visualizer.process(sample.extent)[0], visualizer.process(sample.extent)[1], visualizer.process(sample.extent)[2]];
}
