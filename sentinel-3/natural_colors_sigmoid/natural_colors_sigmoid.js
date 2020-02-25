// This script provides a natural colour visualization of Sentinel-3 OLCI with a combination of bands B08, B06, B04.
// A modified sigmoid function is used in the gain formula to preserve some of the cloud brightness dynamic with a progressive saturation.
// TOA reflectance offsets are subtracted to red, green, blue bands to compensate for the Rayleigh diffusion.

// Lambda correspond to the steepness of the curve of the logistic/sigmoid function expressed as k in https://en.wikipedia.org/wiki/Logistic_function
// Lambda value of 7 is a compromise. 
// Lambda value can be adjusted to lower values (e.g. 3, 4, 5) to catch more of clouds brightness dynamic.
// Higher values of Lambda (e.g. 8, 9, 10) will result in brighter images more adapted to dark vegetated areas. Note that in this case clouds brightness will saturate.

var lambda = 7.0;
var RED_offset = 0.03;
var GREEN_offset = 0.05;
var BLUE_offset = 0.08;

var R = B08 - RED_offset;
var G = B06 - GREEN_offset;
var B = B04 - BLUE_offset;

if (R < 0) {R=0.0};
if (G < 0) {G=0.0};
if (B < 0) {B=0.0};

var RED = 2*(1/(1 + Math.exp(-lambda*R))-0.5);
var GREEN = 2*(1/(1 + Math.exp(-lambda*G))-0.5);
var BLUE = 2*(1/(1 + Math.exp(-lambda*B))-0.5);

var naturalColour = [RED, GREEN, BLUE];

return naturalColour;