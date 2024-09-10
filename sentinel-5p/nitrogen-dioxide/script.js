//VERSION=3
const band = "NO2";
var minVal = 0.0;
var maxVal = 0.0001;

function setup() {
  return {
    input: [band, "dataMask"],
    output: {
      bands: 4,
    },
  };
}

var viz = ColorRampVisualizer.createBlueRed(minVal, maxVal);

function evaluatePixel(samples) {
  let ret = viz.process(samples[band]);
  ret.push(samples.dataMask);
  return ret;
}
