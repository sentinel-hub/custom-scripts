//VERSION=3
function setup(){
  return{
    input: ["B02", "B03", "B04", "dataMask"],
    output: {bands: 4}
  }
}

function evaluatePixel(sample){
  // Set gain for visualisation
  let gain = 2.5;
  // Return RGB
  return [sample.B04 * gain, sample.B03 * gain, sample.B02 * gain, sample.dataMask];
}
