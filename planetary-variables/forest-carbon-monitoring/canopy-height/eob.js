//VERSION=3
// To set custom max and min values, set
// defaultVis to false and choose your max and
// min values. The color map will then be scaled
// to those max and min values
const defaultVis = true;
const max = 30;
const min = 0;

function setup() {
  return {
    input: ["CH", "dataMask"],
    output: [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "UINT8" },
      { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ],
  };
}

function updateMap(max, min) {
  const numIntervals = map.length;
  const intervalLength = (max - min) / (numIntervals - 1);
  for (let i = 0; i < numIntervals; i++) {
    map[i][0] = max - intervalLength * i;
  }
}

const map = [
  [30, 0x345e03],
  [20, 0x6da20c],
  [10, 0xbace6e],
  [0, 0xf0f5d5],
];

const visualizer = new ColorRampVisualizer(map, min, max);

function evaluatePixel(sample) {
  let val = sample.CH;
  let imgVals = visualizer.process(val);

  return {
    default: imgVals.concat(sample.dataMask),
    index: [val],
    eobrowserStats: [val],
    dataMask: [sample.dataMask],
  };
}
