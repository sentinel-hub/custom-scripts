//VERSION=3

// this script visualizes water bodies occurence derived from Quality layer (QUAL)

// set up input and output settings
function setup() {
  return {
    input: ["QUAL", "dataMask"],
    output: { 
      bands: 4, 
      sampleType: "AUTO"
    }
  }
}

// create a visualizer
const map = [
    [71, 0xff0000], // Very low occurrence  // red
    [72, 0x8e35ef], // Low occurrence       // Purple
    [73, 0xa6a6e6], // Medium occurrence    // Magenta
    [74, 0x00ffff], // High occurrence      // cyan
    [74, 0x3bb9ff], // Very high occurrence  // deep sky blue
    [76, 0x0032c8]  //Permanent occurrence   //blue
 
  ];

const visualizer = new ColorMapVisualizer(map);

//  evaluatePixel function
function evaluatePixel(sample) {
  return [visualizer.process(sample.QUAL)[0], visualizer.process(sample.QUAL)[1], visualizer.process(sample.QUAL)[2], sample.dataMask];
}
