//NDVI
var val = (B3 - B2) / (B3 + B2);

return colorBlend(val,
  [0.0, 0.5, 1.0],
  [
    [1,0,0], 
    [1,1,0], 
    [0.1,0.31,0], 
  ]);
