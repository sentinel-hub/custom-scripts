//VERSION=3

// This custom script visualises SEasonal Trajectories PPI

function setup() {
  return {
    input: ["PPI", "dataMask"],
    output: { bands: 4}
  }
}
const map =
[
  [0, 0xFFFFE5],
  [3750, 0xF7FCB9],
  [7500, 0xD9F0A3],
  [11250, 0xADDD8E],
  [15000, 0x78C679],
  [18750, 0x41AB5D],
  [22500, 0x238443],
  [26250, 0x006837],
  [30000, 0x004529]
]

const visualizer = new ColorMapVisualizer(map);
//EvaluatePixel function
function evaluatePixel(sample) 

    {
  return [visualizer.process(sample.PPI)[0], visualizer.process(sample.PPI)[1], visualizer.process(sample.PPI)[2], sample.dataMask];
    }
