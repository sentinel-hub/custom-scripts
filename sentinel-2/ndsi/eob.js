//VERSION=3
//Reference: https://earth.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm

function setup() {
    return {
        input: ["B03", "B11", "B04", "B02", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 2, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

function evaluatePixel(samples) {
    let val = index(samples.B03, samples.B11);
    let imgVals = null;
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;

    if (val > 0.42)
        imgVals = [0, 0.8, 1, samples.dataMask];
    else
        imgVals = [2.5 * samples.B04, 2.5 * samples.B03, 2.5 * samples.B02, samples.dataMask];

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
