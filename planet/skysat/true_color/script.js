//VERSION=3
//True Color

function setup() {
  return {
    input: ["blue", "red", "green", "dataMask"],
    output: { bands: 4 },
  };
}
var f = 2.5 / 10000;
function evaluatePixel(sample) {
  return [sample.red * f, sample.green * f, sample.blue * f, sample.dataMask];
}
