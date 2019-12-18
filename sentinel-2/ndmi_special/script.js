
// Normalized Difference Moisture Index (abbrv. NDMI)
//
// General formula: (820nm - 1600nm) / (820nm + 1600nm)
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=56

var index = (B08 - B11) / (B08 + B11);

if (index <= 0){
  return [1, 1, 1];
}
if (index <= 0.2){
  return [0, 0.8, 0.9];
} 
if (index <= 0.4){
  return [0, 0.5, 0.9];
} 
else{
  return [0, 0, 0.7];
}
  
