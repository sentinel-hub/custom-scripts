//VERSION=3
//NDWI

function setup() {
  return {
    input: [{ bands: ["green", "nir", "dataMask"] }],
    output: [{ id: "default", bands: 4 }],
  };
}

function evaluatePixel(sample) {
  let ndwi = index(sample.green, sample.nir);

  let id_default = colorBlend(
    ndwi,
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

  return { default: [...id_default, sample.dataMask] };
}
