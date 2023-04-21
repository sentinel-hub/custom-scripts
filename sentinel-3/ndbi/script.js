//VERSION=3

// Normalized Difference Bare ice Index, NDBI
// Source: https://www.mdpi.com/2072-4292/11/19/2280
// Values between 0 and 0.2 correspond to snow
// Values between 0.2 and 0.5 correspond to bare ice
// Values between 0.5 and 0.8 correspond to dark (melting) ice
// Thresholds may be adapted depending on local conditions.

function setup() {
  return {
    input: ["B02", "B21"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {

  // Calculate NDBI
  var NDBI = index(sample.B02, sample.B21);

  // Color depending on class
  if ((NDBI > 0) & (NDBI < 0.2)){
    return [179/255, 203/255, 255/255]; // Snow
  } else if ((NDBI >= 0.2) & (NDBI < 0.5)){
    return [255/255,204/255,204/255]; // Ice
  } else if ((NDBI >= 0.5)&(NDBI < 0.8)){
    return [0/255,0/255,255/255]; // Dark ice
  } else {
      return [0,0,0]; // Shadows, water...
  }
}
