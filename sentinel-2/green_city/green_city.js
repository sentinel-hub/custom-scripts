/*
Author of the script: Carlos Bentes
*/

// Normalized Difference Vegetation Index
var ndvi = (B08-B04)/(B08+B04);

// Threshold for vegetation
var veg_th = 0.4;

// Simple RGB
var R = 2.5*B04;
var G = 2.5*B03;
var B = 2.5*B02;

// Transform to Black and White
var Y = 0.2*R + 0.7*G + 0.1*B;
var pixel = [Y, Y, Y];

// Change vegetation color
if(ndvi >= veg_th)
  pixel = [0.1*Y, 1.8*Y, 0.1*Y];

return pixel;