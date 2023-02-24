//VERSION=3

function evaluatePixel(samples) {
  	let tile_sample = NaN;
  	let tile_dataMask = 0;
  	for (let i = 0; i < samples.length; i++) {
        if (samples[i].dataMask === 1) {
              tile_sample = samples[i].lulc;
              tile_dataMask = 1;
        }
    }
    if (tile_sample === 1) {
      return [65, 155, 223, tile_dataMask*255];
    }
  	if (tile_sample === 2) {
      return [57, 125, 73, tile_dataMask*255];
    }
  	if (tile_sample === 4) {
      return [122, 135, 198, tile_dataMask*255];
    }
    if (tile_sample === 5) {
      return [228, 150, 53, tile_dataMask*255];
    }
    if (tile_sample === 7) {
      return [196, 40, 27, tile_dataMask*255];
    }
    if (tile_sample === 8) {
      return [165, 155, 143, tile_dataMask*255];
    }
    if (tile_sample === 9) {
      return [168, 235, 255, tile_dataMask*255];
    }
    if (tile_sample === 10) {
      return [97, 97, 97, tile_dataMask*255];
    }
    if (tile_sample === 11) {
      return [227, 226, 195, tile_dataMask*255];
    }
}

function setup() {
  return {
    input: [{
      bands: [
        "lulc", "dataMask"
      ]
    }],
    output: {
      bands: 4,
      sampleType: "UINT8"
    },
    mosaicking: "TILE"
  }
}
