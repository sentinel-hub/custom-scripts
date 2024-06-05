//PlanetScope NDVI
let band1 = sample.nir;
let band2 = sample.red;
const denominator = band1 + band2;  
let ndvi = denominator === 0 ? NaN : (band1 - band2) / denominator;

return colorBlend(val,
  [0.0, 0.5, 1.0],
  [
    [1, 0, 0],
    [1, 1, 0],
    [0.1, 0.31, 0],
  ]);
