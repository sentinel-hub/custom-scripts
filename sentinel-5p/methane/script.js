//VERSION=3
var minVal = 1600.0;
var maxVal = 2000.0;
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
    input: ["CH4","dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
   const [r, g, b] = visualizer.process(samples. CH4);
   return [r, g, b, samples.dataMask];
}