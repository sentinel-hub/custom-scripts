//VERSION=3
function setup() {
  return {
    input: ["B04", "B03", "B02", "dataMask"],
    output: { bands: 4 }
  };
}

// Contrast enhance / highlight compress

const maxR = 3.0; // max reflectance
const midR = 0.13;
const sat = 1.3;
const gamma = 2.3;

// remove the minimum Rayleigh scattering (check the Himalayas)
const ray = { r: 0.013, g: 0.024, b: 0.041 };

function evaluatePixel(smp) {
  const rgbLin = satEnh(sAdj(smp.B04 - ray.r), sAdj(smp.B03 - ray.g), sAdj(smp.B02 - ray.b));
  return [sRGB(rgbLin[0]), sRGB(rgbLin[1]), sRGB(rgbLin[2]), smp.dataMask];
}

const sAdj = (a) => adjGamma(adj(a, midR, 1, maxR));

const gOff = 0.01;
const gOffPow = Math.pow(gOff, gamma);
const gOffRange = Math.pow(1 + gOff, gamma) - gOffPow;

const adjGamma = (b) => (Math.pow((b + gOff), gamma) - gOffPow) / gOffRange;

// Saturation enhancement
function satEnh(r, g, b) {
  const avgS = (r + g + b) / 3.0 * (1 - sat);
  return [clip(avgS + r * sat), clip(avgS + g * sat), clip(avgS + b * sat)];
}

const clip = (s) => s < 0 ? 0 : s > 1 ? 1 : s;

//contrast enhancement with highlight compression
function adj(a, tx, ty, maxC) {
  var ar = clip(a / maxC, 0, 1);
  return ar * (ar * (tx / maxC + ty - 1) - ty) / (ar * (2 * tx / maxC - 1) - tx / maxC);
}

const sRGB = (c) => c <= 0.0031308 ? (12.92 * c) : (1.055 * Math.pow(c, 0.41666666666) - 0.055);
