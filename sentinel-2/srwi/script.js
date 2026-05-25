// //info
// VERSION: 3
// Name: Symbolic Regression Water Index (SRWI)
// Description: Optimized spectral index for consistent surface water delineation discovered via symbolic regression.
// Reference: Chrysostomou, C., Neophytides, S.P., Mavrovouniotis, M. et al. Optimized spectral indices for global vegetation and water mapping using Sentinel-2. Sci Rep 16, 4491 (2026).
// DOI: https://doi.org/10.1038/s41598-025-34720-x

function setup() {
  return {
    input: ["B02", "B03", "B08", "B11", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
  let B = samples.B02;  // Blue
  let G = samples.B03;  // Green
  let N = samples.B08;  // NIR
  let S1 = samples.B11; // SWIR1
  
  let numerator = (G + B) - (N + S1);
  let denominator = (G + B) + (N + S1);
  let srwi = (denominator !== 0) ? numerator / denominator : 0;
  
  let visual = (srwi + 1.0) / 2.0;
  visual = Math.max(0, Math.min(1, visual));
  
  return [0, 0, visual, samples.dataMask];
}
