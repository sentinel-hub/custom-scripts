// Aerosol free vegetation index 2100
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=395=&sensor_id=96

let index = (B09-0.5*(B12)/(B09+0.56*B12));
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);