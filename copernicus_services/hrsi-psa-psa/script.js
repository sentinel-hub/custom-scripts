//VERSION=3

function setup() {
  return {
    input: ["PSA", "dataMask"],
    output: {bands: 4,
    sampleType: "AUTO"
  }
}
}
const map = [
    [0, 0xccf24d],  //0 - No persistant snow cover
    [1, 0xccccff],  //1 - Persistant snow cover
    [255, 0x000000]  //255 - NODATA
  ];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  return [visualizer.process(sample.PSA)[0], visualizer.process(sample.PSA)[1], visualizer.process(sample.PSA)[2], sample.dataMask]};