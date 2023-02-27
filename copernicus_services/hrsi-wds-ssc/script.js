//VERSION=3

function setup() {
  return {
    input: ["SSC", "dataMask"],
    output: { bands: 4, sampleType: "AUTO" },
  };
}
const map = [
  [110, 0xff4dff], //110 - Wet Snow
  [115, 0xffffff], //115 - Dry Snow
  [120, 0xe6e64d], //120 - Snow free or patchy snow
  [200, 0x000000], //200 - Radar Shadow
  [205, 0xcccccc], //205 - Cloud or Cloud Shadow
  [210, 0x4d4dff], //210 - Water
  [220, 0x00a600], //220 - Forest
  [230, 0xf2a64d], //230 - Urban Areas
  [255, 0xff0000], //255 - NODATA
];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  let rgbVis = visualizer.process(sample.SSC);
  return rgbVis.concat(sample.dataMask);
}
