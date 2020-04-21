//VERSION=3 (auto-converted from 1)

// Normalised Difference Snow Index
// Source: https://earth.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm
// values above 0.42 are usually snow

let viz = new Identity();

function evaluatePixel(samples) {
    let val = index(samples.B03, samples.B11);
    return viz.process(val);
}

function setup() {
  return {
    input: [{
      bands: [
          "B03",
          "B11"
      ]
    }],
    output: { bands: 1 }
  }
}
