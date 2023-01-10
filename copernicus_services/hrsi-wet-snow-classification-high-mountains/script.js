//VERSION=3

function setup() {
  return {
    input: ["WSM", "dataMask"],
    output: {bands: 4,
    sampleType: "AUTO"
  }
}
}
const map = [
    [110, 0xff4dff],  //110 - Wet Snow
    [125, 0xffffff],  //115 - Dry Snow or Snow free or patchy snow
    [200, 0x000000],  //200 - Radar Shadow
    [210, 0x4d4dff],  //210 - Water
    [220, 0x00a600],  //220 - Forest
    [230, 0xf2a64d],  //230 - Urban Areas
    [240, 0xccffcc], //240 - Non-mountain areas 
    [255, 0xff0000]  //255 - NODATA
  ];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  return [visualizer.process(sample.WSM)[0], visualizer.process(sample.WSM)[1], visualizer.process(sample.WSM)[2], sample.dataMask]};