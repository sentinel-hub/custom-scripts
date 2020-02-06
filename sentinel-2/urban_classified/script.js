//Burned Area visualization
//by Monja Sebela

var NDWI=index(B03,B08); 
var NDVI=index(B08, B04);
var INDEX= ((B11 - B12) / (B11 + B12))+(B08);
 

if((INDEX>0.15)||(NDVI>0.3)||(NDWI > 0.1)){
  return[2.5*B04, 2.5*B03, 2.5*B02]
}
else {
 return [1,0,0]
}

