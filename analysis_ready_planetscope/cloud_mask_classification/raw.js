//VERSION=3

function setup() {
    return {
        input: ["cloud_mask"],
        output: {
            bands: 4
        }
    }
}

function evaluatePixel(sample) {
    return [sample.cloud_mask];
}