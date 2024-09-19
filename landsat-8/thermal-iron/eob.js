//VERSION=3 

// Set Min and Max values for display and number of steps in the palette
const minValue = 10
const maxValue = 45
const numSteps = 200

// Setup palette
const palette_colours = palette(numSteps, minValue, maxValue)
const viz = new ColorRampVisualizer(palette_colours);


function setup() {
  return {
    input: ["B10", "BQA", "dataMask"],
    output: [
      { id: "default", bands: 4 },
      { id: "eobrowserStats", bands: 2 },
      { id: "dataMask", bands: 1 },
    ],
  };
}

function evaluatePixel(samples) {
  let val = samples.B10 - 273;
  let clouds = isCloud(samples)
  
  return {
    default: [...viz.process(val), (samples.dataMask * (clouds ? 0 : 1))],
    eobrowserStats: [val, clouds ? 0 : 1],
    dataMask: [samples.dataMask],
  };
}

function isCloud(sample) {
  const BQA = decodeL8C2Qa(sample.BQA);
  let cloudPresence = false
  if (BQA.cloud == 1 || BQA.cloudShadow == 1 || BQA.cirrus == 1 || BQA.dilatedCloud == 1) {
    cloudPresence = true 
  }
  return cloudPresence
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "0x" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

function palette(colour_length, min_value, max_value){
    let colourPairs = []
    let values = Array.from({length: colour_length}, (_, i) => min_value + (max_value - min_value) * i / (colour_length - 1));
    for (var idx = 0; idx < colour_length; idx++){
        var x = idx * 1.0/colour_length;
        
        // Convert RGB to hex
        let coulours = rgbToHex(Math.round(255*Math.sqrt(x)), 
                        Math.round(255*Math.pow(x,3)), 
                        Math.round(255*(Math.sin(2 * Math.PI * x)>=0?
                                      Math.sin(2 * Math.PI * x) :
                                      0 )))
        
        //Make pairs of colours
        colourPairs.push([values[idx], coulours.toString()])
       
    }
    return colourPairs
}
