// Normalized Difference NIR/SWIR Normalized Burn Ratio (abbrv. NBR)
// General formula: (NIR - SWIR) / (NIR + SWIR)
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=53

let index = (B08 - B12) / (B08 + B12);
return[index]