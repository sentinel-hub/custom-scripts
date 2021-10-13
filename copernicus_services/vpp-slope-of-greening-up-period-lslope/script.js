//VERSION=3

// This custom script visualises VPP LSLOPE (slope of greening up period)  parameter

function setup() {
  return {
    input: ["LSLOPE", "dataMask"],
    output: { bands: 4},
    mosaicking: Mosaicking.TILE
  }
}
const map =
[
  [0, 0x440154],
  [50, 0x481668],
  [100, 0x482878],
  [150, 0x443983],
  [200, 0x3E4A89],
  [250, 0x375A8C],
  [300, 0x31688E],
  [350, 0x2B758E],
  [400, 0x26828E],
  [450, 0x21918C],
  [500, 0x1F9E89],
  [550, 0x25AB82],
  [600, 0x35B779],
  [650, 0x4EC36B],
  [700, 0x6CCD5A],
  [750, 0x8ED645],
  [800, 0xB5DE2B],
  [850, 0xDAE319],
  [900, 0xFDE725]
]

const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(samples) {
 if (samples.length == 1)
  {
    return [visualizer.process(samples[0].LSLOPE)[0], visualizer.process(samples[0].LSLOPE)[1], visualizer.process(samples[0].LSLOPE)[2], samples[0].LSLOPE != 32768];
  } 
  else if (samples.length > 1 & samples[0].LSLOPE != 0 & samples[0].LSLOPE != 32768)
  {
    return [visualizer.process(samples[0].LSLOPE)[0], visualizer.process(samples[0].LSLOPE)[1], visualizer.process(samples[0].LSLOPE)[2], samples[0].LSLOPE != 32768];
  } 
  else if (samples.length > 1 & samples[1].LSLOPE != 0  & samples[1].LSLOPE != 32768)
  {
    return [visualizer.process(samples[1].LSLOPE)[0], visualizer.process(samples[1].LSLOPE)[1], visualizer.process(samples[1].LSLOPE)[2], samples[1].LSLOPE != 32768];
  }

 }
 