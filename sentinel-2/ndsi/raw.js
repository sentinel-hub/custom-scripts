//VERSION=3 (auto-converted from 1)

// Normalised Difference Snow Index
// Source: https://earth.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm
// values above 0.42 are usually snow

function setup() {
  return {
    input: ["B03", "B11"],
    output: { bands: 1, sampleType: "FLOAT32" }
  }
}

function evaluatePixel(samples) {
  return [index(samples.B03, samples.B11)]
}
