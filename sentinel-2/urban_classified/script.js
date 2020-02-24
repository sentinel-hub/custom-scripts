//Urban Classified Script
//by Monja Sebela

var NDWI=index(B03,B08); 
var NDVI=index(B08, B04);
var BareSoil=2.5 *((B11 + B04)-(B08 + B02))/((B11 + B04)+(B08 + B02));
 
if (NDWI > 0.2) {
 return [0, 0.5, 1]
}
if((B11>0.8)||(NDVI<0.1)){
  return[1,1,1]
}
if (NDVI>0.2){
  return [0, 0.3*NDVI, 0]
}
else {
 return [BareSoil, 0.2, 0]
}