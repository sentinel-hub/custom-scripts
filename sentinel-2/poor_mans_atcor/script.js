 
//== PARAMETERS ===========================
var c0r = 0.036;   // amount of atmosphere we're compensating
//var cManual = [0.039, 0.071, 0.121]; // manual white point
//var cManual = [[0.039, 0.96], [0.071, 0.84], [0.121, 1.34]]; // manual black & white point
var tx  = 0.2;    // ty/tx ~ contrast in dark areas
var ty  = 0.4;    // (1-ty)/(1-tx) ~ contrast in light areas
var max = 3.1;    // reflectance that will become white
var sat = 1.3;    // saturation enhancement

var debug = false; // Set to 'true' to highlight out-of-range values

var atmRatios = [1, 2, 3.25]; // Rayleigh-derived consts for automated atmosphere offsets

//== FUNCTIONS ============================
var sRGBenc = C => C < 0.0031308 ? (12.92 * C) : (1.055 * Math.pow(C, 0.41666) - 0.055);

// atmospheric adjustment
var atm2p = (a, c0, c1) => (a - c0) / c1;

var atm1p = (a, c0) => atm2p(a, c0, (1 - c0)**2);

var atm = (a, ii) => (typeof cManual !== 'undefined')
    ? (cManual[ii] instanceof Array)
        ? atm2p(a, cManual[ii][0], cManual[ii][1])
        : atm1p(a, cManual[ii])
  : atm1p(a, c0r * atmRatios[ii]);

//contrast enhancement
var adjFun = (a, tx, ty, max) => {
  var ar = a / max;
  var txr = tx / max;
  var bot = (2 * txr - 1) * ar - txr;
  return ar * (1 + (txr - ty) * (1 - ar) / bot);
};

var adj = a => adjFun(a, tx, ty, max);

var satEnh = rgbArr => {
  var avg = rgbArr.reduce((a, b) => a + b, 0) / rgbArr.length;
  return rgbArr.map(a => avg * (1 - sat) + a * sat);
};

var checkDebug = arr => {
  if (!debug) {
    return arr;
  }
  var maxC = Math.max.apply(null, arr);
  var minC = Math.min.apply(null, arr);
  
  return (minC < 0) // Highlight too dark pixels
     ? arr.map(a => a < 0 ? 1 : 0)
     : (maxC > 1) // Highlight too bright pixels
       ? (minC > 1)
         ? arr.map(a => (a - 1)/(maxC - 1))
         : arr.map(a => a > 1 ? 1 : 0)
       : arr;
};

//== SCRIPT ============================
var rgb = satEnh([B04,B03,B02].map(atm).map(adj));
		  
return checkDebug(rgb).map(sRGBenc);
 
