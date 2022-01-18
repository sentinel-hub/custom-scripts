//VERSION=3

//This custom script visualises the transitions layer according to the data user guide.

//Set up input and output settings
function setup() {
  return {
    input: ["transitions"],
    output: {
      bands: 3,
      sampleType: "AUTO"
    }
  }
}

//Create discrete color map
const map = [
  [0, 0xffffff],    // Not water (White)
  [1, 0x0000ff],    // Permanent (Pure blue)
  [2, 0x22b14c],    // New permanent (Dark cyan - lime green)
  [3, 0xd1102d],    // Lost permanent (Strong red)
  [4, 0x99d9ea],    // Seasonal (Very soft cyan)
  [5, 0xb5e61d],    // New seasonal (Vivid yellow)
  [6, 0xe6a1aa],    // Lost seasonal (Very soft red)
  [7, 0xff7f27],    // Seasonal to permanent (Vivid orange)
  [8, 0xffc90e],    // Permanent to seasonal (Vivid yellow)
  [9, 0x7f7f7f],    // Ephemeral permanent (Dark gray)
  [10, 0xc3c3c3],   // Ephemeral seasonal (Light gray)
  [255, 0xcccccc]   // No data (Light gray)
];

//Create visualizer
const visualizer = new ColorMapVisualizer(map);

//EvaluatePixel function
function evaluatePixel(sample) {
  return [visualizer.process(sample.transitions)[0], visualizer.process(sample.transitions)[1], visualizer.process(sample.transitions)[2]];
}
