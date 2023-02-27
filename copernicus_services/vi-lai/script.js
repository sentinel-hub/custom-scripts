//VERSION=3

// This custom script visualises raw LAI values

function setup() {
  return {
    input: ["LAI", "dataMask"],
    output: { bands: 4 }

  }
}
const map =
  [
    [0.000, 0xFFFFE5],
    [1.000, 0xF7FCB9],
    [2.000, 0xD9F0A3],
    [3.000, 0xADDD8E],
    [4.000, 0x78C679],
    [5.000, 0x41AB5D],
    [6.000, 0x238443],
    [7.000, 0x006837],
    [8.000, 0x004529]
  ]

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  let rgbVis = visualizer.process(sample.LAI * 0.0001);
  return rgbVis.concat(sample.dataMask);
}