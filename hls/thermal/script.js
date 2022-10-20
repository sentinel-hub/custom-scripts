//VERSION=3
let minVal = -50;
let maxVal = 50;

let viz = ColorGradientVisualizer.createBlueRed(minVal, maxVal);

function evaluatePixel(samples) {
    let val = samples.ThermalInfrared1;
    val = viz.process(val);
    val.push(samples.dataMask);
    return val;
}

function setup() {
  return {
    input: [{
      bands: [
        "ThermalInfrared1",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}

