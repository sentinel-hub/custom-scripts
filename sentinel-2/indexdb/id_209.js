// Adjusted transformed soil-adjusted VI
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=209=&sensor_id=96

let index = B8A*(B08-B8A*B04-0.03)/((B08+B04-B8A*0.03+0.08*(1+Math.pow((B8A),(2)))));
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);