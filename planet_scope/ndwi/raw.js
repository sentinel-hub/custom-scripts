//VERSION=3
//NDWI

function setup() {
  return {
    input: [{ bands: ["green", "nir"] }],
    output: [
      { id: "default", bands: 1, sampleType: "FLOAT32" },
    ]
  }
}

function evaluatePixel(samples) {
  let ndwi = index(samples.green, samples.nir);
  return { default: [isFinite(ndwi) ? ndwi : NaN] };
}