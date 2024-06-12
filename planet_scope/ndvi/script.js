//PlanetScope NDVI
let ndvi = index(nir, red);

return colorBlend(
    ndvi,
    [0.0, 0.5, 1.0],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0.1, 0.31, 0],
    ]
);
