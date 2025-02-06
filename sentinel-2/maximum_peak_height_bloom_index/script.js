// CyanoLakes Bloom Index
// Kravitz, J.A., Matthews, M.W., 2020

// Water body detection - Credit : Mohor Gartner
var MNDWI_threshold = 0.42; //testing shows recommended 0.42 for Sentinel-2 and Landsat 8. For the scene in article [1] it was 0.8.
var NDWI_threshold = 0.4; //testing shows recommended 0.4 for Sentinel-2 and Landsat 8. For the scene in article [1] it was 0.5.
var filter_UABS = true;
function wbi(r, g, b, nir, swir1, swir2) {
  //water surface
  let ws = 0;
  //try as it might fail for some pixel
  try {
    //calc indices
    //[4][5][1][8][2][3]
    var ndvi = (nir - r) / (nir + r),
      mndwi = (g - swir1) / (g + swir1),
      ndwi = (g - nir) / (g + nir),
      ndwi_leaves = (nir - swir1) / (nir + swir1),
      aweish = b + 2.5 * g - 1.5 * (nir + swir1) - 0.25 * swir2,
      aweinsh = 4 * (g - swir1) - (0.25 * nir + 2.75 * swir1);
    //[10][11][12]
    var dbsi = (swir1 - g) / (swir1 + g) - ndvi,
      wii = Math.pow(nir, 2) / r,
      wri = (g + r) / (nir + swir1),
      puwi = 5.83 * g - 6.57 * r - 30.32 * nir + 2.25,
      uwi = (g - 1.1 * r - 5.2 * nir + 0.4) / Math.abs(g - 1.1 * r - 5.2 * nir),
      usi = 0.25 * (g / r) - 0.57 * (nir / g) - 0.83 * (b / g) + 1;
    //DEFINE WB
    if (
      mndwi > MNDWI_threshold ||
      ndwi > NDWI_threshold ||
      aweinsh > 0.1879 ||
      aweish > 0.1112 ||
      ndvi < -0.2 ||
      ndwi_leaves > 1
    ) {
      ws = 1;
    }
    //filter urban areas [3] and bare soil [10]
    if (filter_UABS && ws == 1) {
      if (aweinsh <= -0.03 || dbsi > 0) {
        ws = 0;
      }
    }
  } catch (err) {
    ws = 0;
  }
  return ws;
}
let water = wbi(B04, B03, B02, B08, B11, B12);

// Baseline subtractions
function MCI(a, b, c) {
  return b - a - ((c - a) * (705 - 665)) / (740 - 665);
}
function FAI(a, b, c) {
  return b - a - ((c - a) * (740 - 665)) / (842 - 665);
}

// True color representation
var trueColor = [3 * B04, 3 * B03, 3 * B02];

// Switches to FAI if FAI > MCI
function Switch(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Bloom index
var bloom_index = Switch(MCI(B04, B05, B06), FAI(B04, B06, B08));

// HighlightCompressVisualizer
// This compresses bloom index values over 0.05 corresponding to floating algae
// 0.05 will return ~ 0.9
const compressviz = new HighlightCompressVisualizer(0, 0.05);

// Visualise on color scale between 0 and 1 (after compression)
var viz = ColorRampVisualizer.createBlueRed(0, 1);

//Compressed index
compressed_index = compressviz.process(bloom_index);

return water == 0 ? trueColor : viz.process(compressed_index);
