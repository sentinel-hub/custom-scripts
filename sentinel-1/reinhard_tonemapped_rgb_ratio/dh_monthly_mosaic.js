//VERSION=3
// Reinhard Tonemapped RGB Ratio visualization for the Sentinel-1 DH monthly
// mosaic (dual-pol HH+HV).
// R = HH, G = HV, B = HV/HH ratio. A Reinhard tone-mapping curve lifts the
// mid-range and compresses the highlights, so dense cities keep their internal
// structure instead of clipping to white and vegetation reads clearly green.
// Adapted from the standard Sentinel-1 RGB-ratio composite; tone mapping after
// sentinel-2/tonemapped_natural_color.
// by András Zlinszky, Copernicus Data Space Ecosystem, @azlinszky.bsky.social and Google Gemini
// License: CC BY-SA 4.0

// ---- USER-TUNABLE PARAMETERS -------------------------------------------
// Per-channel gain: higher = brighter that channel. Sets both the colour
// balance and where each channel lands on the tone curve.
var vvGain = 2.9; // HH     -> Red
var vhGain = 16.0; // HV     -> Green  (raise for greener vegetation)
var ratGain = 1.6; // HV/HH  -> Blue

// Tone curve:
var white = 3.0; // white point: higher -> more highlight headroom
// (keeps bright cities from blowing out to white)
var gamma = 0.8; // <1 lifts the mid-range; 1 = no change

var saturation = 1.2; // >1 boosts colour separation

function setup() {
  return {
    input: [{ bands: ["HH", "HV", "dataMask"] }],
    output: { bands: 4 },
  };
}

// extended Reinhard tone map: compresses highlights, maps `white` to 1.0
function reinhard(x) {
  return (x / (1 + x)) * (1 + 1 / white);
}

// push each channel away from its luma by `saturation`, clamped at 0
function saturate(rgb, s) {
  var L = rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  return [
    Math.max(L + (rgb[0] - L) * s, 0),
    Math.max(L + (rgb[1] - L) * s, 0),
    Math.max(L + (rgb[2] - L) * s, 0),
  ];
}

function clamp01(x) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

function evaluatePixel(s) {
  // no-data, non-positive, or NaN -> transparent. !(x > 0) also catches NaN,
  // so Sentinel-1 monthly-mosaic gaps stay clean.
  if (s.dataMask === 0 || !(s.HH > 0) || !(s.HV > 0)) {
    return [0, 0, 0, s.dataMask];
  }

  var col = [s.HH * vvGain, s.HV * vhGain, (s.HV / s.HH) * ratGain];

  col = saturate(col, saturation);

  for (var i = 0; i < 3; i++) {
    col[i] = clamp01(Math.pow(reinhard(col[i]), gamma));
  }

  return [col[0], col[1], col[2], s.dataMask];
}
