//VERSION=3
function setup() {
    return {
        input: ["B02", "B03", "B04", "B08", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 2, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

const ramp = [
    [-0.5, 0x0c0c0c],
    [-0.2, 0xbfbfbf],
    [-0.1, 0xdbdbdb],
    [0, 0xeaeaea],
    [0.025, 0xfff9cc],
    [0.05, 0xede8b5],
    [0.075, 0xddd89b],
    [0.1, 0xccc682],
    [0.125, 0xbcb76b],
    [0.15, 0xafc160],
    [0.175, 0xa3cc59],
    [0.2, 0x91bf51],
    [0.25, 0x7fb247],
    [0.3, 0x70a33f],
    [0.35, 0x609635],
    [0.4, 0x4f892d],
    [0.45, 0x3f7c23],
    [0.5, 0x306d1c],
    [0.55, 0x216011],
    [0.6, 0x0f540a],
    [1, 0x004400],
];

const visualizer = new ColorRampVisualizer(ramp);

function evaluatePixel(samples) {
    let val = 2.5 * (samples.B08 - samples.B04) / ((samples.B08 + 6.0 * samples.B04 - 7.5 * samples.B02) + 1.0);
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;
    const imgVals = visualizer.process(val);

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
