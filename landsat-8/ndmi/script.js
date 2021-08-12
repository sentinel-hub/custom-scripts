//VERSION=3
const moistureRamps = [
        [-0.8, 0x800000],
        [-0.24, 0xff0000],
        [-0.032, 0xffff00],
        [0.032, 0x00ffff],
        [0.24, 0x0000ff],
        [0.8, 0x000080]
      ];

const viz = new ColorRampVisualizer(moistureRamps);

function setup() {
  return {
    input: ["B05", "B06","dataMask"],
    output: [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" }
    ]
  };
}

function evaluatePixel(samples) {
  let val = index(samples.B05, samples.B06); 
  // The library for tiffs works well only if there is only one channel returned.
  // So we encode the "no data" as NaN here and ignore NaNs on frontend.
  const indexVal = samples.dataMask === 1 ? val : NaN;
  return {
    default: [...viz.process(val),samples.dataMask],
    index: [indexVal] 
  };
}