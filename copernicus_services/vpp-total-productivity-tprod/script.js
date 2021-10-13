//VERSION=3

// This custom script visualises TPROD(total productivity)  parameter

function setup() {
  return {
    input: ["TPROD", "dataMask"],
    output: { bands: 4},
    mosaicking: Mosaicking.TILE
  }
}
const map =
[
  [0, 0xFFFFE5],
  [825, 0xFFF7BC],
  [1650, 0xFEE391],
  [2475, 0xFEC44F],
  [3300, 0xFE9929],
  [4125, 0xEC7014],
  [4950, 0xCC4C02],
  [5775, 0x993404],
  [6600, 0x662506]
]

const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(samples) {
 if (samples.length == 1)
  {
    return [visualizer.process(samples[0].TPROD)[0], visualizer.process(samples[0].TPROD)[1], visualizer.process(samples[0].TPROD)[2], samples[0].TPROD != 65535];
  } 
  else if (samples.length > 1 & samples[0].TPROD != 0 & samples[0].TPROD != 65535)
  {
    return [visualizer.process(samples[0].TPROD)[0], visualizer.process(samples[0].TPROD)[1], visualizer.process(samples[0].TPROD)[2], samples[0].TPROD != 65535];
  } 
  else if (samples.length > 1 & samples[1].TPROD != 0  & samples[1].TPROD != 65535)
  {
    return [visualizer.process(samples[1].TPROD)[0], visualizer.process(samples[1].TPROD)[1], visualizer.process(samples[1].TPROD)[2], samples[1].TPROD != 65535];
  }

 }







