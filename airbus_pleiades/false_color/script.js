//VERSION=3
//False Color

function setup() {
  return {
    input: ["B2", "B3", "B4"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  return [sample.B4/3000, sample.B3/3000, sample.B2/3000];
}

