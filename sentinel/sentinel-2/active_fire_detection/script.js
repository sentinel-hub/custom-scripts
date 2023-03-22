//Identify active fire points
//by Tiznger startup co
//www.tiznegar.com

//To increase the accuracy of altitude <3km Or zoom >12
//For Sentinel-2
//Cloud mask

var NGDR = index(B02, B03);
var Inverse = (B02 - 0.2) / (0.5 - 0.2);
//Fire indicator
var SAHM_INDEX= ((B12 - B11) / (B12 + B11));

if (Inverse > 1) { 
    return [0.5 * B04, 0.5 * B03, 20 * B02 ];
}

if (Inverse > 0 && NGDR>0) { 
    return [0.5 * B04  , 0.5 * B03, 20 * B02];
}

if((SAHM_INDEX>0.4)||(B12>1)){
  return[20*B04, 1*B03, 1*B02];
}

else {
 return [B04,B04,B04]
}

//Red color indicates active fire areas and points
//The blue range is a cloud mask