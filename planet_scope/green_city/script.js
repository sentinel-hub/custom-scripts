/*
Author of the script: Carlos Bentes
*/

// Normalized Difference Vegetation Index
var ndvi = (NIR - Red) / (NIR + Red);

// Threshold for vegetation
var veg_th = 0.4;

// Simple RGB
var R = Red / 3000;
var G = Green / 3000;
var B = Blue / 3000;

// Transform to Black and White
var Y = 0.2 * R + 0.7 * G + 0.1 * B;
var pixel = [Y, Y, Y];

// Change vegetation color
if (ndvi >= veg_th) {
  pixel = [0.1 * Y, 1.8 * Y, 0.1 * Y];
}

return pixel;
