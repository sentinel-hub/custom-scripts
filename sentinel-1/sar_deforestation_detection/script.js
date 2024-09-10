//VERSION=3 (auto-converted from 1)
//
// SAR for deforestation detection
// ------------
// 2019 - Antonio Carlon Paredes
// License: CC BY 4.0
// https://creativecommons.org/licenses/by/4.0/
//
function setup() {
  return {
    input: [
      {
        bands: ["VV", "VH"],
      },
    ],
    output: { bands: 3 },
  };
}

const GAIN = 2.5;
const WATER_LIMIT = 0.1;
const FOREST_LIMIT = 0.2;
const INVERSE_FACTOR = 25;

const GREEN_GRADIENT = [
  [1.0, 0x80f300],
  [0.5, 0x406600],
  [0.0, 0x003300],
];

const RED_GRADIENT = [
  [1.0, 0xffffff],
  [0.525, 0xff8600],
  [0.3, 0xff6e00],
  [0.25, 0xae0000],
  [0.0, 0x000000],
];

const GREEN_VIZ = new ColorRampVisualizer(GREEN_GRADIENT, 0, 1);
const RED_VIZ = new ColorRampVisualizer(RED_GRADIENT, 0, 1);

const evaluatePixel = function (samples, scenes) {
  let vv = samples.VV;
  let vh = samples.VH;

  let area = vv * vh;
  let v_len = Math.sqrt(vv * vv + vh * vh);
  let v_angle_weighted = 0;
  if (vv > 0) {
    v_angle_weighted = Math.atan(vh / vv) / (Math.PI / 2);
  }
  let v_len_inverse = 0;
  if (v_len > 0) {
    v_len_inverse = 1 / (INVERSE_FACTOR * v_len);
  }

  if (v_len < WATER_LIMIT) {
    return [0];
  } else if (v_len > FOREST_LIMIT) {
    let index = GAIN * v_len - v_angle_weighted;
    return GREEN_VIZ.process(index);
  } else {
    let index = GAIN * v_len_inverse + v_angle_weighted;
    return RED_VIZ.process(index);
  }
};
