//VERSION=3
//ndwi with kndvi
const colorRamp1 = [
    [0, 0xFFFFFF], //Black
    [0.7, 0x008000] //Green (lower if you want a greener map)
];
const colorRamp2 = [
    [0, 0xFFFFFF], //Black
    [1, 0x0000CC]  //Medium Blue
];

let viz1 = new ColorRampVisualizer(colorRamp1);
let viz2 = new ColorRampVisualizer(colorRamp2);

function setup() {
return {
  input: ["B03", "B04", "B08","dataMask"],
  output: [
      { id:"default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 1, sampleType: 'FLOAT32' },
      { id: "dataMask", bands: 1 }
  ]
};
}

function evaluatePixel(samples) {
let factor = 1/2000;
let Green = factor * samples.B03;
let Red = factor * samples.B04;
let NIR = factor * samples.B08;
let val = index(Green, NIR);
let kndvi = Math.tanh(Math.pow(((NIR - Red) / (NIR + Red)), 2)); //https://doi.org/10.1126/sciadv.abc7447
let imgVals = null;
// The library for tiffs works well only if there is only one channel returned.
// So we encode the "no data" as NaN here and ignore NaNs on frontend.
const indexVal = samples.dataMask === 1 ? val : NaN;

if (val < -0) {
  imgVals = [...viz1.process(kndvi), samples.dataMask];
} else {
  imgVals = [...viz2.process(Math.sqrt(Math.sqrt(val))), samples.dataMask];
}
return {
  default: imgVals,
  index: [indexVal],
  eobrowserStats:[val],
  dataMask: [samples.dataMask]
};
}