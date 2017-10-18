// Tasselled Cap - wetness
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=93=&sensor_id=96

let index = 0.1509*B02+0.1973*B03+0.3279*B04+0.3406*B08-0.7112*B11-0.4572*B12;
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);