//VERSION=3
function setup() {
    return {
        input: ["VV", "VH", "dataMask"],
        output: { bands: 3 },
    };
}

var viz = new HighlightCompressVisualizer(0, 0.8);
var gain = 0.8;

function evaluatePixel(sample) {
    if (sample.dataMask == 0) {
        return [0, 0, 0];
    }

    let vals = [
        (gain * sample.VV) / 0.28,
        (gain * sample.VH) / 0.06,
        (gain * sample.VH) / sample.VV / 0.49,
    ];

    return viz.processList(vals);
}
