//VERSION=3
let minVal = 0.0;
let maxVal = 0.8;

let viz = new HighlightCompressVisualizer(minVal, maxVal);

function evaluatePixel(samples) {
    let val = [samples.S3, samples.S2, samples.S1];
    val = viz.processList(val);
    val.push(samples.dataMask);
    return val;
}

function setup() {
  return {
    input: [{
      bands: [
        "S3",
        "S2",
        "S1",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}
