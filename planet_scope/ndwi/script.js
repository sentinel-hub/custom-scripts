//VERSION=3
//NDWI

function setup() {
  return {
    input: [{ bands: ["green", "nir", "dataMask"] }],
    output: [
      { id: "default", bands: 4 },
    ]
  }
}

function evaluatePixel(sample) {
  let ndwi = (sample.green / 3000 - sample.nir / 3000) / (sample.green / 3000 + sample.nir / 3000);

  let id_default = colorBlend(ndwi,
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
