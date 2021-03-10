  /*
Author of the script: Carlos Bentes
*/

// Normalized Difference Vegetation Index
var ndvi = (B3-B2)/(B3+B2);

// Threshold for vegetation
var veg_th = 0.4;

// Simple RGB
var R = B2/3000;
var G = B1/3000;
var B = B0/3000;

// Transform to Black and White
var Y = 0.2*R + 0.7*G + 0.1*B;
var pixel = [Y, Y, Y];

// Change vegetation color
if(ndvi >= veg_th)
  pixel = [0.1*Y, 1.8*Y, 0.1*Y];

return pixel;