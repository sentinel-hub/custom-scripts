//VERSION=3
// ndvi

function setup() {
    return {
      input: ["nir", "red", "cloud_mask", "dataMask"],
      output: {
        bands: 4
      }
    };
  }
  
function evaluatePixel(sample) {
    return [(sample.nir - sample.red) / (sample.nir + sample.red)];
}