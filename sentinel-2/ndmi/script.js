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
      input: ["B8A", "B11", "dataMask"],
      output: { bands: 4 }
   };
}

function evaluatePixel(samples) {
   let val = index(samples.B8A, samples.B11);
   let imgVals = viz.process(val);
   return imgVals.concat(samples.dataMask);
}
