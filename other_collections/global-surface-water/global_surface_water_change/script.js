//VERSION=3

//This script visualizes the occurrence change intensity layer according to the Global Surface Water data user guide.

//Set up input and output settings
function setup() {
  return {
    input: ["change"],
    output: {
      bands: 3,
      sampleType: "AUTO"
    }
  }
}

//Create color ramp
const ramps = [
  [0, 0xff0000],    //-100% loss of occurrence (Pure red)
  [100, 0x000000],  //No change (Black)
  [200, 0x00ff00]   //100% increase in occurrence (Pure lime green)
];

//Create visualizer
const visualizer = new ColorRampVisualizer(ramps);

//EvaluatePixel function
function evaluatePixel(sample) {
  if (sample.change == 253){  //Not water
    return [1, 1, 1]          //Return White
  }else if (sample.change == 254){  //Unable to calculate a value due to no homologous months
    return [0.533, 0.533, 0.533]    //Return Dark gray
  }else if (sample.change == 255){  //No data
    return [0.8, 0.8, 0.8]          //Return Light gray
  }else if (sample.change <= 200){  //loss and increase of occurrence
    return [visualizer.process(sample.change)[0], visualizer.process(sample.change)[1], visualizer.process(sample.change)[2]];  //Return color ramp values
  }
}
