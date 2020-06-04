// Soil Adjusted Vegetation Index  (abbrv. SAVI)
// General formula: (800nm - 670nm) / (800nm + 670nm + L) * (1 + L)
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=87
// Initialize parameters

let L = 0.428;
let index = (B08 - B04) / (B08 + B04 + L) * (1.0 + L);

/*
// using colorblend visualization  in EO browser 
return colorBlend   // Start of colorBlend function
(index,	            //  specify the index
     [ 0,0.1, 0.6, 1], //  specify the index borders
     [ [0.69,0.88,0.901],   // specify RGB colors 
       [0.74,0.72,0.42],
       [0, 0.39, 0], 
       [0, 0.50, 0],
     ]
);
*/

//using if statements visualization  in EO Browser
if (index <-1) return [0,0,0];
else if (index <0) return [0.69,0.88,0.901];
else if (index <0.09) return [0.74,0.72,0.42];
else if (index <0.1) return [0.64,0.8,0.35];
else if (index <0.2) return [0.57,0.75,0.32];
else if (index <0.3) return [0.6,0.8,0.19];
else if (index <0.4) return [0,0.50,0];
else if (index <0.5) return [0,0.39,0];
else if (index <0.6) return [0.17,0.41,0.18];
else if (index <0.7) return [0.18,0.54,0.34];
else if (index <0.8) return [0.19,0.43,0.11];
else if (index <1)   return [0.23,0.70,0.44];
else return [1,1,1];
