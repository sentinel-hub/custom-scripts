//VERSION=3

// This custom script visualises raw NDVI values 

function setup() {
  return {
    input:["NDVI", "dataMask"],
    output: { bands: 4 }
  };
}
const map =
[ [-1, 0xFFFFFF],
  [-0.5, 0xFEFEF3],
  [0.00, 0xFFFFE5],
  [0.10, 0xF7FCB9],
  [0.20, 0xD9F0A3],
  [0.35, 0xADDD8E],
  [0.50, 0x78C679],
  [0.65, 0x41AB5D],
  [0.80, 0x238443],
  [0.90, 0x006837],
  [1.00, 0x004529]
]
const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(sample) 
{
  var ndvi = ((sample.NDVI&0xFFFF) << 16) >> 16; 
  
  return [visualizer.process(ndvi*0.0001)[0], visualizer.process(ndvi*0.0001)[1], visualizer.process(ndvi*0.0001)[2], sample.dataMask];
    
}