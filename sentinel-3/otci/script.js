// Sentinel-3 OTCI - OLCI terrestrial chlorophyll index
var OTCI = (B12 - B11) / (B11 - B10);
return colorBlend   
    (OTCI,	            
        [ 0, 1, 1.8, 2.5, 4, 4.5, 5], 
        [     
            [0, 0, 0.5],
            [0, 0.3, 0.8],
            [1, 0.2, 0.2],
            [1, 0.9, 0],
            [0, 0.8, 0.1],
            [0, 0.6,0.2],
            [1, 1, 1],
      ]);

