//VERSION=3
const moistureRamps = [
    [-0.8, 0x800000],
    [-0.24, 0xff0000],
    [-0.032, 0xffff00],
    [0.032, 0x00ffff],
    [0.24, 0x0000ff],
    [0.8, 0x000080]
];

const viz = new ColorRampVisualizer(moistureRamps);

function setup() {
    return {
        input: ["B03", "B04", "B8A", "B11", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 2, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

function evaluatePixel(samples) {
    let val = index(samples.B8A, samples.B11);
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;
    let imgVals = viz.process(val);

    return {
        default: imgVals.concat(samples.dataMask),
        index: [indexVal],
        eobrowserStats: [val, isCloud(samples) ? 1 : 0],
        dataMask: [samples.dataMask]
    };
}

function isCloud(samples) {
    const NGDR = index(samples.B03, samples.B04);
    const bRatio = (samples.B03 - 0.175) / (0.39 - 0.175);
    return bRatio > 1 || (bRatio > 0 && NGDR > 0);
}
