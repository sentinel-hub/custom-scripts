//VERSION=3 (auto-converted from 1)

let minVal = -0.2;
let maxVal = 0.4;

let viz = new HighlightCompressVisualizerSingle(minVal, maxVal);

function evaluatePixel(samples) {
    let val = (samples.B06 > 0) ? (samples.B04 - samples.B02) / samples.B06 : JAVA_DOUBLE_MAX_VAL;
    return viz.process(val);
}

function setup() {
  return {
    input: [{
      bands: [
          "B02",
          "B04",
          "B06"
      ]
    }],
    output: { bands: 1 }
  }
}

