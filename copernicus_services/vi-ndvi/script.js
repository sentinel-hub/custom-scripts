//VERSION=3

// This custom script visualises raw NDVI values 

function setup() {
  return {
    input: ["NDVI", "dataMask"],
    output: { bands: 4}
   
  }
}
const map =
[
  [0, 0xFFFFE5],
  [1000, 0xF7FCB9],
  [2000, 0xD9F0A3],
  [3500, 0xADDD8E],
  [5000, 0x78C679],
  [6500, 0x41AB5D],
  [8000, 0x238443],
  [9000, 0x006837],
  [10000, 0x004529]
]

const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(sample) 
{
  
  return [visualizer.process(sample.NDVI)[0], visualizer.process(sample.NDVI)[1], visualizer.process(sample.NDVI)[2], sample.dataMask];
    }
