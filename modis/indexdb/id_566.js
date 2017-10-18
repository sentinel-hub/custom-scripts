// Tasselled Cap - Yellow Vegetation Index MSS
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=566=&sensor_id=14

let index = -0.899*B12+0.428*B01+0.076*B15-0.041*B19;
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);