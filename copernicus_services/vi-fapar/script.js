//VERSION=3

// This custom script visualises raw FAPAR values

function setup() {
  return {
    input: ["FAPAR", "dataMask"],
    output: { bands: 4}
   
  }
}
const map =
[
  [0, 0xFFFFE5],
  [1250, 0xF7FCB9],
  [2500, 0xD9F0A3],
  [3750, 0xADDD8E],
  [5000, 0x78C679],
  [6250, 0x41AB5D],
  [7500, 0x238443],
  [8750, 0x006837],
  [10000, 0x004529]
]

const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(sample) 
{
  
  return [visualizer.process(sample.FAPAR)[0], visualizer.process(sample.FAPAR)[1], visualizer.process(sample.FAPAR)[2], sample.dataMask];
    }
