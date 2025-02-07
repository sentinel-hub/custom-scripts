//VERSION=3
// To set custom max and min values, set
// choose your max and min values.
// The color map will then be scaled
// to those max and min values
const max = 3500;
const min = -200;

function setup() {
  return {
    input: ["DEM", "dataMask"],
    output: [
      { id: "default", bands: 4, sampleType: "AUTO" },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ],
  };
}

const map = [
  [3500, 0xf7eafd],
  [3000, 0xebebeb],
  [1000, 0xa76b18],
  [500, 0xdca620],
  [200, 0xA2AE32],
  [100, 0x18a722],
  [50, 0x018643],
  [30, 0x15965],
  [10, 0x01471c],
  [0, 0xbbbcbc],
  [-10, 0x2754de],
  [-20, 0x0d027e],
  [-50, 0x08014c],
  [-200, 0x4a4a4a],
];

const visualizer = new ColorRampVisualizer(map, min, max);

function evaluatePixel(samples) {
  const imgVals = visualizer.process(samples.DEM)

  // Return the 4 inputs and define content for each one
  return {
    default: [...imgVals, samples.dataMask],
    index: [samples.DEM],
    dataMask: [samples.dataMask],
  }
}
