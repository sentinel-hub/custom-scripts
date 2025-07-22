//VERSION=3
/* 
 * Forest Vitality Change Index - Loss Visualization
 * This script visualizes only negative changes (losses) in forest vitality
 * between two timepoints based on vegetation indices.
 * 
 * Parameters:
 * - VI_TYPE: Vegetation index type ("NDVI" or "SAVI")
 * - CC_MIN: Minimum canopy cover percentage
 * - VI_MIN, VI_MAX: Range for clipping vegetation index values
 * - CHANGE_THRESHOLD: Minimum % change to classify as loss
 * - CLASS_INTERVAL: Interval for classifying change magnitude
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
    output: [
      { bands: 4 }, // RGBA for loss
    ],
    mosaicking: "ORBIT",
  };
}

// Configuration parameters
const VI_TYPE = "NDVI"; // Choose "NDVI" or "SAVI"
const CC_MIN = 25;      // Minimum canopy cover percentage to consider valid forest
const VI_MIN = 0.15;    // Minimum vegetation index value for clipping
const VI_MAX = 0.85;    // Maximum vegetation index value for clipping
const CHANGE_THRESHOLD = 2.5; // Minimum % change to classify as loss
const CLASS_INTERVAL = 5;     // Interval for classifying change into palettes
const INVALID_VI = -9999;  // Value for invalid vegetation index
const VI_SCALE = 99;      // Scale factor for VI values (resulting in range 1-100)
const SAVI_L = 0.5;       // Soil adjustment factor for SAVI

// Color palette - for vitality losses (from small to severe)
const lossPalette = [
  [0.6, 0.8, 0.4],  // 0 - smallest loss
  [0.7, 0.9, 0.4],
  [0.8, 1.0, 0.4],
  [0.9, 1.0, 0.3],
  [1.0, 1.0, 0.2],
  [1.0, 0.9, 0.1],
  [1.0, 0.8, 0.0],
  [1.0, 0.6, 0.0],
  [1.0, 0.4, 0.0],
  [1.0, 0.2, 0.0],
  [1.0, 0.0, 0.0],
  [0.8, 0.0, 0.0],
  [0.6, 0.0, 0.0],
  [0.4, 0.0, 0.0],
  [0.2, 0.0, 0.0],
  [0.0, 0.0, 0.4],
  [0.0, 0.0, 0.6],
  [0.0, 0.0, 0.8],
  [0.0, 0.0, 1.0],
  [0.2, 0.2, 1.0],  // 19 - severe loss
];

// Calculate vegetation index (VI) based on type
function calculateVI(nir, red) {
  if (nir === undefined || red === undefined) return INVALID_VI;
  if (nir + red === 0) return INVALID_VI; // Avoid division by zero
  
  if (VI_TYPE === "NDVI") {
    return (nir - red) / (nir + red);
  } else if (VI_TYPE === "SAVI") {
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

// Filter scenes to only include first and last of specified time range
function preProcessScenes(collections) {
  // Helper to keep only first and last orbit if possible
  function filterOrbits(orbits, label) {
    if (Array.isArray(orbits) && orbits.length >= 2) {
      return [orbits[0], orbits[orbits.length - 1]];
    } else {
      throw new Error(`FVCI requires at least 2 ${label} scenes for change detection`);
    }
  }

  collections.arps.scenes.orbits = filterOrbits(collections.arps.scenes.orbits, "arps");
  collections.canopy_cover.scenes.orbits = filterOrbits(collections.canopy_cover.scenes.orbits, "canopy cover");

  return collections;
}

// Main function to evaluate each pixel
function evaluatePixel(samples) {
  // Check for undefined inputs
  if (!samples.arps || !samples.canopy_cover || 
      samples.arps.length < 2 || samples.canopy_cover.length < 2) {
    return [0, 0, 0, 0]; // Transparent
  }

  const ps_ard_T1 = samples.arps[1];
  const ps_ard_T2 = samples.arps[0];
  const canopy_T1 = samples.canopy_cover[1];
  const canopy_T2 = samples.canopy_cover[0];

  // Check data masks
  if (ps_ard_T1.dataMask === 0 || ps_ard_T2.dataMask === 0) {
    return [0, 0, 0, 0];
  }

  // Check cloud masks
  if (ps_ard_T1.cloud_mask !== 1 || ps_ard_T2.cloud_mask !== 1) {
    return [0, 0, 0, 0];
  }

  // Check canopy cover thresholds
  if (canopy_T1.CC <= CC_MIN || canopy_T2.CC <= CC_MIN) {
    return [0, 0, 0, 0];
  }

  // Calculate VI for T1 and T2
  const vi_T1 = calculateVI(ps_ard_T1.nir, ps_ard_T1.red);
  const vi_T2 = calculateVI(ps_ard_T2.nir, ps_ard_T2.red);
  
  // Check for invalid VI values
  if (vi_T1 === INVALID_VI || vi_T2 === INVALID_VI) {
    return [0, 0, 0, 0];
  }

  // Clip and scale VI values
  const vi100_T1 = clipAndScaleVI(vi_T1);
  const vi100_T2 = clipAndScaleVI(vi_T2);

  // Calculate percentage change directly
  const changePercent = vi100_T2 - vi100_T1;

  // Classify change into loss
  if (changePercent < -CHANGE_THRESHOLD) {
    const classIndex = Math.min(
      19,
      Math.floor((-changePercent - CHANGE_THRESHOLD) / CLASS_INTERVAL)
    );
    const color = lossPalette[classIndex];
    return [...color, 1]; // Fully opaque loss
  } else {
    return [0, 0, 0, 0]; // Fully transparent if no significant change
  }
}
