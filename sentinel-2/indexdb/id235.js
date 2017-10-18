// Tasselled Cap - vegetation
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=92=&sensor_id=96

let index = -0.2848*B02-0.2435*B03-0.5436*B04+0.7243*B08+0.0840*B11-0.1800*B12;
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);