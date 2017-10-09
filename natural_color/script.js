function sum(a, b) {
    return a + b;
}

function zip(a, b, f) {
  return a.map(function(ai,i){return f(ai, b[i]);});
}

function mapConst(arr, c, f) {
  return arr.map(function(ai,i){return f(ai, c, i);});
}

function dotSS(a, b) {
  return a * b;
}

//vector * scalar
function dotVS(v, s) {
  return mapConst(v, s, dotSS);
}

//vector . vector
function dotVV(a, b) {
  return zip(a, b, dotSS).reduce(sum);
}

//matrix . vector
function dotMV(A, v) {
  return mapConst(A, v, dotVV);
}

function adj(C) {
  return C < 0.0031308 ? (12.92 * C) : (1.055 * Math.pow(C, 0.41666) - 0.055);
}

function labF(t) {
    return t > 0.00885645 ? Math.pow(t,1.0/3.0) : (0.137931 + 7.787 * t);
}

function invLabF(t) {
    return t > 0.2069 ? (t*t*t) : (0.12842 * (t - 0.137931));
}

function XYZ_to_Lab(XYZ) {
  var lfY = labF(XYZ[1]);
  return [(116.0 * lfY - 16)/100,
          5 * (labF(XYZ[0]) - lfY),
          2 * (lfY - labF(XYZ[2]))];
}

function Lab_to_XYZ(Lab) {
  var YL = (100*Lab[0] + 16)/116;
  return [invLabF(YL + Lab[1]/5.0),
          invLabF(YL),
          invLabF(YL - Lab[2]/2.0)];
}

function XYZ_to_sRGBlin(xyz) {
    return dotMV([[3.240, -1.537, -0.499], [-0.969, 1.876, 0.042], [0.056, -0.204, 1.057]], xyz);
}

function XYZ_to_sRGB(xyz) {
    return XYZ_to_sRGBlin(xyz).map(adj);
}

function Lab_to_sRGB(Lab) {
  return XYZ_to_sRGB(Lab_to_XYZ(Lab));
}

function getSolarIrr() {
  return [B02, 0.939*B03, 0.779*B04];
}

function S2_to_XYZ(rad, T, gain) {
  return dotVS(dotMV(T, rad), gain);
}

function ProperGamma_S2_to_sRGB(rad, T, gg, gamma, gL) {
  var XYZ = S2_to_XYZ(rad, T, gg);
  var Lab = XYZ_to_Lab(XYZ);
  var L = Math.pow(gL * Lab[0], gamma);
  return Lab_to_sRGB([L, Lab[1], Lab[2]]);
}

var T = [
  [0.268,0.361,0.371],
  [0.240,0.587,0.174],
  [1.463,-0.427,-0.043]
];

// Gamma and gain parameters
var gain = 2.5;
var gammaAdj = 2.2;
var gainL = 1;

return ProperGamma_S2_to_sRGB(getSolarIrr(), T, gain, gammaAdj, gainL);
