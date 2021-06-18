//Aesthetic Neon - Aesthetic script for urban and dry areas 
//Author: Monja Šebela

//VERSION=3
function setup() {
  return {
    input: ["B04","B03","B02","B12", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
  
  let val = sample.B12-sample.B04
  return [(3 * val)-0.35,
          (2.5 * sample.B03)-0.35,
          (4.2 * sample.B02)-0.35,
          sample.dataMask ];
}