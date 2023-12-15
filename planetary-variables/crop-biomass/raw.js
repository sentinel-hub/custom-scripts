//VERSION=3
function setup() {
  return {
    input: ["CB"],
    output: { bands: 1, sampleType: 'FLOAT32' }
  };
}

let factor = 1 / 1000;
function evaluatePixel(sample) {
  return [sample.CH * factor]
};

