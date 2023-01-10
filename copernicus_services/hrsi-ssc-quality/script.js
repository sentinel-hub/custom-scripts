//VERSION=3

function setup() {
  return {
    input: ["QCSSC", "dataMask"],
    output: {bands: 4,
    sampleType: "AUTO"
  }
}
}
const map = [
    [0, 0x00a600],  //0 - High Quality
    [1, 0xa6e64d],  //1 - Medium Quality
    [2, 0xf2a64d],  //2 - Low Quality
    [3, 0xff0000],  //3 - Minimal Quality
    [250, 0xcccccc],  //250 - Masked
    [255, 0x000000]  //255 - NODATA
  ];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  return [visualizer.process(sample.QCSSC)[0], visualizer.process(sample.QCSSC)[1], visualizer.process(sample.QCSSC)[2], sample.dataMask]};