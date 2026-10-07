//VERSION=3
// Barren soil (Bare Soil Index) - Evalscript V3 multi-output update of the original
// single-output script by Monja Sebela. This "Updated version" created by András Zlinszky (Sinergise) and AI:
//   * adds `index` and `eobrowserStats` outputs (the BSI scaled to 0..1) so EO Browser
//     shows the value at a pixel and builds Statistical Info / temporal charts;
//   * masks clouds, water (and other non-soil classes) via the Scene Classification
//     Layer, using the same palette approach as the kNDVI script
//     (https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/kndvi/);
//   * keeps the original colour scheme for land pixels.
//
// BSI = ((B11 + B04) - (B08 + B02)) / ((B11 + B04) + (B08 + B02))

function setup() {
  return {
    input: ["B02", "B04", "B08", "B11", "SCL", "dataMask"],
    output: [
      { id: "default", bands: 3 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ],
  };
}

// SCL classes to mask out (recoloured, and excluded from the index): no-data, defective,
// shadows, water, clouds, cirrus and snow. Same palette as the kNDVI script.
const cloud_palette = {
  0: [0, 0, 0], // No Data - black
  1: [1, 0, 0.016], // Saturated / defective - red
  2: [0.525, 0.525, 0.525], // Dark area / topographic shadows - dark grey
  3: [0.467, 0.298, 0.043], // Cloud shadows - dark brown
  6: [0, 0, 1], // Water - blue
  7: [0.506, 0.506, 0.506], // Unclassified - grey
  8: [0.753, 0.753, 0.753], // Cloud medium probability - grey
  9: [0.949, 0.949, 0.949], // Cloud high probability - white
  10: [0.733, 0.773, 0.925], // Thin cirrus - pale blue
  11: [0.325, 1, 0.98], // Snow / ice - bright cyan
};

function evaluatePixel(s) {
  let bsi = (s.B11 + s.B04 - (s.B08 + s.B02)) / (s.B11 + s.B04 + s.B08 + s.B02);
  let val = 2.5 * bsi; // unscaled value that drives the original colour scheme
  let masked = Object.keys(cloud_palette).includes(s.SCL.toString());

  // Default visualization: original colours on land, palette colours on masked classes.
  let color = masked ? cloud_palette[s.SCL] : [2.5 * val, s.B08, s.B11];

  // Index scaled to [0, 1]: 1 = definitely bare soil, 0 = not bare soil at all.
  // NaN on masked pixels so they are excluded from the index readout and statistics.
  let index = masked ? NaN : Math.max(0, Math.min(1, val));

  return {
    default: color,
    index: [index],
    eobrowserStats: [index],
    dataMask: [s.dataMask],
  };
}
