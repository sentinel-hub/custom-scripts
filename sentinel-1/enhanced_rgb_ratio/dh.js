//VERSION=3
// Enhanced RGB ratio visualization for dual-pol HH+HV Sentinel-1 data:
// IW and EW HH+HV acquisitions, and the DH monthly mosaics.
// R = HH, G = HV, B = HV/HH ratio. A Reinhard tone-mapping curve lifts the
// mid-range and compresses the highlights, so bright targets keep their
// internal structure instead of clipping to white.
// Identical to script.js apart from the polarisation pair: HH replaces VV and
// HV replaces VH throughout.
// by András Zlinszky, Copernicus Data Space Ecosystem, @azlinszky.bsky.social
// License: CC BY-SA 4.0

// ---- USER-TUNABLE PARAMETERS -------------------------------------------
// Per-channel gain: higher = brighter that channel. Sets both the colour
// balance and where each channel lands on the tone curve.
var hhGain = 2.9; // HH     -> Red
var hvGain = 16.0; // HV     -> Green  (raise for greener vegetation)
var ratGain = 1.6; // HV/HH  -> Blue

// Tone curve:
var white = 3.0; // white point: higher -> more highlight headroom
// (keeps bright cities from blowing out to white)
var gamma = 0.8; // <1 lifts the mid-range; 1 = no change

var saturation = 1.2; // >1 boosts colour separation

function setup() {
  return {
    input: ["HH", "HV", "dataMask"],
    output: { bands: 4 },
  };
}

// Reinhard tone map, scaled so that `white` maps to exactly 1.0
function reinhard(x) {
  return (x / (1 + x)) * (1 + 1 / white);
}

// push each channel away from its luma by `sat`, clamped at 0
function saturate(rgb, sat) {
  var L = rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  return [
    Math.max(L + (rgb[0] - L) * sat, 0),
    Math.max(L + (rgb[1] - L) * sat, 0),
    Math.max(L + (rgb[2] - L) * sat, 0),
  ];
}

function clamp01(x) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

function evaluatePixel(s) {
  // No data -> transparent. Non-positive or NaN backscatter -> black, as in the
  // standard Sentinel-1 RGB-ratio composite; !(x > 0) also catches NaN, so
  // monthly-mosaic gaps do not leak coloured noise.
  if (s.dataMask === 0 || !(s.HH > 0) || !(s.HV > 0)) {
    return [0, 0, 0, s.dataMask];
  }

  var col = [s.HH * hhGain, s.HV * hvGain, (s.HV / s.HH) * ratGain];

  col = saturate(col, saturation);

  for (var i = 0; i < 3; i++) {
    col[i] = clamp01(Math.pow(reinhard(col[i]), gamma));
  }

  return [col[0], col[1], col[2], s.dataMask];
}
