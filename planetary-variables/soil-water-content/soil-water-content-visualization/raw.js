//VERSION=3
function setup() {
    return {
        input: ["SWC"],
        output: { bands: 4 },
    };
}

function evaluatePixel(sample) {
    let scaleFactor = 1000;
    let val = sample.SWC / scaleFactor;
    return [val];
}
