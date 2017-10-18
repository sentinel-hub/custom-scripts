// Modified Triangular Vegetation Index 2
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=47=&sensor_id=96

let index = (1.5*(1.2*(B08-B03)-2.5*(B04-B03))/(Math.sqrt(Math.pow(((2*B08+1)),(2))-(6*B08-5*Math.sqrt(B04))-0.5)));
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);