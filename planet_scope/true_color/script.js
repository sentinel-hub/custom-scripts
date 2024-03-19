//VERSION=3
//True Color

function setup() {
  return {
    input: ["blue", "green", "red"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [sample.red / 3000, sample.green / 3000, sample.blue / 3000];
}
