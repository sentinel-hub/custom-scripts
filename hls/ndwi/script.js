//VERSION=3
//ndwi
const colorRamp1 = [
  	[0, 0xFFFFFF],
  	[1, 0x008000]
  ];
const colorRamp2 = [
  	[0, 0xFFFFFF],
  	[1, 0x0000CC]
  ];

let viz1 = new ColorRampVisualizer(colorRamp1);
let viz2 = new ColorRampVisualizer(colorRamp2);

function setup() {
  return {
    input: ["Green", "NIR_Narrow", "dataMask"],
    output: [
		{ id:"default", bands: 4 },
        { id: "index", bands: 1, sampleType: "FLOAT32" }
	]
  };
}

function evaluatePixel(samples) {
  let val = index(samples.Green, samples.NIR_Narrow);
  let imgVals = null;
  const indexVal = samples.dataMask === 1 ? val : NaN;
  
  if (val < -0) {
    imgVals = [...viz1.process(-val), samples.dataMask];
  } else {
    imgVals = [...viz2.process(Math.sqrt(Math.sqrt(val))), samples.dataMask];
  }
  return {
    default: imgVals,
    index: [indexVal]
  };
}