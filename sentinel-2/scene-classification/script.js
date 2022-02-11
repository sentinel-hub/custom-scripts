//VERSION=3

 function RGBToColor (r, g, b,dataMask){
	return [r/255, g/255, b/255,dataMask];
}

function setup() {
   return {
    input: ["SCL","dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(samples) {
    const SCL=samples.SCL;
    switch (SCL) {
    // No Data (Missing data) - black   
    case 0: return RGBToColor (0, 0, 0,samples.dataMask);
        
    // Saturated or defective pixel - red 
    case 1: return RGBToColor (255, 0, 0,samples.dataMask);

    // Topographic casted shadows ("Dark features / Shadows" for data before 2022-01-25) - very dark grey
    case 2: return RGBToColor (47,  47,  47,samples.dataMask);
        
    // Cloud shadows - dark brown
    case 3: return RGBToColor (100, 50, 0,samples.dataMask);
        
    // Vegetation - green
    case 4: return RGBToColor (0, 160, 0,samples.dataMask);
        
    // Not-vegetated - dark yellow
    case 5: return RGBToColor (255, 230, 90,samples.dataMask);
        
    // Water (dark and bright) - blue
    case 6: return RGBToColor (0, 0, 255,samples.dataMask);
    
    // Unclassified - dark grey
    case 7: return RGBToColor (128, 128, 128,samples.dataMask);
    
    // Cloud medium probability - grey
    case 8: return RGBToColor (192, 192, 192,samples.dataMask);
        
    // Cloud high probability - white
    case 9: return RGBToColor (255, 255, 255,samples.dataMask);
    
    // Thin cirrus - very bright blue
    case 10: return RGBToColor (100, 200, 255,samples.dataMask);
        
    // Snow or ice - very bright pink
    case 11: return RGBToColor (255, 150, 255,samples.dataMask);

    default : return RGBToColor (0, 0, 0,samples.dataMask);  
    }
}
