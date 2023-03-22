// Soil Adjusted Vegetation Index  (abbrv. SAVI)
// General formula: (800nm - 670nm) / (800nm + 670nm + L) * (1 + L)
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=87
// Initialize parameters

let L = 0.428; // L = soil brightness correction factor could range from (0 -1)
let index = (B08 - B04) / (B08 + B04 + L) * (1.0 + L); // calculate savi index

// using colorblend visualization  in EO browser 
return colorBlend   // Start of colorBlend function
(index,	            //  specify the index
     [ 0,0.1, 0.2,0.4, 0.5,0.7,1], //  specify the borders
     [ [0.69,0.88,0.90],   // specify RGB colors 
       [0.74,0.72,0.42],
       [0.60,0.80,0.20],
       [0.13, 0.54, 0.13],
       [0, 0.50, 0],
       [0, 0.39, 0],
       [0, 0.29, 0],
     ]
);

/*
//using if statements visualization  in EO Browser
if (index <-1) return [1,1,1]; // white color for values less than -1
else if (index <0) return [0.69,0.88,0.901]; // blue color majorly water
else if (index <0.09) return [0.74,0.72,0.42];  
else if (index <0.1) return [0.64,0.8,0.35]; 
else if (index <0.2) return [0.57,0.75,0.32];
else if (index <0.3) return [0.60,0.80,0.19];
else if (index <0.4) return [0.13,0.63,0.13];
else if (index <0.5) return [0.13,0.55,0.13];
else if (index <0.6) return [0,0.50,0];
else if (index <0.7) return [0,0.39,0];
else if (index <1) return   [0, 0.29,0]; 
else return [0,0,0];
*/
