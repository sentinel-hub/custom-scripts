// Normalized Difference 819/1600 NDII (abbrv. NDII)
// General formula: (819nm-1600nm)/(819nm+1600nm)
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=242

let index = (B08 - B11) / (B08 + B11);
return[index]