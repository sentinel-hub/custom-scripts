// Chlorophyll Absorption Ratio Index 2
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=250=&sensor_id=96

let index = ((Math.abs(((B05-B03)/(150)*B04+B04+B03-(B8A*B03))))/(Math.pow(((Math.pow((B8A),(2))+1)),(0.5))))*((B05)/(B04));
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);