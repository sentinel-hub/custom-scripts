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
  [0.00, 0xFFFFE5],
  [82.5, 0xFFF7BC],
  [165, 0xFEE391],
  [247.5, 0xFEC44F],
  [330, 0xFE9929],
  [412.5, 0xEC7014],
  [495, 0xCC4C02],
  [577.5, 0x993404],
  [660, 0x662506]
]

const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(samples) {
 if (samples.length == 1)
  {
    return [visualizer.process(samples[0].TPROD*0.1)[0], visualizer.process(samples[0].TPROD*0.1)[1], visualizer.process(samples[0].TPROD*0.1)[2], samples[0].TPROD != 65535];
  } 
  else if (samples.length > 1 & samples[0].TPROD != 0 & samples[0].TPROD != 65535)
  {
    return [visualizer.process(samples[0].TPROD*0.1)[0], visualizer.process(samples[0].TPROD*0.1)[1], visualizer.process(samples[0].TPROD*0.1)[2], samples[0].TPROD != 65535];
  } 
  else if (samples.length > 1 & samples[1].TPROD != 0  & samples[1].TPROD != 65535)
  {
    return [visualizer.process(samples[1].TPROD*0.1)[0], visualizer.process(samples[1].TPROD*0.1)[1], visualizer.process(samples[1].TPROD*0.1)[2], samples[1].TPROD != 65535];
  }

 }




