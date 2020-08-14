//ndwi
var colorRamp1 = [
  	[0, 0xFFFFFF],
  	[1, 0x008000]
  ];
var colorRamp2 = [
  	[0, 0xFFFFFF],
  	[1, 0x0000CC]
  ];

let viz1 = new ColorRampVisualizer(colorRamp1);
let viz2 = new ColorRampVisualizer(colorRamp2);

function evaluatePixel(samples) {
  var val = index(samples[0].B03, samples[0].B08);

  if (val < -0) {
    return viz1.process(-val);
  } else {
    return viz2.process(Math.sqrt(Math.sqrt(val)));
  }
}

function setup(ds) {
  setInputComponents([ds.B03, ds.B08]);
  setOutputComponentCount(3);
}