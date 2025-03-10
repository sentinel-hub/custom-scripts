//Version=3
// Simple green color ramp for GIFAPAR index
// By András Zlinszky, Sinergise - with lots of help from GitHub Copilot

function setup() {
    return {
      input: ["GIFAPAR", "dataMask"], 
      output: [
        { id: "default", bands: 4 },
        { id: "index", bands: 1, sampleType: "FLOAT32" },
        { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
        { id: "dataMask", bands: 1 }
      ]
    };
  }
  
  const ramp = [
    [-0.5, 0x0c0c0c],
    [-0.2, 0xbfbfbf],
    [-0.1, 0xdbdbdb],
    [0, 0xeaeaea],
    [0.025, 0xfff9cc],
    [0.05, 0xede8b5],
    [0.075, 0xddd89b],
    [0.1, 0xccc682],
    [0.125, 0xbcb76b],
    [0.15, 0xafc160],
    [0.175, 0xa3cc59],
    [0.2, 0x91bf51],
    [0.25, 0x7fb247],
    [0.3, 0x70a33f],
    [0.35, 0x609635],
    [0.4, 0x4f892d],
    [0.45, 0x3f7c23],
    [0.5, 0x306d1c],
    [0.55, 0x216011],
    [0.6, 0x0f540a],
    [1, 0x004400]
  ];
  
  let viz = new ColorRampVisualizer(ramp);
  
  function evaluatePixel(sample) {
    let val = sample.GIFAPAR;
    let ImgVals = viz.process(val); 
    return {
      default: ImgVals.concat(sample.dataMask),
      index: [sample.dataMask == 1 ? sample.GIFAPAR : NaN], 
      eobrowserStats: [sample.dataMask == 1 ? sample.GIFAPAR : NaN], 
      dataMask: [sample.dataMask]
    };
  }