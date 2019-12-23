
// Green Normalized Difference Vegetation Index   (abbrv. GNDVI)
// General formula: (NIR - [540:570]) / (NIR + [540:570])
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=28

let index = (B08 - B03) / (B08 + B03);
return[index]