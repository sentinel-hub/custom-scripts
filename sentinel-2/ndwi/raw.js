//VERSION=3
//This script was converted from v1 to v3 using the converter API
function setup() {
    return {
        input: [{
            bands: ["B03", "B08"]
        }],
        output: {
            bands: 1,
            sampleType: "FLOAT32"
        }
    }
}

function evaluatePixel(samples) {
    return index(samples.B03, samples.B08);
}
