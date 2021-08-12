//VERSION=3
const blue_red = [
  [273, 0xffffff],
  [274, 0xfefce7],
  [283, 0xFDE191],
  [293, 0xf69855],
  [303, 0xec6927],
  [323, 0xaa2d1d],
  [363, 0x650401],
  [473, 0x3d0200]
];

const viz = new ColorRampVisualizer(blue_red);

function evaluatePixel(samples) {
  let val = samples.F1;
  val = viz.process(val);
    val.push(samples.dataMask);
    return val;
}

function setup() {
  return {
    input: [{
      bands: [
        "F1",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}
