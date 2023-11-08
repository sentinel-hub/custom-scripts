// Radar vegetation index for Sentinel-1 (RVI4S1) SAR data
// Institute: MRSLab, Indian Institute of Technology Bombay, India
// Data requirements: Sentinel-1 GRD data
function setup() {
   return {
      input: ["VV", "VH", "dataMask"],
      output: { bands: 4 }
   };
}

const ramp = [
   [0, 0x8e0152],
   [0.25, 0xde77ae],
   [0.5, 0xf7f7f7],
   [0.75, 0x7fbc41],
   [1, 0x276419],
];

const visualizer = new ColorRampVisualizer(ramp);

function evaluatePixel(samples) {
   //equivalent to complement of the degree of polarization
   let dop = (samples.VV / (samples.VV + samples.VH));
   let m = 1 - dop;
   //depolarization within the vegetation
   let value = (Math.sqrt(dop)) * ((4 * (samples.VH)) / (samples.VV + samples.VH));
   let imgVals = visualizer.process(value);
   return imgVals.concat(samples.dataMask)
}
