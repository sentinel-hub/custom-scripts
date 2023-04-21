
// Modified Chlorophyll Absorption in Reflectance Index   (abbrv. MCARI)
// General formula: ((700nm - 670nm) - 0.2 * (700nm - 550nm)) * (700nm /670nm)
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=41

let index = ((B05 - B04) - 0.2 * (B05 - B03)) * (B05 / B04);
return[index]