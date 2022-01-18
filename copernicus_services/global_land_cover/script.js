//VERSION=3

// This custom script visualises land cover discrete classification map from global land  cover data

function setup() {
  return {
    input: ["Discrete_Classification_map"],
    output: { 
      bands: 4, 
      sampleType: "AUTO"
    }
  }
}

const map = [
  [0, 0x282828],   // No input data available
  [20, 0xffbb22],  // Shrubs
  [30, 0xffff4c],  // Herbaceous vegetation
  [40, 0xf096ff],  // Cultivated and managed vegetation/agriculture (cropland)
  [50, 0xfa0000],  // Urban / built up
  [60, 0xb4b4b4],  //	Bare / sparse vegetation
  [70, 0xf0f0f0],  //	Snow and Ice
  [80, 0x0032c8],  //	Permanent water bodies
  [90, 0x0096a0],  //	Herbaceous wetland
  [100, 0xfae6a0], //	Moss and lichen
  [111, 0x58481f], // Closed forest, evergreen needle leaf
  [112, 0x009900], // Closed forest, evergreen, broad leaf
  [113, 0x70663e], // Closed forest, deciduous needle leaf
  [114, 0x00cc00], //	Closed forest, deciduous broad leaf
  [115, 0x4e751f], // Closed forest, mixed
  [116, 0x007800], // Closed forest, unknown
  [121, 0x666000], //	Open forest, evergreen needle leafs
  [122, 0x8db400], // Open forest, evergreen broad leaf
  [123, 0x8d7400], //	Open forest, deciduous needle leaf
  [124, 0xa0dc00], //	Open forest, deciduous broad leaf
  [125, 0x929900], // Open forest, mixed
  [126, 0x648c00], // Open forest, unknown
  [200, 0x000080]  // Open sea
    
    
  ];

const visualizer = new ColorMapVisualizer(map);

function evaluatePixel(sample) {
  return [visualizer.process(sample.Discrete_Classification_map)[0], visualizer.process(sample.Discrete_Classification_map)[1], visualizer.process(sample.Discrete_Classification_map)[2], sample.Discrete_Classification_map !=255];
}
