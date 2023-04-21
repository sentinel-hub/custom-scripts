//VERSION=3
//True Color

function setup() {
  return {
    input: ["B0", "B1", "B2"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [sample.B2/3000, sample.B1/3000, sample.B0/3000];
}
