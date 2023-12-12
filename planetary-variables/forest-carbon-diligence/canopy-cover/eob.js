//VERSION=3
const defaultVis = true
const max = 100
const min = 0

function setup() {
    return {
        input: ["CC", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "UINT8" },
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
    [100, 0x183D19],
    [90, 0x124F24],
    [80, 0x0E6327],
    [70, 0x246D29],
    [60, 0x498418],
    [50, 0x669516],
    [40, 0x859E25],
    [30, 0xA4AB38],
    [20, 0xD3C058],
    [10, 0xDDD17C],
    [0, 0xF0F5D5],
];

if (!defaultVis) updateMap(max, min);
const visualizer = new ColorRampVisualizer(map);

function evaluatePixel(sample) {
    let val = sample.CC;
    let imgVals = visualizer.process(val)

    return {
        default: imgVals.concat(sample.dataMask),
        index: [val],
        eobrowserStats: [val],
        dataMask: [sample.dataMask]
    };
}
