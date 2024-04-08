//VERSION=3

function setup() {
    return {
        input: [{
            bands: ["blue", "green", "red", "cloud_mask"],
        }],
        output: {
            bands: 4
        }
    };
}

let factor = 1/2000; 
function evaluatePixel(sample) {
    if (sample.cloud_mask==1) {
        return [factor * sample.red,
                factor * sample.green,
                factor * sample.blue,
                1];
    } else {
        return [0, 0, 0, 0];
    }
}
