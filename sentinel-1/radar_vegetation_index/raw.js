// Radar vegetation index for Sentinel-1 (RVI4S1) SAR data
// Institute: MRSLab, Indian Institute of Technology Bombay, India
// Data requirements: Sentinel-1 GRD data
function setup() {
    return {
        input: ["VV", "VH"],
        output: { bands: 1, sampleType: "FLOAT32" }
    };
}

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
    //let value = (Math.sqrt(dop)) * ((4 * (samples.VH)) / (samples.VV + samples.VH));
    let value = N/D;
    return [value]
}
