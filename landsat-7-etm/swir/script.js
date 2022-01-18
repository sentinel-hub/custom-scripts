//VERSION=3
let minVal = 0.0;
let maxVal = 0.4;

let viz = new HighlightCompressVisualizer(minVal, maxVal);

function setup() {
  return {
    input: ["B07", "B05", "B03","dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
    let val = [samples.B07, samples.B05, samples.B03,samples.dataMask];
    return viz.processList(val);
}