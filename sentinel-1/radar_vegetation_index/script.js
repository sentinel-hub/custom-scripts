// Radar vegetation index for Sentinel-1 (RVI4S1) SAR data
// Institute: MRSLab, Indian Institute of Technology Bombay, India
// Data requirements: Sentinel-1 GRD data
let dop = (VV/(VV+VH)); //equivalent to complement of the degree of polarization
let m = 1 - dop;  
let value = (Math.sqrt(dop))*((4*(VH))/(VV+VH));  //depolarization within the vegetation 

//return [ value ] //Grayscale result

// Colour scale
return colorBlend // call the colorBlend function
(value, // Pixel value
[0, 0.1, 0.3, 0.5, 0.7, 0.9, 1.0], // Define the borders
[ [0, 0, 1], // Define the RGB colors for each border
[0.1,0.2,0.8],
[0.3, 0.5, 0.7],
[0.2, 1, 0.3],
[0.5, 0.8, 0.2],
[1, 0.4, 0],
[1, 0, 0],
]);