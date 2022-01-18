//VERSION=3
function setup() {
  return {
    input: ["B12","B8A","B04", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
  return [2.5 * sample.B12,2.5 * sample.B8A,2.5 * sample.B04, sample.dataMask ];
}