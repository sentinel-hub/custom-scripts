//VERSION=3

function setup() {
    return {
        input: [{
            bands: ["blue", "green", "red", "dataMask"],
        }],
        output: {
            bands: 4
        }
    };
}

let factor = 1/2000;
function evaluatePixel(sample) {
    return [
        factor * sample.red,
        factor * sample.green,
        factor * sample.blue,
        sample.dataMask
    ];
}