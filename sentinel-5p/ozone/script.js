//VERSION=3
var minVal = 0.0;
var maxVal = 0.36;
var diff = maxVal - minVal;
const map = [
	[minVal, 0x00007f], 
	[minVal + 0.125 * diff, 0x0000ff],
	[minVal + 0.375 * diff, 0x00ffff],
	[minVal + 0.625 * diff, 0xffff00],
	[minVal + 0.875 * diff, 0xff0000],
	[maxVal, 0x7f0000]
]; 

const visualizer = new ColorRampVisualizer(map)
function setup() {
   return {
    input: ["O3","dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
   const [r, g, b] = visualizer.process(samples.O3);
   return [r, g, b, samples.dataMask];
}