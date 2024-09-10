//VERSION=3
const band = "CLOUD_OPTICAL_THICKNESS";
var minVal = 0.0;
var maxVal = 250.0;

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
