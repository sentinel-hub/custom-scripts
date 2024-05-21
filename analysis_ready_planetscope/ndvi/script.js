//VERSION=3
//ndvi

function setup() {
  return {
    input: ["nir","red", "dataMask"],
    output: [
      { id:"default", bands: 4 },
      { id: "index", bands: 1, sampleType: 'FLOAT32' }
    ]
  };
}

const colorRamp = [
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
  [1, 0x004400],
];

let viz = new ColorRampVisualizer(colorRamp);

function evaluatePixel(samples) {
  let index = (samples.nir-samples.red)/(samples.nir+samples.red);
  const minIndex = 0;
  const maxIndex = 1;
  let visVal = null;

  if(index > maxIndex || index < minIndex) {
    visVal = [0, 0, 0, 0];
  }
  else {
    visVal = [...viz.process(index),samples.dataMask];
  }

  const indexVal = samples.dataMask === 1 ? index : NaN;

  return { default: visVal, index: [indexVal] };
}