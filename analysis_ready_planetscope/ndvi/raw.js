//VERSION=3
// ndvi

function setup() {
    return {
      input: ["nir","red", "cloud_mask", "dataMask"],
      output: {
        bands: 4
    }
    };
  }
  
function evaluatePixel(samples) {
    return [(samples.nir-samples.red)/(samples.nir+samples.red)];
}