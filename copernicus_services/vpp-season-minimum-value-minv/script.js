//VERSION=3

// This custom script visualises VPP MINV (season minimum value) parameter

function setup() {
  return {
    input: ["MINV", "dataMask"],
    output: { bands: 4},
    mosaicking: Mosaicking.TILE
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
//EvaluatePixel function
function evaluatePixel(samples) 
{
  for (let i = 0; i < samples.length; i++) 
  {
    let sample = samples[i];
    if (sample.dataMask == 1) 
    {
    return [visualizer.process(sample.MINV*0.0001)[0], visualizer.process(sample.MINV*0.0001)[1], visualizer.process(sample.MINV*0.0001)[2], sample.dataMask];
   } 
  }
 }
