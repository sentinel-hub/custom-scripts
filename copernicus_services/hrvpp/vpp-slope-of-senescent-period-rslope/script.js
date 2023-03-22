//VERSION=3

// This custom script visualises VPP RSLOPE (slope of senescent period)  parameter
function setup() {
  return {
    input: ["RSLOPE", "dataMask"],
    output: { bands: 4 },
    mosaicking: Mosaicking.TILE
  }
}
const map =
  [
    [0.000, 0x440154],
    [0.005, 0x481668],
    [0.010, 0x482878],
    [0.015, 0x443983],
    [0.020, 0x3E4A89],
    [0.025, 0x375A8C],
    [0.030, 0x31688E],
    [0.035, 0x2B758E],
    [0.040, 0x26828E],
    [0.045, 0x21918C],
    [0.050, 0x1F9E89],
    [0.055, 0x25AB82],
    [0.060, 0x35B779],
    [0.065, 0x4EC36B],
    [0.070, 0x6CCD5A],
    [0.075, 0x8ED645],
    [0.080, 0xB5DE2B],
    [0.085, 0xDAE319],
    [0.090, 0xFDE725]
  ]

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(samples) {
  for (let i = 0; i < samples.length; i++) {
    let sample = samples[i];
    if (sample.dataMask == 1) {
      let rgbVis = visualizer.process(sample.RSLOPE * 0.0001);
      return rgbVis.concat(sample.dataMask);
    }
  }
}
