// high accuracy Detect active fire points 
//Sentinel-3 SLSTR
//by Tiznger startup co
//www.tiznegar.com

var SAHM= ((S6 - S5) / (S6 + S5));

if(SAHM>.05 && S1<.23){
  return[5*S3, 1*S2, 1*S1]
}

else {
 return [S6,S3,S2]
}

//Red color indicates active fire areas and points