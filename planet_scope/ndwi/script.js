//NDWI

let band1 = sample.green;
let band2 = sample.nir;
const denominator = band1 + band2;
let ndwi = denominator === 0 ? NaN : (band1 - band2) / denominator;

return colorBlend(ndwi,
  [-1, -0.5, -0.2, 0, 0.2, 0.5, 1.0],
  [
    [1, 0, 1],
    [1, 0.5, 0],
    [1, 1, 0],
    [0.2, 1, 0.5],
    [0, 0, 1],
    [0, 0, 0.3],
    [0, 0, 0],
  ]
);

