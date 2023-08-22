//
// Chlorophyll Red-Edge  (abbrv. Chlred-edge)
//
// General formula: (NIR/RE)-1
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=252
//

let index = (B07 / B05) - 1;

return colorBlend(index, [0, 1, 2.5, 5, 10, 20],
  [
    [0, 0, 0],
    [0, 0.5, 0],
    [0.2, 0.8, 0],
    [1, 1, 0],
    [0.8, 0.8, 0.8],
    [1, 1, 1]
  ]);
