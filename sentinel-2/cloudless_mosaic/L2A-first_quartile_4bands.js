//VERSION=3
function setup() {
  return {
    input: [{
      bands: [
        "B04",
        "B03",
        "B02",
        "B08",
        "SCL"
      ],
      units: "DN"
    }],
    output: {
      bands: 4,
      sampleType: SampleType.UINT16
    },
    mosaicking: "ORBIT"
  }
}
function filterScenes (scenes, inputMetadata) {
    return scenes.filter(function (scene) {
       return scene.date.getTime()>=(inputMetadata.to.getTime()-12*31*24*3600*1000);
    });
}
function getValue(values) {
   values.sort( function(a,b) {return a - b;} );
   return getFirstQuartile(values);
}

function getFirstQuartile(sortedValues) { 
   var index = Math.floor(sortedValues.length / 4);
   return sortedValues[index];
}
function getDarkestPixel(sortedValues) {
   return sortedValues[0]; // darkest pixel
}
function validate (samples) {
  var scl = samples.SCL;
  
  if (scl === 3) { // SC_CLOUD_SHADOW
    return false;
  } else if (scl === 9) { // SC_CLOUD_HIGH_PROBA
    return false; 
  } else if (scl === 8) { // SC_CLOUD_MEDIUM_PROBA
    return false;
  } else if (scl === 7) { // SC_CLOUD_LOW_PROBA
    // return false;
  } else if (scl === 10) { // SC_THIN_CIRRUS
    return false;
  } else if (scl === 11) { // SC_SNOW_ICE
    return false;
  } else if (scl === 1) { // SC_SATURATED_DEFECTIVE
    return false;
  } else if (scl === 2) { // SC_DARK_FEATURE_SHADOW
    // return false;
  }
  return true;
}

function evaluatePixel(samples, scenes) {
  var clo_b02 = [];var clo_b03 = [];
  var clo_b04 = [];var clo_b08 = [];
  var clo_b02_invalid = [];var clo_b03_invalid = [];
  var clo_b04_invalid = [];var clo_b08_invalid = [];
  var a = 0;
  var a_invalid = 0;
  
  for (var i = 0; i < samples.length; i++) {
    var sample = samples[i];
    if (sample.B02 > 0 && sample.B03 > 0 && sample.B04 > 0 && sample.B08 > 0) {
      var isValid = validate(sample);
      
      if (isValid) {
        clo_b02[a] = sample.B02;
        clo_b03[a] = sample.B03;
        clo_b04[a] = sample.B04;
        clo_b08[a] = sample.B08;
        a = a + 1;
      } else {
        clo_b02_invalid[a_invalid] = sample.B02;
        clo_b03_invalid[a_invalid] = sample.B03;
        clo_b04_invalid[a_invalid] = sample.B04;
        clo_b08_invalid[a_invalid] = sample.B08;
        a_invalid = a_invalid + 1;
      }
    }
  }
  
  var rValue;
  var gValue;
  var bValue;
  var nValue;
  if (a > 0) {
    rValue = getValue(clo_b04);
    gValue = getValue(clo_b03);
    bValue = getValue(clo_b02);
    nValue = getValue(clo_b08);
  } else if (a_invalid > 0) {
    rValue = getValue(clo_b04_invalid);
    gValue = getValue(clo_b03_invalid);
    bValue = getValue(clo_b02_invalid);
    nValue = getValue(clo_b08_invalid);
  } else {
    rValue = 0;
    gValue = 0;
    bValue = 0;
    nValue = 0;
  }
  return [rValue, gValue, bValue, nValue]
}
