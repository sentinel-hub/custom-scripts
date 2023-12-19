//VERSION=3
// To set custom max and min values, set
// defaultVis to false and choose your max and
// min values. The color map will then be scaled
// to those max and min values
function setup() {
    return {
        input: ["CB", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
            { id: "dataMask", bands: 1 },
        ],
    };
}

const bp_ramp = [
    [0, 0xfff7ea],
    [0.1, 0xf3e3c8],
    [0.2, 0xdad0a4],
    [0.3, 0xbdc082],
    [0.4, 0x99b160],
    [0.5, 0x6da242],
    [0.6, 0x2c952e],
    [0.7, 0x008729],
    [0.8, 0x007932],
    [0.9, 0x006640],
    [1.0, 0x005444],
];

const visualizer = new ColorRampVisualizer(bp_ramp);

let factor = 1 / 1000;
function evaluatePixel(sample) {
    let val = sample.CB * factor;
    let imgVals = visualizer.process(val);
    return {
        default: [...imgVals, sample.dataMask],
        index: [val],
        eobrowserStats: [val],
        dataMask: [sample.dataMask],
    };
}
