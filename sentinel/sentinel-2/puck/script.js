//VERSION=3

/*
Perceptually-Uniform Colormap Kit
author: Keenan Ganz (ganzk@rpi.edu)
September 2020
*/

/*
Reference white values for D65 illuminant,
secondary observer.
*/
var REF_X = 95.0489
var REF_Y = 100.0
var REF_Z = 108.8840

function percent_between(min, max, x){
  return (x - min) / (max - min)
}

function clip(min, max, x) {
  return Math.min(max, Math.max(min, x))
}

function rgb2lab(rgb) {
  /*
  Convert rgb coordinates to CIELAB coordinates via XYZ. 
  Expects normalized RGB values.

  Arithmetic from easyrgb.com
  */
  let [r, g, b] = rgb

  function to_linear(val) {
    if (val > 0.04045)
      return Math.pow((val + 0.055) / 1.055, 2.4)
    else
      return val / 12.92
  }

  let r_lin = to_linear(r) * 100
  let g_lin = to_linear(g) * 100
  let b_lin = to_linear(b) * 100

  let x = r_lin * 0.4124 + g_lin * 0.3576 + b_lin * 0.1805
  let y = r_lin * 0.2126 + g_lin * 0.7152 + b_lin * 0.0722
  let z = r_lin * 0.0193 + g_lin * 0.1192 + b_lin * 0.9505

  let x_std = x / REF_X
  let y_std = y / REF_Y
  let z_std = z / REF_Z

  function std_prep(val) {
    if (val > 0.008856)
      return Math.pow(val, 1.0 / 3.0)
    else
      return val * 7.787 + (16.0 / 116.0)
  }
  let L = 116.0 * (std_prep(y_std) - 16.0 / 116.0)
  let a = 500.0 * (std_prep(x_std) - std_prep(y_std))
  b = 200.0 * (std_prep(y_std) - std_prep(z_std))

  return [L, a, b]
}

function lab2rgb(Lab) {
  /*
  Convert CIELAB coordinates to RGB coordinates.

  Arithmetic from easyrgb.com
  */
  let [L, a, b] = Lab
  let var_y = (L + 16.0) / 116.0
  let var_x = (a / 500.0) + var_y
  let var_z = var_y - (b / 200.0)

  function undo_std_prep(val) {
    if (Math.pow(val, 3.0) > 0.008856)
      return Math.pow(val, 3.0)
    else
      return (val - (16.0 / 116.0)) / 7.787
  }
  var_y = undo_std_prep(var_y)
  var_x = undo_std_prep(var_x)
  var_z = undo_std_prep(var_z)

  let x = var_x * REF_X / 100
  let y = var_y * REF_Y / 100
  let z = var_z * REF_Z / 100

  let var_r = x * 3.2406 + y * -1.5372 + z * -0.4986
  let var_g = x * -0.9689 + y * 1.8758 + z * 0.0415
  let var_b = x * 0.0557 + y * -0.2040 + z * 1.0570

  function undo_linear(val) {
    if (val > 0.0031308)
      return 1.055 * Math.pow(val, (1.0 / 2.4)) - 0.055
    else
      return val * 12.92
  }

  let r = Math.max(undo_linear(var_r), 0)
  let g = Math.max(undo_linear(var_g), 0)
  b = Math.max(undo_linear(var_b), 0)

  // mapping isn't perfect, constrain to [0, 1]
  return [clip(0, 1, r), clip(0, 1, g), clip(0, 1, b)]
}

class Colormap {
  /*
  Base class for making perceptually uniform color maps. Using this class on its own
  simply maps RGB coordinates to LAB space and linearly interpolates inbetween values.

  Use SequentialColorMap, DivergentColorMap, etc. for more specific use cases.
  */
  constructor(color_anchors, data_anchors, remap=true, uniform=false) {
    if (color_anchors.length < 1)
      throw "ColorMap requires at least one color."
    if (color_anchors.length != data_anchors.length)
      throw "Color and data anchors must be of same length."
    // verify that the data array is sorted low to high
    for (let i = 1; i < data_anchors.length; i++) {
      if (data_anchors[i] < data_anchors[i - 1])
        throw "Data anchors array must be sorted."
    }
    // map incoming rgb coordinates into LAB space
    this.data_anchors = data_anchors
    if (remap) this.color_anchors = color_anchors.map(rgb2lab)
    else this.color_anchors = color_anchors
    // do the lightness correction, if desired, and then check
    // if the correction moved colors outside of RGB space
    if (uniform) { this._lightness_correction() } 
  }

  _lightness_correction() {return}

  get_color(data_value) {
    // return edge values if data value is oob
    if (data_value <= this.data_anchors[0])
      return lab2rgb(this.color_anchors[0])
    else if (data_value >= this.data_anchors[this.data_anchors.length - 1])
      return lab2rgb(this.color_anchors[this.color_anchors.length-1])

    return lab2rgb(colorBlend(data_value, this.data_anchors, this.color_anchors))
  }
}

class LinearColormap extends Colormap {
  /*
  Simple linear ramp color map class. Set uniform to true
  in the constructor to enforce constant lightness.
  */
  constructor(color_anchors, data_anchors, uniform=true) {
    super(color_anchors, data_anchors, true, uniform)
  }

  _lightness_correction() {
    // get overall change in lightness
    let L0 = this.color_anchors[0][0]
    let Lp = this.color_anchors[this.color_anchors.length-1][0]
    let dL = Lp - L0

    // make the lightness values monotonically change
    for (let i = 1; i < this.color_anchors.length - 1; i++) {
      let percent_interval = percent_between(
        this.data_anchors[this.data_anchors.length - 1],
        this.data_anchors[0],
        this.data_anchors[i]
      )
      this.color_anchors[i][0] = L0 + (dL * percent_interval)
    }
  }
};

class DivergentColormap extends Colormap {
  /*
  Color map that reaches a max/min lightness at its center and changes
  monotonically toward the edges of the data with equal lightness
  at each edge. If you don't want the lightness correction, just use
  LinearColormap with uniform=false.
  */
  constructor(color_anchors, data_anchors) {
    if (color_anchors.length % 2 != 1)
      throw "DivergentColorMap must have an odd number of anchors."
    super(color_anchors, data_anchors, true, true)
  }

  _lightness_correction() {
    // L0 is the mean lightness of the edge colors
    // Lp is the lightness of the center color
    let len = this.color_anchors.length
    let L0 = (this.color_anchors[0][0] + this.color_anchors[len - 1][0]) / 2
    // set the edge colors lightness to the mean
    this.color_anchors[len - 1][0] = this.color_anchors[0][0] = L0

    // Calculate intermediate lightness values
    let Lp = this.color_anchors[Math.floor(len / 2)][0]
    let dL = Lp - L0

    for (let i = 1; i < Math.floor(len / 2); i++) {
      let left_percent_interval = percent_between(
        this.data_anchors[Math.floor(len / 2)],
        this.data_anchors[0],
        this.data_anchors[i]
      )
      // Invert right % since lightness trends the other way now
      let right_percent_interval = 1 - percent_between(
        this.data_anchors[len - 1],
        this.data_anchors[Math.floor(len / 2)],
        this.data_anchors[len - 1 - i]
      )
      this.color_anchors[i][0] = L0 + (dL * left_percent_interval)
      this.color_anchors[len - 1 - i][0] = L0 + (dL * right_percent_interval)
    }
  }
}

class IsoluminantColormap extends Colormap {
  /*
  Color map that enforces constant lightness. Not particularly pretty on its own,
  but can be overlaid on relief shading to visualize data on top of topography.
  */
  constructor(color_anchors, data_anchors) {
    super(color_anchors, data_anchors, true, true)
  }
  _lightness_correction() {
    // get the mean lightness of all colors
    let L_sum = 0
    for (let i = 0; i < this.color_anchors.length; i++) {
      L_sum += this.color_anchors[i][0]
    }
    let L_avg = L_sum / this.color_anchors.length

    // set all anchors to have lightness of this value
    for (let i = 0; i < this.color_anchors.length; i++) {
      this.color_anchors[i][0] = L_avg
    }
  }
}

/*
Example usage: Masked NDVI on a white-green
color map.
*/

var map = [
  [217/255, 229/255, 206/255],
  [12/255, 22/255, 3/255],
]

var data = [-0.1, 1] 

var cmap = new LinearColormap(map, data);

function setup() {
  return {
    input: ["B02", "B03", "B04", "B08", "dataMask"],
    output: {
      bands: 3
    }
  };
}

function trueColor(sample){
  return [sample.B04 * 2.5, sample.B03 * 2.5, sample.B02 * 2.5]
}

function evaluatePixel(sample) {
  let ndvi = (sample.B08 - sample.B04) / (sample.B04 + sample.B08)
  if (ndvi > -.1) {return cmap.get_color(ndvi)}
  else {return trueColor(sample)}
}