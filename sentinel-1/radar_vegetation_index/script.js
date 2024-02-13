// Radar vegetation index for Sentinel-1 (RVI4S1) SAR data
// Institute: MRSLab, Indian Institute of Technology Bombay, India
// Data requirements: Sentinel-1 GRD data
// Reference: Bhogapurapu, N., Dey, S., Mandal, D., Bhattacharya, A., Karthikeyan, L., McNairn, H. and Rao, Y.S., 2022. Soil moisture retrieval over croplands using dual-pol L-band GRD SAR data. Remote Sensing of Environment, 271, p.112900.
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
   // Ratio parameter
   let q =  (samples.VH / samples.VV);

   // co-pol purity parameter m
   // m = (1-q)/(1+q)
   // normalized co-pol intensity parameter beta
   // beta = 1/(1+q)
   // Dual-pol radar vegetation indec DpRVIc = 1-(m*beta)
   // It can be also written directly in terms of q as follows
   let N = q*(q+3);
   let D = (q+1)*(q+1);

   //depolarization within the vegetation
   //let value = (Math.sqrt(dop)) * ((4 * (samples.VH)) / (samples.VV + samples.VH));
   let value = N/D;
   let imgVals = visualizer.process(value);
   return imgVals.concat(samples.dataMask)
}
