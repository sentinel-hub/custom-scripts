//VERSION=3.Landslide_detection.UNSPIDER

//by Norma davila & Alexander Ariza

function setup() {
	return {
	  input: ["B02", "B03", "B04", "B08", "B11","CLM"],
	  output: { bands: 3 },
	  
	};
  }
  function stretch(val, min, max) {return (val - min) / (max - min);}
  function evaluatePixel(sample) {
	var bsi = ((sample.B11 + sample.B04)-(sample.B08 + sample.B02))/((sample.B11 + sample.B04)+(sample.B08 + sample.B02));
	var NDVI = index(sample.B08, sample.B04);
	var NDWI=index(sample.B03,sample.B08);
		  if (sample.CLM == 1) {
	  return [sample.B04,
			  sample.B03,
			  3*sample.B02]
  }
	
  if (NDWI > 0.15) {
   return [0, 0.2, 1.0*NDWI]
  }
  if((sample.B11>0.8)||(NDVI<0.15)){
	return[1.5,0.7,-1]
  }  
  if (NDVI>0.25){
	return [0 , 0.2*NDVI, 0]
  }
  else {
   return [3.5*bsi, 0.3, 0]
  }
  
  }