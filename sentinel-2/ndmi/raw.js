//VERSION=3
function setup() {
    return {
        input: ["B8A", "B11"],
        output: { bands: 1, sampleType: "FLOAT32" }
    };
}

function evaluatePixel(samples) {
    return [index(samples.B8A, samples.B11)];
}
