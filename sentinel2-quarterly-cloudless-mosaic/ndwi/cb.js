//VERSION=3

function setup() {
    return {
        input: ["B03", "B08", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
            { id: "dataMask", bands: 1 }
        ]
    };
}

const colorRamp1 = [
    [0, 0xFFFFFF],
    [1, 0x008000]
];
const colorRamp2 = [
    [0, 0xFFFFFF],
    [1, 0x0000CC]
];

const viz1 = new ColorRampVisualizer(colorRamp1);
const viz2 = new ColorRampVisualizer(colorRamp2);

function evaluatePixel(samples) {
    let val = index(samples.B03, samples.B08);
    if (val < 0) {
        imgVals = viz1.process(-val)
    } else {
        imgVals = viz2.process(Math.sqrt(Math.sqrt(val)))
    }
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;

    return {
        default: imgVals.concat(samples.dataMask),
        index: [indexVal],
        eobrowserStats: [val],
        dataMask: [samples.dataMask]
    };
}
