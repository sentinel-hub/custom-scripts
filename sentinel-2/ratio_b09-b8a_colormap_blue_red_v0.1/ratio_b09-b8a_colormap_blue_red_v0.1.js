// inspired by Custom script repository
// RGB Color coding of (B09 / B8A) ratio with RED-BLUE color table inspired by https://custom-scripts.sentinel-hub.com/sentinel-2/ndmi/
// B8A is used for (B09 / B8A) ratio computation as B8A spectral response is narrower than band B08
// Hollstein cloud detection is used to identify CLEAR land pixels https://custom-scripts.sentinel-hub.com/sentinel-2/hollstein/
// this visualization script works on L1C data
// naturalColour combination B04, B03, B02 with gain adapted to L1C TOA reflectance

//------------------------------------------------------------------------------------------		
// Continuous colour map inspired by Normalized Moisture Index script
//------------------------------------------------------------------------------------------

function S (a, b) {return a - b};
function R (a, b) {return a / b};

var naturalColour = [2.5*B04, 2.5*B03, 2.5*B02];
//var naturalColour = [2.5*B12, 2.5*B11, 2.5*B04]; // False color urban for snow

if (B8A == 0 || B09 == 0){
  return [0,0,0];
} 

else {

  var val = (B09 / B8A);
   
  var vmin = 0.0;
  var vmax = 1.0;
  var dv = vmax - vmin;
  
  var r = 0.0;
  var g = 0.0;
  var b = 0.0;

  var v = val;

  if (v < vmin){
    v = vmin;
  }
  
  if (v > vmax){
    v = vmax;
  }
  
  var l1 = 0.20;
  var l2 = 0.40;
  var l3 = 0.60;
  var l4 = 0.80;
  
  var level1 = (vmin + l1 * dv);
  var level2 = (vmin + l2 * dv);
  var level3 = (vmin + l3 * dv);
  var level4 = (vmin + l4 * dv);

// RGB Color coding of (B09 / B8A) ratio with RED-BLUE color table

  if (v < level1){
     r = 0.5 +  (v - vmin) / (level1 - vmin) / 2;
  } else if (v < level2) {
     r = 1;
     g = (v - level1) / (level2 - level1);
     b = 0;
  } else if (v < level3) {
     r = 1 + (level2 - v) / (level3 - level2);
     g = 1;
     b = (v - level2) / (level3 - level2);
  } else if (v < level4) {
     r = 0;
     g = 1 + (level3 - v) / (level4 - level3);
     b = 1;
  } else {
     b = 1.0 + (level4 - v) / (vmax - level4) / 2;
  }

  var CLEAR  = [r, g, b];
  var SHADOW = naturalColour;
  var WATER  = naturalColour;
  var CIRRUS = naturalColour;
  var CLOUD  = naturalColour;
  var SNOW   = naturalColour;

// Hollstein cloud detection used to identify CLEAR land pixels

return (B03 < 0.319)
? (B8A < 0.166)
    ? (S(B03,B07) < 0.027)
        ? (S(B09,B11) < -0.097) ? CLEAR : SHADOW
        : (S(B09,B11) < 0.021) ? WATER : SHADOW
    : (R(B02,B10) < 14.689)
        ? (R(B02,B09) < 0.788) ? CLEAR : CIRRUS
        : CLEAR
: (R(B05, B11) < 4.33)
    ? (S(B11, B10) < 0.255)
        ? (S(B06,B07) < -0.016) ? CLOUD : CIRRUS
        : (B01 < 0.3) ? CLEAR : CLOUD
    : (B03 < 0.525)
        ? (R(B01,B05) < 1.184) ? CLEAR : SHADOW
        : SNOW; 
}