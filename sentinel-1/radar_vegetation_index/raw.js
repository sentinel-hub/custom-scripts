// Radar vegetation index for Sentinel-1 (RVI4S1) SAR data
// Institute: MRSLab, Indian Institute of Technology Bombay, India
// Data requirements: Sentinel-1 GRD data
function setup() {
    return {
        input: ["VV", "VH", "dataMask"],
        output: { bands: 1, sampleType: "FLOAT32" }
    };
}

function evaluatePixel(samples) {
    //equivalent to complement of the degree of polarization
    let dop = (samples.VV / (samples.VV + samples.VH));
    let m = 1 - dop;
    //depolarization within the vegetation
    let value = (Math.sqrt(dop)) * ((4 * (samples.VH)) / (samples.VV + samples.VH));
    return [value]
}
