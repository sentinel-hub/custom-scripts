//VERSION=3
//This script was converted from v1 to v3 using the converter API

const blue_red = [
  [223, 0x003d99],
  [253, 0x2e82ff],  
  [263, 0x80b3ff],
  [272, 0xe0edff],
  [273, 0xffffff],
  [274, 0xfefce7],
  [283, 0xFDE191],
  [293, 0xf69855],
  [303, 0xec6927],
  [323, 0xaa2d1d],
  [363, 0x650401],
  [373, 0x3d0200],
];

const viz = new ColorRampVisualizer(blue_red);

function evaluatePixel(samples) {
  let val = samples.B06;
  return viz.process(val);
}

function setup() {
  return {
    input: [{
      bands: [
        "B06"
      ]
    }],
    output: {
      bands: 3
    }
  }
}
