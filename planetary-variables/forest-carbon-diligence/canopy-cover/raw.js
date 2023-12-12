//VERSION=3
function setup() {
    return {
        input: ["CC"],
        output: { bands: 1, sampleType: "UINT8" },
    };
}

function evaluatePixel(sample) {
    return [sample.CC]
}
