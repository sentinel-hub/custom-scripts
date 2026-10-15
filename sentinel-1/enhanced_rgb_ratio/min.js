//VERSION=3
// Enhanced RGB ratio (compact/shareable). Same output as script.js. CC BY-SA 4.0, by András Zlinszky.
// Knobs: g=[vvGain,vhGain,ratGain], W=white, G=gamma, S=saturation.
var g = [2.9, 16, 1.6],
  W = 3,
  G = 0.8,
  S = 1.2;
function setup() {
  return { input: ["VV", "VH", "dataMask"], output: { bands: 4 } };
}
function tm(x) {
  return (x / (1 + x)) * (1 + 1 / W);
}
function evaluatePixel(s) {
  if (s.dataMask == 0 || !(s.VV > 0) || !(s.VH > 0)) return [0, 0, 0, s.dataMask];
  var c = [s.VV * g[0], s.VH * g[1], (s.VH / s.VV) * g[2]];
  var L = c[0] * 0.2126 + c[1] * 0.7152 + c[2] * 0.0722;
  for (var i = 0; i < 3; i++) {
    var v = Math.max(L + (c[i] - L) * S, 0);
    c[i] = Math.min(1, Math.pow(tm(v), G));
  }
  return [c[0], c[1], c[2], s.dataMask];
}
