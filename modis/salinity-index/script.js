////VERSION=3 (auto-converted from 1)
// MODIS Normalized Difference Salinity Index (NDSI)
// https://www.indexdatabase.de/db/si-single.php?rsindex_id=57=&sensor_id=14


let viz = ColorGradientVisualizer.createWhiteGreen(-0.89, 0.89);

function evaluatePixel(samples) {
    let val = index(samples.B06, samples.B07);
    return [...viz.process(val),samples.dataMask];
}

function setup() {
  return {
    input: [{
      bands: [ "B06", "B07", "dataMask" ]
    }],
    output: { bands: 4 }  }
}
