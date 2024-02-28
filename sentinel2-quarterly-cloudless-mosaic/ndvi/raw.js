//VERSION=3

function setup() {
    return {
        input: ["B04", "B08"],
        output: {
            bands: 1,
            sampleType: "FLOAT32"
        }
    };
}

function evaluatePixel(samples) {
    return [index(samples.B08, samples.B04)]
}
