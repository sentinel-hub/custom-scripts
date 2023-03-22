//VERSION=3 (auto-converted from 1)

//Author: Monja Sebela

function evaluatePixel(s) {
    let val = 2.5 * ((s.B11 + s.B04)-(s.B08 + s.B02))/((s.B11 + s.B04)+(s.B08 + s.B02));
    return [2.5* val, s.B08, s.B11];
}
function setup() {
  return {
    input: [{
      bands: [
          "B02",
          "B04",
          "B08",
          "B11",
          "B12"
      ]
    }],
    output: { bands: 3 }
  }
}

