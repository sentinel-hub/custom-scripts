// Normalised Difference Snow Index
// Source: https://earth.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm
// values above 0.42 are usually snow

let viz = new Identity();

function evaluatePixel(samples) {
    let val = index(samples[0].B03, samples[0].B11);
    return viz.process(val);
}

function setup(ds) {
    setInputComponents([ds.B03, ds.B11]);
    setOutputComponentCount(1);
}


