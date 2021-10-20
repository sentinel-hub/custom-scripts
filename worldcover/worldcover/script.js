//VERSION=3

// This custom script visualises WorldCover map 

function setup() {
  return {
    input: ["Map", "dataMask"],
    output: { 
      bands: 4, 
      sampleType: "AUTO"
    }
  }
}

const map = [
    [10, 0x006400], // Tree cover
    [20, 0xffbb22], // Shrubland
    [30, 0xffff4c], // Grassland
    [40, 0xf096ff], // Cropland
    [50, 0xfa0000], // Built up
    [60, 0xb4b4b4], // Bare / sparse vegetation
    [70, 0xf0f0f0], //	Snow and Ice
    [80, 0x0064c8], //	Permanent water bodies
    [90, 0x0096a0], //	Herbaceous wetland
    [95, 0x00cf75], //	Mangroves
    [100, 0xfae6a0], //	Moss and lichen
    
  ];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  return [visualizer.process(sample.Map)[0], visualizer.process(sample.Map)[1], visualizer.process(sample.Map)[2], sample.dataMask];
}
