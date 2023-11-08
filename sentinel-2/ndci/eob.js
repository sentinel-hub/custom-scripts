/*
Normalized difference chlorophyll index
https://pdfs.semanticscholar.org/2fba/caa14adb43d5bc8d2dd274304f60814d933c.pdf
https://www.sciencedirect.com/science/article/pii/S0380133018301801 
https://www.researchgate.net/publication/297718964_Comparison_of_satellite_reflectance_algorithms_for_estimating_chlorophyll-a_in_a_temperate_reservoir_using_coincident_hyperspectral_aircraft_imagery_and_dense_coincident_surface_observations 
*/
function setup() {
    return {
        input: ["B03", "B04", "B05", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 2, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

const ramp = [
    [-0.2, 0x313695],
    [0, 0xe0f3f8],
    [0.2, 0xfdae61],
    [0.4, 0xa50026],
];

const visualizer = new ColorRampVisualizer(ramp);

function evaluatePixel(samples) {
    let val = index(samples.B05, samples.B04);
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
