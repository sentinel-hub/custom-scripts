//VERSION=3

//Penguin Locator custom script by Rafał Wereszszynski (@kosmi.bluesky.social), adapted to Version 3 by András Zlinszky and Github Copilot.
//This script generages an RGB composite from the small differences between the red, green and blue bands of Sentinel-2 and assigning the adjusted values of the NIR band to the red channel.
//By reducing oversaturation and highlighting small differences, patterns in snow and ice dominated landscapes stand out, including marks of penguin colonies.

function setup() {
  return {
    input: ["B02", "B03", "B04", "B08"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  var r = Math.sqrt(0.6 * sample.B08) - 0.1;
  var g = Math.sqrt(0.6 * sample.B04) - 0.1;
  var b = Math.sqrt(0.6 * sample.B03) - 0.1;

  var r2 = Math.sqrt(0.6 * sample.B08) - 0.1;
  var g2 = Math.sqrt(0.6 * sample.B03) - 0.1;
  var b2 = Math.sqrt(0.6 * sample.B02) - 0.1;

  var dark = 7;

  var dif1 = (1 - ((r + r2) / 2)) / dark;
  var dif2 = (1 - ((g + g2) / 2)) / dark;
  var dif3 = (1 - ((b + b2) / 2)) / dark;

  var r3 = ((r + r2) / 2) - dif1;
  var g3 = ((g + g2) / 2) - dif2;
  var b3 = ((b + b2) / 2) - dif3;

  return [r3, g3, b3];
}