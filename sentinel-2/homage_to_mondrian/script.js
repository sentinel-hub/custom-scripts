/*
Author: Matevz Pintar

Index limits for different colors, especially white 
and black, can be adjusted for prettier artistic effect.
*/

var NDVI = index (B08, B04); // calculate the index 

if (NDVI < 0.1) { 
  	return [1, 1, 1] // white
} 
if (NDVI < 0.2) { 
	return [0.8, 0.2, 0.] // nice red
} 
if (NDVI < 0.4) {
	return [0.2, 0.2, 1] // nice blue
}
if (NDVI < 0.6) {
	return [1., 0.7, 0.] // nice yellow
} 
else { 
	return [0, 0, 0] // black
}
