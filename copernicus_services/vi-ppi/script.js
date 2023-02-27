//VERSION=3

// This custom script visualises raw PPI values

function setup() {
  return {
    input: ["PPI", "dataMask"],
    output: { bands: 4 }

  }
}
const map =
  [
    [0.000, 0xFFFFE5],
    [0.375, 0xF7FCB9],
    [0.750, 0xD9F0A3],
    [1.125, 0xADDD8E],
    [1.500, 0x78C679],
    [1.875, 0x41AB5D],
    [2.250, 0x238443],
    [2.625, 0x006837],
    [3.000, 0x004529]
  ]

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  let rgbVis = visualizer.process(sample.PPI * 0.0001);
  return rgbVis.concat(sample.dataMask);
}