let minVal = -0.2;
let maxVal = 0.4;

let viz = new HighlightCompressVisualizerSingle(minVal, maxVal);

function evaluatePixel(samples) {
    let val = (samples[0].B06 > 0) ? (samples[0].B04 - samples[0].B02) / samples[0].B06 : JAVA_DOUBLE_MAX_VAL;
    return viz.process(val);
}

function setup(ds) {
    setInputComponents([ds.B02, ds.B04, ds.B06]);
    setOutputComponentCount(1);
}