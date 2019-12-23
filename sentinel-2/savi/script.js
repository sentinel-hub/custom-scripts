// Soil Adjusted Vegetation Index  (abbrv. SAVI)
// General formula: (800nm - 670nm) / (800nm + 670nm + L) * (1 + L)
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=87
// Initialize parameters

let L = 0.428;
let index = (B08 - B04) / (B08 + B04 + L) * (1.0 + L);
return[index]