//VERSION=3
var t2=Date.parse('2020-09-11'); //end date
var t1=Date.parse('2018-01-01'); //start data
var polar=['VV', 'VH'];
var one_day = 1000 * 60 * 60 * 24 ;
var reducing_coeff = 0.8;

function hsv2rgb(h,s,v)
{
  h = 360*h;
  let f = (n,k=(n+h/60)%6) => v - v*s*Math.max( Math.min(k,4-k,1), 0);
  return [f(5),f(3),f(1)];
}
function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
      s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
  }
  return [r,
          g,
          b];
}
function get_date_difference_in_days(t1, t2)
{
  return Math.floor(Math.abs(Math.round(
      t1 - t2
    ) / one_day));
}
var delta_date = get_date_difference_in_days(t2, t1)// Selection of polarization
function setup() {
    return {
      input: [{
        bands: polar
      }],
      output: { bands: 3 },
      mosaicking: "ORBIT"
    }
  }// Selection of dates
function filterScenes (scenes) {
    return scenes.filter(
      function (scene) {
        return scene.date.getTime()>=t1 && scene.date.getTime()<= t2;
     })
   }// RGB visualization

function mean(arr) {
  /*
  * Defines the mean computation for the input array arr
  */
  return arr.reduce((a,b) => a + b) / arr.length;
}

function std(arr, m = mean(arr)) {
  /*
  * Defines the standard deviation computation for the input array arr and optional input mean
  */
  return Math.sqrt(arr.map(x => Math.pow(x - m, 2)).reduce((a, b) => a + b) / arr.length);
}

function clamp(n, min, max) {
  /*
  * Defines the clamping function: given a number n, returns min if n < min or max if n > max
  */
  return n > max ? max : n < min ? min : n;
}

function evaluatePixel(samples, scenes) {
  // Compute coefficient of variation
  var Kmax = 0
  var Imax = 0  

  ////////////////////////////////
  // Computing saturation value //
  ////////////////////////////////
  var signal_vv = samples.map((a) => Math.sqrt(a.VV));
  var mean_signal_vv = mean(signal_vv);
  var std_signal_vv = std(signal_vv, mean_signal_vv);
  var variation_coeff_vv = std_signal_vv / mean_signal_vv;

  var signal_vh = samples.map((a) => Math.sqrt(a.VH));
  var mean_signal_vh = mean(signal_vh);
  var std_signal_vh = std(signal_vh, mean_signal_vh);
  var variation_coeff_vh = std_signal_vh / mean_signal_vh;

  // Comparison of variation coeff of both polars with SAR constants deduced with the look number L
  var L = 4.9;
  var mu = 0.2286;
  var alpha = 0.1616

  var R_vv = (variation_coeff_vv - mu)/(alpha*10.0) + 0.25;
  R_vv = clamp(R_vv, 0, 1)

  var R_vh = (variation_coeff_vh - mu)/(alpha*10.0) + 0.25;
  R_vh = clamp(R_vh, 0, 1)
  
  // Retained variation coeff is the maximum between the two polar-wise variation coeff
  var R = Math.max(R_vv, R_vh);
  
  ///////////////////////////
  // Computing Hue & Value //
  ///////////////////////////

  // Retrieves max from each polar then the max of the two values
  var imax_vv = Math.max(...signal_vv);
  var imax_vh = Math.max(...signal_vh);
  var imax = Math.max(imax_vv, imax_vh);
  var imax_idx = signal_vv.indexOf(imax);
  if (imax_idx == -1) {
  	imax_idx = signal_vh.indexOf(imax);
  }
  var indexk = get_date_difference_in_days(
    scenes[imax_idx].date.getTime(),
    t1
  )
  var Kmax = indexk / delta_date;
  var imax = clamp(0.8*imax, 0, 1);
  
  ///////////////////////////////////
  // Creating HSV & RGB convertion //
  ///////////////////////////////////

  // Regulating potential saturation by averaging max signal value with average value of max value at each signal timestep
  var intensities = samples.map((a) => Math.max(a.VV, a.VH));
  var mean_intensity = intensities.reduce((a, b) => a + b) / samples.length;
  var value = (imax + 0.8*mean_intensity)/2;
  hsv = {h:0.9*Kmax, s:R, v:value}; // Setting the max possible hue value to 0.9
  //rgb = [mean_amplitude, mean_amplitude, mean_amplitude]
  rgb = HSVtoRGB(hsv);
  return rgb;
 } /*
 scenes = [{
   date:...,
   idx:...,
   bandBuffers:...
 }] samples =  [{
   VV:...,
   VH:...
 }] pixel value
 */