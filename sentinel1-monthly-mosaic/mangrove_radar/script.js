//VERSION=3
// Mangrove Radar Index by András Zlinszky, Sinergise Solutions
// enables color palette visualization of Sentinel-1 VV backscatter
// Mangrove often has a slightly higher reflectivity in Sentinel-1 VV than other vegetation. You can tune palette min and max values and individual color thresholds to find mangrove.
// Note that other vegetation (eg banana plantations) and other land cover classes (eg cities) may also reflect strongly in VV, so the visualization is not selective for mangrove.

// set constants for the color map minimum and maximum here. These will override the values in the colormap variable, with the individual color steps scaling proportionally to their value, within the interval set by the min and max.
const max = 0.87;
const min = -0.05;


// adding input data bands, defining outputs
function setup() {
  return {
    input: ["VV", "dataMask"],
    output: [
      { id: "default", bands: 4 },
      { id: "eobrowserStats", bands: 1 },
      { id: "dataMask", bands: 1 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
    ],
  };
}

//defining the color map https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Evalscript/Functions.html#colormapvisualizer

const map = [
  [0.9, 0xf7eafd], //very light lavender
  [0.73, 0xebebeb], //very light grey
  [0.7, 0xa76b18], //brown ochre
  [0.65, 0xdca620], //golden yellow
  [0.6, 0xA2AE32], //olive green
  [0.4, 0x18a722], //bright green
  [0.3, 0x018643], //deep green
  [0.2, 0x15965], //teal green
  [0.1, 0x01471c], //very dark green
  [0.075, 0x0d5854], //dark turquoise
  [0.05, 0x7102c], //blue
  [0.04, 0x0d027e], //dark blue
  [0.01, 0x08014c], //very dark blue
  [0.005, 0x4a4a4a], //dark grey
];

const visualizer = new ColorRampVisualizer(map, min, max);

function evaluatePixel(samples) {
  const value = Math.max(0, Math.log(samples.VV) * 0.21714724095 + 1);
  const imgVals = visualizer.process(value)
  return {
    default: [...imgVals, samples.dataMask],
    eobrowserStats: [value],
    dataMask: [samples.dataMask],
    index: [value],
  };
}
// This section is copied from the regular Sentinel-1 mosaics VV decibel gamma evalscript
// ---
/*
  // displays VV in decibels from -20 to 0
  // the following is simplified below
  // var log = 10 * Math.log(VV) / Math.LN10;
  // var val = Math.max(0, (log + 20) / 20);
  
  return [Math.max(0, Math.log(VV) * 0.21714724095 + 1)];
*/
