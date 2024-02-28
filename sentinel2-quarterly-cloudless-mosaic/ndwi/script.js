//VERSION=3

function setup() {
    return {
        input: ["B03", "B08", "dataMask"],
        output: { bands: 4 }
    };
}


const colorRamp1 = [
    [0, 0xFFFFFF],
    [1, 0x008000]
];
const colorRamp2 = [
    [0, 0xFFFFFF],
    [1, 0x0000CC]
];

const viz1 = new ColorRampVisualizer(colorRamp1);
const viz2 = new ColorRampVisualizer(colorRamp2);

function evaluatePixel(samples) {
    let val = index(samples.B03, samples.B08);
    if (val < 0) {
        imgVals = viz1.process(-val)
    } else {
        imgVals = viz2.process(Math.sqrt(Math.sqrt(val)))
    }
    return imgVals.concat(samples.dataMask);
}
