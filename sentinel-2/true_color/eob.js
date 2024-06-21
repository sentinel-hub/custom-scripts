//VERSION=3
let minVal = 0.0;
let maxVal = 0.4;

let viz = new HighlightCompressVisualizer(minVal, maxVal);

function setup() {
   return {
    input: ["B04", "B03", "B02", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
    let val = [samples.B04, samples.B03, samples.B02, samples.dataMask];
    return viz.processList(val);
}