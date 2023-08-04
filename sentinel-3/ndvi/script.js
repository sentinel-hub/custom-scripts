//VERSION=3

// Normalized Difference Vegetation Index, NDVI
// Negative values of NDVI (values approaching -1) correspond to water. 
// Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. 
// Low, positive values represent shrub and grassland (approximately 0.2 to 0.4).
// High values indicate temperate and tropical rainforests (values approaching 1).
// Thresholds may be adapted depending on local conditions.

function setup() {
  return {
    input: ["B17", "B08"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  // Calculate NDVI
  var NDVI = index(sample.B17, sample.B08);

  // Color depending on class
  if (NDVI < -1.1) return [0, 0, 0];
  else if (NDVI < -0.2) return [0.75, 0.75, 0.75];
  else if (NDVI < -0.1) return [0.86, 0.86, 0.86];
  else if (NDVI < 0) return [1, 1, 0.88];
  else if (NDVI < 0.025) return [1, 0.98, 0.8];
  else if (NDVI < 0.05) return [0.93, 0.91, 0.71];
  else if (NDVI < 0.075) return [0.87, 0.85, 0.61];
  else if (NDVI < 0.1) return [0.8, 0.78, 0.51];
  else if (NDVI < 0.125) return [0.74, 0.72, 0.42];
  else if (NDVI < 0.15) return [0.69, 0.76, 0.38];
  else if (NDVI < 0.175) return [0.64, 0.8, 0.35];
  else if (NDVI < 0.2) return [0.57, 0.75, 0.32];
  else if (NDVI < 0.25) return [0.5, 0.7, 0.28];
  else if (NDVI < 0.3) return [0.44, 0.64, 0.25];
  else if (NDVI < 0.35) return [0.38, 0.59, 0.21];
  else if (NDVI < 0.4) return [0.31, 0.54, 0.18];
  else if (NDVI < 0.45) return [0.25, 0.49, 0.14];
  else if (NDVI < 0.5) return [0.19, 0.43, 0.11];
  else if (NDVI < 0.55) return [0.13, 0.38, 0.07];
  else if (NDVI < 0.6) return [0.06, 0.33, 0.04];
  else return [0, 0.27, 0];
}
