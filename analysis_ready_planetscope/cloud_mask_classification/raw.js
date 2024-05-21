//VERSION=3

function setup() {
    return {
        input: [{
            bands: ["cloud_mask"]
        }],
        output: {
            bands: 4
        }
    }
}

function evaluatePixel(sample) {
    return [sample.cloud_mask];
}