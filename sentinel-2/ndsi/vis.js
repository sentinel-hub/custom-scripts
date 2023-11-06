//VERSION=3
//Reference: https://earth.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm

function setup() {
  return {
    input: ["B03", "B11", "B04", "B02", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
  let val = index(samples.B03, samples.B11);

  if (val > 0.42)
    imgVals = [0, 0.8, 1, samples.dataMask];
  else
    imgVals = [2.5 * samples.B04, 2.5 * samples.B03, 2.5 * samples.B02, samples.dataMask];

  return imgVals
}
