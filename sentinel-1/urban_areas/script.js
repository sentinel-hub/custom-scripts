
/*URBAN AREAS
  Sentinel1-AWS-IW-VVVH
  Author: Monja Sebela
*/
//VERSION=3
function setup() {
  return {
    input: ["VV", "VH", "dataMask"],
    output: { bands: 4 }
  }
}

function evaluatePixel(sample) {
  return [5.5 * sample.VH > 0.5, sample.VV, sample.VH * 8, sample.dataMask]
} 
