//VERSION 3
function setup() {
  return {
    input: ["B03", "B08"],
    output: { bands: 3 }
  }
}

const ramp = [
  [-0.8, 0x008000],
  [0, 0xFFFFFF],
  [0.8, 0x0000CC]
];

let viz = new ColorRampVisualizer(ramp);

function evaluatePixel(samples) {
  var val = index(samples.B03, samples.B08);
  return viz.process(val);
}
