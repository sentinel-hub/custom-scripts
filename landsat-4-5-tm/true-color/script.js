//VERSION=3

let minVal = 0.0;
let maxVal = 0.4;

let viz = new DefaultVisualizer(minVal, maxVal);

function evaluatePixel(samples) {
    let val = [samples.B03, samples.B02, samples.B01];
    val = viz.processList(val);
    val.push(samples.dataMask);
    return val;
}

function setup() {
  return {
    input: [{
      bands: [
        "B01",
        "B02",
        "B03",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}