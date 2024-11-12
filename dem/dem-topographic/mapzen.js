//VERSION=3
// To set custom max and min values, set
// defaultVis to false and choose your max and
// min values. The color map will then be scaled
// to those max and min values

const max = 8000;
const min = -5000;
const seaLevel = 0;

function setup() {
  return {
    input: ["DEM", "dataMask"],
    output: [
      { id: "default", bands: 4, sampleTYPE: "AUTO" },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ],
  };
}

const landMap = [
  [8000, 0xffffff],
  [7000, 0xf2f2f2],
  [6000, 0xe5e5e5],
  [5500, 0x493811],
  [5000, 0x5e4c26],
  [4500, 0x726038],
  [4000, 0x87724c],
  [3500, 0x998760],
  [3000, 0xad9b75],
  [2500, 0xc1af89],
  [2000, 0xd6c49e],
  [1500, 0xead8af],
  [1000, 0xfcedbf],
  [900, 0xaadda0],
  [800, 0xa5d69b],
  [700, 0x96ce8e],
  [600, 0x84c17a],
  [500, 0x7aba70],
  [400, 0x72b266],
  [300, 0x5ea354],
  [200, 0x4c933f],
  [100, 0x3d873d],
  [75, 0x357c3a],
  [50, 0x2d722d],
  [25, 0x266821],
  [10, 0x1e5e14],
  [0, 0x165407],
];

// add ocean color
const waterMap = [
  [-5, 0xa8d1ea],
  [-50, 0x89a8d1],
  [-100, 0x687fba],
  [-500, 0x4759a0],
  [-1000, 0x283087],
  [-5000, 0x070772],
];
const landVis = new ColorRampVisualizer(landMap, seaLevel, max);
const waterVis = new ColorRampVisualizer(waterMap, min, seaLevel);

function evaluatePixel(sample) {
  let val = sample.DEM;
  let imgVals = val > seaLevel ? landVis.process(val) : waterVis.process(val);

  // Return the 4 inputs and define content for each one
  return {
    default: [...imgVals, sample.dataMask],
    index: [val],
    dataMask: [sample.dataMask],
  };
}
