//VERSION=3
function setup() {
  return {
    input: ["B07","B06","B01", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
  return [2.5 * sample.B07,2.5 * sample.B06,2.5 * sample.B01, sample.dataMask ];
}