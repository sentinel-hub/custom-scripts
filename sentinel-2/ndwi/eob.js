//VERSION=3
//ndwi
const colorRamp1 = [
    [0, 0xFFFFFF],
    [1, 0x008000]
];
const colorRamp2 = [
    [0, 0xFFFFFF],
    [1, 0x0000CC]
];

let viz1 = new ColorRampVisualizer(colorRamp1);
let viz2 = new ColorRampVisualizer(colorRamp2);

function setup() {
    return {
        input: ["B03", "B04", "B08", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 2, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

function evaluatePixel(samples) {
    let val = index(samples.B03, samples.B08);
    let imgVals = null;
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;

    if (val < -0) {
        imgVals = [...viz1.process(-val), samples.dataMask];
    } else {
        imgVals = [...viz2.process(Math.sqrt(Math.sqrt(val))), samples.dataMask];
    }

    return {
        default: imgVals,
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
