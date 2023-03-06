//VERSION=3
//True Color

function setup() {
  return {
    input: ["Blue", "Green", "Red"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [sample.Red / 3000, sample.Green / 3000, sample.Blue / 3000];
}
