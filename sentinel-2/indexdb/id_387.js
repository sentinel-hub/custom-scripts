// Soil and Atmospherically Resistant Vegetation Index 2
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=387=&sensor_id=96

let index = 2.5*(B09-B05)/(1+B09+6*B05-7.5*B01);
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);