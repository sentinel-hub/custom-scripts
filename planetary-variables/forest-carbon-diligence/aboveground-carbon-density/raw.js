//VERSION=3
function setup() {
    return {
        input: ["ACD"],
        output: { bands: 1, sampleType: "INT16" },
    };
}

function evaluatePixel(sample) {
    return [sample.ACD]
}
