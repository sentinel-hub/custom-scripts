//VERSION=3

function setup() {
  return {
    input: ["GF", "dataMask"],
    output: { bands: 4, sampleType: "AUTO" },
  };
}

const ramps = [
  [0, 0xffffff],
  [100, 0x4d4dff],
];

const visualizer = new ColorRampVisualizer(ramps);

function evaluatePixel(sample) {
  var GF_viz = visualizer.process(sample.GF);
  if (sample.GF == 255) {
    return [0, 0, 0, sample.dataMask];
  } else if (sample.GF == 205) {
    return [0.9, 0.9, 0.9, sample.dataMask];
  } else {
    return [GF_viz[0], GF_viz[1], GF_viz[2], sample.dataMask];
  }
}
