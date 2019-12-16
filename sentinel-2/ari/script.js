//
// Anthocyanin reflectance index  (abbrv. ARI)
//
// General formula: 1/550nm-1/700nm
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=214

let index = 1.0 / B03 - 1.0 / B05;
return [index]

