//VERSION=3
//False Color

function setup() {
  return {
    input: ["B1", "B2", "B3"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [sample.B3/3000, sample.B2/3000, sample.B1/3000];
}

