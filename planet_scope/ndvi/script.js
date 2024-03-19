//NDVI
var val = (nir - red) / (nir + red);

return colorBlend(val,
  [0.0, 0.5, 1.0],
  [
    [1, 0, 0],
    [1, 1, 0],
    [0.1, 0.31, 0],
  ]);
