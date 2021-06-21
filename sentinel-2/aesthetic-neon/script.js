//Aesthetic Neon - Aesthetic script for urban and dry areas 
//Author: Monja Šebela

//VERSION=3
function setup() {
  return {
    input: ["B04", "B03", "B02", "B12", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
  
  let val = sample.B12 - sample.B04
  let gain = 2.3
  let gamma = - 0.95 // recommended gamma: -0.55 to -0.95
  return [(gain * 3 * val) + gamma,
          (gain * 2.5 * sample.B03) + gamma,
          (gain * 4.2 * sample.B02) + gamma,
          sample.dataMask];
}
