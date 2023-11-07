//VERSION=3
function setup() {
    return {
        input: ["B02", "B04", "B08"],
        output: {
            bands: 1,
            sampleType: "FLOAT32"
        }
    };
}

function evaluatePixel(samples) {
    return [2.5 * (samples.B08 - samples.B04) / ((samples.B08 + 6.0 * samples.B04 - 7.5 * samples.B02) + 1.0)]
}
