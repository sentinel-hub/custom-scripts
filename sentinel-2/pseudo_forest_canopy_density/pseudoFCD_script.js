//
// Pseudo Forest Canopy Density (FCD)
// -----------------------------
// 2019 - Antonio Carlon Paredes
// License: CC BY 4.0
// https://creativecommons.org/licenses/by/4.0/
//

// Set to false to avoid detecting water bodies
detect_water = true;

// Colors
let water = [51/255, 128/255, 204/255]; // Blue #3380cc
let hi_forest = [0, 104/255, 55/255]; // Strong green #006837
let low_forest = [62/255, 165/255, 64/255]; // Medium green #3ea540
let grass_land = [186/255, 240/255, 150/255]; // Light green #baf096
let bare_land = [173/255, 136/255, 85/255]; // Brown #ad8855
let other = [0, 0, 0]; // Black #000000

// COEFICIENTS: These coeficients are orientative
// and some tweak may be needed depending on the
// location and case of study

// NDWI water limit
let ndwi_hi = 0.2;

// Bare soil index (BI), soil limit
let bi_hi = 2;

// NDVI high and low limits
let ndvi_lo = 0.20; // 0.20 for L1C (suggested value)
                    // 0.25 for L2A (suggested value)
let ndvi_hi = 0.40; // 0.40 for L1C (suggested value)
                    // 0.45 for L2A (suggested value)

// Shadow index (SI) high and low limits
let si_lo = 0.90; // 0.90 for L1C (suggested value) 
                  // 0.92 for L2A (suggested value)
let si_hi = 0.93; // 0.93 for L1C (suggested value) 
                  // 0.95 for L2A (suggested value)

if (detect_water) {
	ndwi = (B03 - B08) / (B03 + B08);
	if (ndwi > ndwi_hi)
	  return water;
}

let ndvi = (B08 - B04) / (B08 + B04);
let bi_1 = (B08 + B03 + B04) / (B08 + B03 - B04);
let si = Math.pow((1 - B03) * (1 - B04), 1/2);

if (ndvi > ndvi_hi && bi_1 < bi_hi && si > si_hi)
  return hi_forest;
else if (ndvi_hi > ndvi > ndvi_lo && bi_1 < bi_hi && si_hi > si > si_lo)
  return low_forest;
else if (ndvi > ndvi_lo)
  return grass_land;
else if (ndvi < ndvi_lo && bi_1 > bi_hi && si_lo > si)
  return bare_land;
else
  return other;
  