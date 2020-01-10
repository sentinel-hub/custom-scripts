//
// Atmospherically Resistant Vegetation Index   (abbrv. ARVI)
//
// General formula: (NIR - RED - y * (RED - BLUE))/ (NIR + RED - y*(RED-BLUE))
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=4
//

// Initialize parameters
let y = 0.106;
let index = (B8A - B04 - y * (B04 - B02)) / (B8A + B04 - y * (B04 - B02));

return[index];