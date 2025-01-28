//VERSION=3 
// By Jonas Viehweger, Sinergise

var minVal = 0.0;
var maxVal = 0.0001;
const map = [
  [0, 0x00007f], 
  [1, 0x0000ff],
  [2, 0x00ffff],
  [3, 0xffff00],
  [4, 0xff0000],
  [5, 0x7f0000]
]; 
const visualizer = new ColorRampVisualizer(map, minVal, maxVal)
function setup() {
   return {
    input: ["NO2","dataMask"],
  output: [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32"},
      { id: "dataMask", bands: 1 },
    ],
    mosaicking: "ORBIT"
  };
}
function isClear(sample) {
    return sample.dataMask == 1;
}
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].NO2;
    }
    return sum;
}
function evaluatePixel(samples) {
      const clearTs = samples.filter(isClear)
    const mean = sum(clearTs) / clearTs.length
   const [r, g, b] = visualizer.process(mean);
   const dataMask = clearTs.length > 0;
   return {
        default: [r, g, b, dataMask],
        index: [mean],
        eobrowserStats: [mean],
        dataMask: [dataMask],
      };
}
