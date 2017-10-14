//== PARAMETERS ===========================

var c0r = 0.035;   // amount of atmosphere we're compensating

var tx = 0.15;     // ty/tx ~ contrast in dark areas
var ty = 0.4;      // (1-ty)/(1-tx) ~ contrast in light areas

var max = 3.0;     // reflectance that will become white

var sat = 1.5;     // saturation enhancement

var debug = false; // set to 'true' to highlight out-of-range values

//== FUNCTIONS ============================

function sRGBenc(C) {
  return C < 0.0031308 ? (12.92 * C)
                       : (1.055 * Math.pow(C, 0.41666) - 0.055);
}

function atm(a, c0) { // atmospheric adjustment
  return (a - c0) / (1 - c0) / (1 - c0);
}

function slantedStep(a, tx, ty, max) {
  var ar = a / max;
  var txr = tx / max;
  var bot = (2 * txr - 1) * ar - txr;
  return ar * (1 + (txr - ty) * (1 - ar) / bot);
}

function adj(a) {
  return slantedStep(a, tx, ty, max);
}

function satEnh(arr) {
  var avgVal = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.map(cc => avgVal + (cc - avgVal) * sat);
}

function checkDebug(arr) {
  if (!debug) {
    return arr;
  }
  // Highlight too dark pixels
  if (Math.min.apply(Math, arr) < 0) {
     return arr.map(a => a < 0 ? 1 : 0);
  }

  // Highlight too bright pixels
  if (debug && Math.max.apply(Math, arr) > 1) {
     if (Math.min.apply(Math, arr) > 1) {
       return [0,0,0];
     }
     return arr.map(a => a > 1 ? 1 : 0);
  }
  return arr;
}

//== SCRIPT ============================

var rgb = [adj(atm(B04, c0r)), 
           adj(atm(B03, c0r * 2)), //Rayleigh-derived constants 
           adj(atm(B02, c0r * 3.4))];

return checkDebug(satEnh(rgb)).map(sRGBenc);
