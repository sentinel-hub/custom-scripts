//VERSION=3
function setup() {
    return {
        input: ["VV", "VH", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 1, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

const ramp = [
    [0, 0x8e0152],
    [0.25, 0xde77ae],
    [0.5, 0xf7f7f7],
    [0.75, 0x7fbc41],
    [1, 0x276419],
];


const visualizer = new ColorRampVisualizer(ramp);

function evaluatePixel(samples) {
    //equivalent to complement of the degree of polarization
    // Ratio parameter
    let q =  (samples.VH / samples.VV);

    // co-pol purity parameter m
    // m = (1-q)/(1+q)
    // normalized co-pol intensity parameter beta
    // beta = 1/(1+q)
    // Dual-pol radar vegetation indec DpRVIc = 1-(m*beta)
    // It can be also written directly in terms of q as follows
    let N = q*(q+3);
    let D = (q+1)*(q+1);

    //depolarization within the vegetation
    //let val = (Math.sqrt(dop)) * ((4 * (samples.VH)) / (samples.VV + samples.VH));
    let val = N/D;

    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;
    const imgVals = visualizer.process(val);
    return {
        default: imgVals.concat(samples.dataMask),
        index: [indexVal],
        eobrowserStats: [val],
        dataMask: [samples.dataMask]
    };
}
