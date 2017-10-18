// Misra Green Vegetation Index
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=571=&sensor_id=14

let index = -0.386*B12-0.530*B01+0.535*B15+0.532*B19;
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);