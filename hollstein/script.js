function S (a, b) { return a - b };
function R (a, b) { return a / b };
var naturalColour = [3*B04, 3*B03, 3*B02];
var CLEAR  = naturalColour;
var SHADOW = naturalColour;
var WATER  = [0.1,0.1,0.7];
var CIRRUS = [0.8,0.1,0.1];
var CLOUD  = [0.3,0.3,1.0];
var SNOW   = [1.0,0.8,0.4];

return (B03 < 0.319)
? (B8A < 0.166)
    ? (S(B03,B07) < 0.027)
        ? (S(B09,B11) < -0.097) ? CLEAR : SHADOW
        : (S(B09,B11) < 0.021) ? WATER : SHADOW
    : (R(B02,B10) < 14.689)
        ? (R(B02,B09) < 0.788) ? CLEAR : CIRRUS
        : CLEAR
: (R(B05,B11) < 4.33)
    ? (S(B11, B10) < 0.255)
        ? (S(B06, B07) < -0.016) ? CLOUD : CIRRUS
        : (B01 < 0.3) ? CLEAR : CLOUD
    : (B03 < 0.525)
        ? (R(B01, B05) < 1.184) ? CLEAR : SHADOW
        : SNOW;
