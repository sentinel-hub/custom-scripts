//VERSION=3
// To set custom max and min values, set
// defaultVis to false and choose your max and
// min values. The color map will then be scaled
// to those max and min values
const defaultVis = true;
const max = 175;
const min = 0;

function setup() {
    return {
        input: ["ACD", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "INT16" },
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
    [175, 0xe5dd26],
    [155, 0xced62f],
    [140, 0x9ec54a],
    [125, 0x63b16e],
    [110, 0x38a183],
    [95, 0x1b8583],
    [80, 0x1e8589],
    [65, 0x206378],
    [50, 0x2e4c67],
    [35, 0x2a3f62],
    [20, 0x2d1a4e],
    [5, 0x2e164c],
    [0, 0x360245],
];

if (!defaultVis) updateMap(max, min);
const visualizer = new ColorRampVisualizer(map);

function evaluatePixel(sample) {
    let val = sample.ACD;
    let imgVals = visualizer.process(val);

    return {
        default: imgVals.concat(sample.dataMask),
        index: [val],
        eobrowserStats: [val],
        dataMask: [sample.dataMask],
    };
}
