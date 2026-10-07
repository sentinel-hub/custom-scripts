//VERSION=3
/* 
 * Forest Vitality Index with Canopy Cover Filter (FVI-CC) Evaluation Script
 * This script calculates FVI based on vegetation indices (NDVI or SAVI)
 * and filters results based on a canopy cover threshold.
 * It classifies pixels into 15 classes representing different vitality levels.
 * 
 * Parameters:
 * - VI_TYPE: "NDVI" or "SAVI" (Normalized Difference Vegetation Index or Soil Adjusted VI)
 * - CC_MIN: Minimum canopy cover percentage to consider valid forest data
 * - VI_MIN, VI_MAX: Range for clipping vegetation index values
 */

function setup() {
  return {
    input: [
      {
        datasource: "arps",
        bands: ["red", "nir", "dataMask", "cloud_mask"],
      },
      {
        datasource: "canopy_cover",
        bands: ["CC", "dataMask"],
      },
    ],
    output: { bands: 4 },
  };
}

// Configuration parameters
const VI_TYPE = "NDVI"; // Choose "NDVI" or "SAVI"
const CC_MIN = 25; // Minimum canopy cover for valid data
const VI_MIN = 0.15; // Minimum VI value for clipping
const VI_MAX = 0.85; // Maximum VI value for clipping
const NUM_CLASSES = 15;    // Number of FVI classes
const SAVI_L = 0.5;       // Soil adjustment factor for SAVI
const INVALID_VI = -9999;  // Value for invalid vegetation index
const VI_SCALE = 99;      // Scale factor for VI values (resulting in range 1-100)

// Color palette - vitality classes from lowest (1) to highest (15)
const fviPalette = [
  [0.0, 0.0, 0.0],   // 0 – black (no data)
  [0.53, 1.0, 1.0],  // 1 – cyan (extremely low vitality)
  [0.68, 1.0, 1.0],  // 2 – light cyan
  [0.0, 0.33, 1.0],  // 3 – blue
  [0.33, 0.0, 0.0],  // 4 – dark red
  [0.67, 0.0, 0.0],  // 5 – red
  [1.0, 0.5, 0.0],   // 6 – orange
  [1.0, 0.75, 0.0],  // 7 – orange-yellow
  [1.0, 1.0, 0.0],   // 8 – yellow
  [0.8, 1.0, 0.0],   // 9 – yellow-green
  [0.53, 1.0, 0.0],  // 10 – lime green
  [0.0, 1.0, 0.0],   // 11 – green
  [0.0, 0.8, 0.0],   // 12 – dark green
  [0.0, 0.6, 0.0],   // 13 – deeper green
  [0.0, 0.4, 0.0],   // 14 – forest green
  [0.0, 0.25, 0.0],  // 15 – very dark green (highest vitality)
];

// Calculate vegetation index (VI) based on type
function calculateVI(nir, red, type) {
  if (nir === undefined || red === undefined) return INVALID_VI;
  if (nir + red === 0) return INVALID_VI; // Avoid division by zero

  if (type === "NDVI") {
    return (nir - red) / (nir + red);
  } else if (type === "SAVI") {
    return ((nir - red) / (nir + red + SAVI_L)) * (1 + SAVI_L);
  } else {
    return INVALID_VI;
  }
}

// Clip VI to min/max range and scale to 1-100 range
function clipAndScaleVI(vi) {
  const clippedVI = Math.max(VI_MIN, Math.min(vi, VI_MAX));
  return Math.round(((clippedVI - VI_MIN) / (VI_MAX - VI_MIN)) * VI_SCALE) + 1;
}

// Main function to evaluate each pixel
function evaluatePixel(samples) {
  // Check for undefined inputs
  if (!samples.arps || !samples.canopy_cover) {
    return [0, 0, 0, 0]; // Transparent
  }
  
  const ps_ard = samples.arps[0];
  const canopy = samples.canopy_cover[0];

  // Check canopy cover and data masks
  if (
    !canopy || 
    !ps_ard || 
    canopy.CC <= CC_MIN || 
    ps_ard.dataMask === 0 || 
    ps_ard.cloud_mask !== 1
  ) {
    return [0, 0, 0, 0]; // Transparent
  }

  // Calculate vegetation index
  const vi = calculateVI(ps_ard.nir, ps_ard.red, VI_TYPE);

  // Handle invalid vegetation index
  if (vi === INVALID_VI) {
    return [0, 0, 0, 0]; // Transparent
  }

  // Clip and scale VI
  const vi100 = clipAndScaleVI(vi);

  // Reclassify VI100 to FVI classes
  const fviClass = Math.min(
    NUM_CLASSES,
    Math.ceil((vi100 / (VI_SCALE + 1)) * NUM_CLASSES)
  );

  const color = fviPalette[fviClass];
  return [...color, 1]; // Fully opaque
}
