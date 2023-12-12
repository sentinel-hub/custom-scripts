//VERSION=3
const defaultVis = true
const max = 175
const min = 0

function setup() {
    return {
        input: ["ACD", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "INT16" },
            { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
            { id: "dataMask", bands: 1 }
        ]
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
    [175, 0xE5DD26],
    [155, 0xCED62F],
    [140, 0x9EC54A],
    [125, 0x63B16E],
    [110, 0x38A183],
    [95, 0x1B8583],
    [80, 0x1E8589],
    [65, 0x206378],
    [50, 0x2E4C67],
    [35, 0x2A3F62],
    [20, 0x2D1A4E],
    [5, 0x2E164C],
    [0, 0x360245],
];

if (!defaultVis) updateMap(max, min);
const visualizer = new ColorRampVisualizer(map);

function evaluatePixel(sample) {
    let val = sample.ACD;
    let imgVals = visualizer.process(val)

    return {
        default: imgVals.concat(sample.dataMask),
        index: [val],
        eobrowserStats: [val],
        dataMask: [sample.dataMask]
    };
}
