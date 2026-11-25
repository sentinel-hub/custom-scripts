//VERSION=3
// Reinhard Tonemapped RGB Ratio visualization for Sentinel-1 (IW, dual-pol VV+VH).
// R = VV, G = VH, B = VH/VV ratio. A Reinhard tone-mapping curve lifts the
// mid-range and compresses the highlights, so dense cities keep their internal
// structure instead of clipping to white and vegetation reads clearly green.
// Adapted from the standard Sentinel-1 RGB-ratio composite; tone mapping after
// sentinel-2/tonemapped_natural_color.
// by András Zlinszky, Copernicus Data Space Ecosystem, @azlinszky.bsky.social and Google Gemini
// License: CC BY-SA 4.0

// ---- USER-TUNABLE PARAMETERS -------------------------------------------
// Per-channel gain: higher = brighter that channel. Sets both the colour
// balance and where each channel lands on the tone curve.
var vvGain = 2.9;  // VV     -> Red
var vhGain = 16.0; // VH     -> Green  (raise for greener vegetation)
var ratGain = 1.6; // VH/VV  -> Blue

// Tone curve:
var white = 3; // white point: higher -> more highlight headroom
// (keeps bright cities from blowing out to white)
var gamma = 1; // <1 lifts the mid-range; 1 = no change

var saturation = 1.1; // >1 boosts colour separation

function setup() {
  return {
    input: [{ bands: ["VV", "VH", "dataMask"] }],
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

function evaluatePixel(s) {
  if (s.dataMask === 0) {
    return [0, 0, 0, 0];
  }

  var col = [s.VV * vvGain, s.VH * vhGain, (s.VH / s.VV) * ratGain];

  col = saturate(col, saturation);

  // Sentinel Hub clamps the final output to [0, 1]
  for (var i = 0; i < 3; i++) {
    col[i] = Math.pow(reinhard(col[i]), gamma);
  }

  return [col[0], col[1], col[2], s.dataMask];
}
