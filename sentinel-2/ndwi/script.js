//Source: https://en.wikipedia.org/wiki/Normalized_difference_water_index

//option 1, used to monitor changes in water content of leaves, proposed by Gao
//http://ceeserver.cee.cornell.edu/wdp2/cee6150/Readings/Gao_1996_RSE_58_257-266_NDWI.pdf
var ndwi = (B08-B11)/(B08+B11);

//option 2, used to monitor changes related to water content in water bodies, using green and NIR wavelengths, defined by McFeeters (1996):
//var ndwi = (B03 - B08) / (B03 + B08);

if (ndwi < -0) {
  return colorBlend(-ndwi, [0,1], [[1,1,1],[0,0.5,0]]);
  
} else {
  return colorBlend(Math.pow(ndwi,0.25), [0,1], [[1,1,1],[0,0,0.8]]);
}

