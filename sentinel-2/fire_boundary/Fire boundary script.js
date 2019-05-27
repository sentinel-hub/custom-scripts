/*
Authors of the script: Adzanil Rachmadhi Putra, Fatwa Ramdani
*/

function setup(dataSource) {
  setInputComponents([dataSource.B11, dataSource.B12]);
  setOutputComponentCount(1);
}

let viz = new HighlightCompressVisualizerSingle(-1.0, 1.0);

function evaluatePixel(samples) {
  let val = 8.5 * (samples[0].B12 - samples[0].B11) / (samples[0].B12 + samples[0].B11 + 0.25); return viz.process(val);
}
