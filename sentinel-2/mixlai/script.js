// Mix Leaf Area Index with Sentinel 2 Bands//

//Creat by: Dr.Hamid Rahimi//

var MixLAI = ((B08/(B04+B11))+(B08/(B04+B12)))/2.0; // calculate the index

return [MixLAI];