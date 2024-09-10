//VERSION=3
const band = "AER_AI_354_388";
const minVal = -1;
const maxVal = 5;

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
