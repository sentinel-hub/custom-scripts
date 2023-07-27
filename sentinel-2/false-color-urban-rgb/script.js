//VERSION=3
let minVal = 0.0;
let maxVal = 0.4;

let viz = new HighlightCompressVisualizer(minVal, maxVal);

function setup() {
  return {
    input: ["B12", "B11", "B04","dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
  let val = [samples.B12, samples.B11, samples.B04,samples.dataMask];
  return viz.processList(val);
}
