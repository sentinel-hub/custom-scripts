//VERSION=3

//This custom script visualises the seasonality layer according to the data user guide.

//Set up input and output settings
function setup() {
  return {
    input: ["seasonality"],
    output: {
      bands: 3,
      sampleType: "AUTO"
    }
  }
}

//Create color ramp
const ramps = [
  [1, 0x99d9ea],  //1 month of water (Very soft cyan)
  [12, 0x0000aa]  //12 months of water - permanent water (Dark blue)
];

//Create visualizer
const visualizer = new ColorRampVisualizer(ramps);

//EvaluatePixel function
function evaluatePixel(sample) {
  if (sample.seasonality == 0){ //Not water
    return [1, 1, 1]            //Return White
  }else if (sample.seasonality > 12){ //No data
    return [0.8, 0.8, 0.8]            //Return Light gray
  }else if (sample.seasonality > 0 && sample.seasonality <= 12){  //1 - 12 month of water
    return [visualizer.process(sample.seasonality)[0], visualizer.process(sample.seasonality)[1], visualizer.process(sample.seasonality)[2]]; //Return color ramp values
  }
}
