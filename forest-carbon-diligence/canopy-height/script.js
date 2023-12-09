//VERSION=3

const defaultVis = true
const max = 0
const min = 100

function setup() {
    return {
        input: ["CH", "dataMask"],
        output: { bands: 4, sampleTYPE: "AUTO" },
    };
}

function updateMap(max, min) {
    const numIntervals = map.length
    const intervalLength = (max - min) / (numIntervals - 1);
    for (let i = 0; i < numIntervals; i++) {
        map[i][0] = max - intervalLength * i
    }
}

const map = [
    [30, 0x345E03],
    [20, 0x6DA20C],
    [10, 0xBACE6E],
    [0, 0xF0F5D5],
];

if (!defaultVis) updateMap(max, min);
const visualizer = new ColorRampVisualizer(map);

function evaluatePixel(sample) {
    let val = sample.CH;
    let imgVals = visualizer.process(val)

    return [...imgVals, sample.dataMask]
}