// //info
// VERSION: 3
// Name: Symbolic Regression Vegetation Index (SRVI)
// Description: Optimized spectral index for global vegetation mapping discovered via symbolic regression.
// Reference: Chrysostomou, C., Neophytides, S.P., Mavrovouniotis, M. et al. Optimized spectral indices for global vegetation and water mapping using Sentinel-2. Sci Rep 16, 4491 (2026).
// DOI: https://doi.org/10.1038/s41598-025-34720-x

function setup() {
  return {
    input: ["B03", "B04", "B08", "B11", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
  let G = samples.B03;  // Green
  let R = samples.B04;  // Red
  let N = samples.B08;  // NIR
  let S1 = samples.B11; // SWIR1
  
  let denominator = N + R + 0.5 * (G + S1);
  let srvi = (denominator !== 0) ? (2.0 * N - 3.0 * R) / denominator : 0;
  
  let visual = (srvi + 1.5) / 3.5; 
  visual = Math.max(0, Math.min(1, visual));
  
  return [0, visual, 0, samples.dataMask];
}
