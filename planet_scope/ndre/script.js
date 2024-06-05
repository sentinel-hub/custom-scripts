//PlanetScope NDRE
let band1 = sample.nir;
let band2 = sample.rededge;
const denominator = band1 + band2;  
let ndre = denominator === 0 ? NaN : (band1 - band2) / denominator;

return colorBlend(val,
  [0.0, 0.5, 1.0],
  [
    [1, 0, 0],
    [1, 1, 0],
    [0.1, 0.31, 0],
  ]);
