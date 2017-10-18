// Soil and Atmospherically Resistant Vegetation Index 2
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=387=&sensor_id=168

let index = 2.5*(B05-B04)/(1+B05+6*B04-7.5*B02);
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);