//VERSION=3

let minVal = 0.0;
let maxVal = 0.4;

let viz = new DefaultVisualizer(minVal, maxVal);

function evaluatePixel(samples) {
    let val = [samples.B05, samples.B04, samples.B03];
    val = viz.processList(val);
    val.push(samples.dataMask);
    return val;
}

function setup() {
  return {
    input: [{
      bands: [
        "B03",
        "B04",
        "B05",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}

