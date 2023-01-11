//VERSION=3

function setup() {
  return {
    input: ["FSCOG", "dataMask"],
    output: { bands: 4, sampleType: "AUTO" },
  };
}

const ramps = [
  [0, 0xffffff],
  [100, 0x4d4dff],
];

const visualizer = new ColorRampVisualizer(ramps);

function evaluatePixel(sample) {
  var FSCOG_viz = visualizer.process(sample.FSCOG);
  if (sample.FSCOG == 255) {
    return [0, 0, 0, sample.dataMask];
  } else if (sample.FSCOG == 205) {
    return [0.9, 0.9, 0.9, sample.dataMask];
  } else {
    return [FSCOG_viz[0], FSCOG_viz[1], FSCOG_viz[2], sample.dataMask];
  }
}
