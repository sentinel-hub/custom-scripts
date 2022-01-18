//VERSION=3

function evaluatePixel(samples) {
    return val = [2.5*samples.B04, 
                  2.5*samples.B02, 
                  2.5*samples.B01, 
                  samples.dataMask];
}

function setup() {
  return {
    input: [{
      bands: [
        "B01",
        "B02",
        "B04",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}

