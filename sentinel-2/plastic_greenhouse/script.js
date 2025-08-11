//VERSION=3
function setup() {
  return {
    input: ["B02","B03", "B04", "B08", "dataMask"],
    output:[
      { id: "default", bands: 3 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 }
    ] 
  };
}

//setting constants
const minVal = 0;
const maxVal = 1.5;
const threshold = 0.13;
const opacity = 1;

const visualizer = ColorGradientVisualizer.createBlueRed(minVal, maxVal);
visualizer.process(0.1)
visualizer.process(0.25)
visualizer.process(0.3)
visualizer.process(0.75)
visualizer.process(1.25)

function evaluatePixel(sample) {
  let index = (sample.B02 / (1 - ((sample.B02 + sample.B03 + sample.B08)/3)));
  let color = visualizer.process(index);
  let RGB = [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02];
  return {
    default: (index > threshold) ? [color[0], color[1], color[2]] : RGB,
    index: [index],
    eobrowserStats: [index],
    dataMask: [sample.dataMask]
  };
}