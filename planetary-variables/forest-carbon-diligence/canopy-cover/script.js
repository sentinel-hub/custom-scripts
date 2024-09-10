//VERSION=3
const defaultVis = true;
const max = 100;
const min = 0;

function setup() {
  return {
    input: ["CC", "dataMask"],
    output: { bands: 4, sampleTYPE: "AUTO" },
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
  [100, 0x183d19],
  [90, 0x124f24],
  [80, 0x0e6327],
  [70, 0x246d29],
  [60, 0x498418],
  [50, 0x669516],
  [40, 0x859e25],
  [30, 0xa4ab38],
  [20, 0xd3c058],
  [10, 0xddd17c],
  [0, 0xf0f5d5],
];

const visualizer = new ColorRampVisualizer(map, min, max);

function evaluatePixel(sample) {
  let val = sample.CC;
  let imgVals = visualizer.process(val);

  return [...imgVals, sample.dataMask];
}
