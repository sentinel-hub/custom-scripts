//VERSION=3
const vmin = 0
const vmax = 0.4

function setup() {
    return {
        input: ["SWC", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: 'FLOAT32' },
            { id: "eobrowserStats", bands: 1, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

function updateColormap(vmin, vmax) {
    const numIntervals = cmap.length
    const intervalLength = (vmax - vmin) / (numIntervals - 1);
    for (let i = 0; i < numIntervals; i++) {
        cmap[i][0] = vmin + intervalLength * i
    }
}

const cmap = [
    [0.00, 0xfff7ea],
    [0.05, 0xfaedda],
    [0.10, 0xede4cb],
    [0.15, 0xdedcbd],
    [0.20, 0xced3af],
    [0.25, 0xbdcba3],
    [0.30, 0xaac398],
    [0.35, 0x96bc90],
    [0.40, 0x80b48a],
    [0.45, 0x68ac86],
    [0.50, 0x4da484],
    [0.55, 0x269c83],
    [0.60, 0x009383],
    [0.65, 0x008a85],
    [0.70, 0x008186],
    [0.75, 0x007788],
    [0.80, 0x006d8a],
    [0.85, 0x00618c],
    [0.90, 0x00558d],
    [0.95, 0x00478f],
    [1.00, 0x003492],
];

updateColormap(vmin, vmax);
const visualizer = new ColorRampVisualizer(cmap);

function evaluatePixel(sample) {
    let scaleFactor = 1000
    let val = sample.SWC / scaleFactor;

    let imgVals = visualizer.process(val);
    return {
        default: [...imgVals, sample.dataMask],
        index: [val],
        eobrowserStats: [val],
        dataMask: [sample.dataMask]
    };
}