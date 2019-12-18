//
// Modified Anthocyanin reflectance index  (abbrv. mARI)
//
// General formula: (1/550nm-1/700nm)*NIR
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=214

let index = ((1.0 / B03) - (1.0 / B05)) * B07;
return [index]

