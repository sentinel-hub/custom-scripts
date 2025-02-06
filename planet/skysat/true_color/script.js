//VERSION=3
//True Color

function setup() {
  return {
    input: ["Blue", "Red", "Green", "dataMask"],
    output: { bands: 4 },
  };
}
var f = 2.5 / 10000;
function evaluatePixel(sample) {
  return [sample.Red * f, sample.Green * f, sample.Blue * f, sample.dataMask];
}
