//VERSION=3
//False Color

function setup() {
  return {
    input: ["NIR", "Green", "Blue"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [sample.NIR / 3000, sample.Green / 3000, sample.Blue / 3000];
}