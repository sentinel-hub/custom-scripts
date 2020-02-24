//
// SAR for deforestation detection
// ------------
// 2019 - Antonio Carlon Paredes
// License: CC BY 4.0
// https://creativecommons.org/licenses/by/4.0/
//
function setup(ds) {
  setInputComponents([ds.VV, ds.VH]);
  setOutputComponentCount(3);
}

const GAIN = 2.5;
const WATER_LIMIT = 0.1;
const FOREST_LIMIT = 0.2;
const INVERSE_FACTOR = 25;

const GREEN_GRADIENT = [
    [1.000, 0x80F300],
    [0.500, 0x406600],
    [0.000, 0x003300]
]

const RED_GRADIENT = [
    [1.000, 0xFFFFFF],
    [0.525, 0xFF8600],
    [0.300, 0xFF6E00],
    [0.250, 0xAE0000],
    [0.000, 0x000000]
];

const GREEN_VIZ = new ColorGradientVisualizer(GREEN_GRADIENT, 0, 1);
const RED_VIZ = new ColorGradientVisualizer(RED_GRADIENT, 0, 1);

const evaluatePixel = function (samples, scenes) {
	let vv = samples[0].VV;
	let vh = samples[0].VH;

    let area = vv * vh;
	let v_len = Math.sqrt(vv * vv + vh * vh);
  	let v_angle_weighted = 0;
	if (vv > 0) {
		v_angle_weighted = Math.atan(vh/vv) / (Math.PI / 2);
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
