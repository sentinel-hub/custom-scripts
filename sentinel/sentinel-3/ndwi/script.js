//VERSION=3

// Normalized Difference Water Index, NDWI
// Index values greater than 0.5 usually correspond to water bodies. 
// Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

var colorRamp1 = [
  [0, 0xFFFFFF],
  [1, 0x008000]
];
var colorRamp2 = [
  [0, 0xFFFFFF],
  [1, 0x0000CC]
];

let viz1 = new ColorRampVisualizer(colorRamp1);
let viz2 = new ColorRampVisualizer(colorRamp2);

function evaluatePixel(samples) {
var val = index(samples.B06, samples.B17);

if (val < -0) {
  return viz1.process(-val);
} else {
  return viz2.process(Math.sqrt(Math.sqrt(val)));
}
}

function setup() {
return {
  input: [{
    bands: [
      "B06",
      "B17"
    ]
  }],
  output: {
    bands: 3
  }
}
}
