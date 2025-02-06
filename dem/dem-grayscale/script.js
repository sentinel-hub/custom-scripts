//VERSION=3
// To set custom max and min values, set
// choose your max and min values.
// The color map will then be scaled
// to those max and min values
const max = 9000;
const min = -12000;

function setup() {
  return {
    input: ["DEM", "dataMask"],
    output: { bands: 4, sampleTYPE: "AUTO" },
  };
}

const map = [
  [9000, 0xffffff],
  [7000, 0xf9f9f9],
  [5000, 0xf5f5f5],
  [3000, 0xebebeb],
  [1000, 0xe0e0e0],
  [500, 0xd6d6d6],
  [400, 0xc7c7c7],
  [300, 0xb4b4b4],
  [200, 0x9f9f9f],
  [50, 0x8b8b8b],
  [30, 0x828282],
  [10, 0x6d6d6d],
  [0, 0x636363],
  [-10, 0x5a5a5a],
  [-20, 0x545454],
  [-50, 0x505050],
  [-200, 0x4a4a4a],
  [-500, 0x464646],
  [-1000, 0x3d3d3d],
  [-5000, 0x373737],
  [-9000, 0x181818],
  [-12000, 0x000000],
];

const visualizer = new ColorRampVisualizer(map, min, max);

function evaluatePixel(sample) {
  let val = sample.DEM;
  let imgVals = visualizer.process(val);

  // Return the 4 inputs and define content for each one
  return [...imgVals, sample.dataMask];
}
