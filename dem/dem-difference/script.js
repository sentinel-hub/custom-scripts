// Mapzen and Copernicus DEM difference Visualization
//VERSON = 3
function setup() {
  return {
    input: [
      { datasource: "map", bands: ["DEM"] },
      { datasource: "cop", bands: ["DEM"] },
    ],
    output: [{ id: "default", bands: 3, sampleType: "UINT8" }],
  };
}

function evaluatePixel(samples) {
  var map = samples.map[0];
  var cop = samples.cop[0];
  let d_dem = map.DEM - cop.DEM;
  const ramps = [
    [-300, [202, 0, 32]],
    [-100, [244, 128, 85]],
    [-40, [255, 160, 125]],
    [-10, [255, 211, 195]],
    [-5, [255, 255, 255]],
    [5, [255, 255, 255]],
    [10, [196, 209, 255]],
    [40, [155, 127, 255]],
    [100, [73, 98, 222]],
    [300, [8, 0, 176]],
  ];
  const visualizer = new ColorRampVisualizer(ramps);
  vis_dem = visualizer.process(d_dem);
  return {
    default: vis_dem,
  };
}
