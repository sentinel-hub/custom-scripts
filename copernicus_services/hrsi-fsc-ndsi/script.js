//VERSION=3

function setup() {
  return {
    input: ["NDSI", "dataMask"],
    output: {bands: 4,
    sampleType: "AUTO"
  }
}
}

const ramps = [
  [0, 0xffffff],
  [100, 0x4d4dff ],
];

const visualizer = new ColorRampVisualizer(ramps);

function evaluatePixel(sample) {

var NDSI_viz = visualizer.process(sample.NDSI)
  if (sample.NDSI == 255){
    return [0,0,0, sample.dataMask]
  }
  else if (sample.NDSI == 205){
    return [0.9, 0.9, 0.9, sample.dataMask]
  }
  else {
  return [NDSI_viz[0], NDSI_viz[1], NDSI_viz[2], sample.dataMask]
}  
}  