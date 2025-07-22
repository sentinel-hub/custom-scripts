//VERSION=3

// Penguin Locator custom script by Rafał Wereszszynski (@kosmi.bluesky.social), adapted to PlanetScope by András Zlinszky and GitHub Copilot.
// This version uses PlanetScope band names and rescales 16-bit integer values (0-10000) to 0-1 for processing.

function setup() {
  return {
    input: ["blue", "green", "red", "nir"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  // Rescale PlanetScope values from 0-10000 to 0-1
  var blue = sample.blue / 10000;
  var green = sample.green / 10000;
  var red = sample.red / 10000;
  var nir = sample.nir / 10000;

  var r = Math.sqrt(0.6 * nir) - 0.1;
  var g = Math.sqrt(0.6 * red) - 0.1;
  var b = Math.sqrt(0.6 * green) - 0.1;

  var r2 = Math.sqrt(0.6 * nir) - 0.1;
  var g2 = Math.sqrt(0.6 * green) - 0.1;
  var b2 = Math.sqrt(0.6 * blue) - 0.1;

  var dark = 7;

  var dif1 = (1 - ((r + r2) / 2)) / dark;
  var dif2 = (1 - ((g + g2) / 2)) / dark;
  var dif3 = (1 - ((b + b2) / 2)) / dark;

  var r3 = ((r + r2) / 2) - dif1;
  var g3 = ((g + g2) / 2) - dif2;
  var b3 = ((b + b2) / 2) - dif3;

  return [r3, g3, b3];
}