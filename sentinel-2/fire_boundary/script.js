//VERSION=3 (auto-converted from 1)
      /*
Authors of the script: Adzanil Rachmadhi Putra, Fatwa Ramdani
*/

function setup() {
  return {
    input: [{
      bands: [
          "B11",
          "B12"
      ]
    }],
    output: { bands: 1 }
  }
}


let viz = new HighlightCompressVisualizerSingle(-1.0, 1.0);

function evaluatePixel(samples) {
  let val = 8.5 * (samples.B12 - samples.B11) / (samples.B12 + samples.B11 + 0.25); return viz.process(val);
}
