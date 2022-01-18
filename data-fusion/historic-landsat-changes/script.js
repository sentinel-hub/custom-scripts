//VERSION=3
//Historic NDVI changes with Landsat 4-5 and Landsat 8
//Author: Monja B. Šebela

function setup() {
  return {
  	input: [
   	 {datasource: "landsat45", bands:["B04", "B03","dataMask"], mosaicking: "ORBIT"},
   	 {datasource: "landsat8", bands:["B05", "B04","B03","dataMask"], mosaicking: "ORBIT"}
  	],
  	output: [
   	 { id: "default", bands: 3, sampleType: SampleType.AUTO }
  	]
  };
}

function evaluatePixel(samples, inputData, inputMetadata, customData, outputMetadata) {
 var L8 = samples.landsat8[0]
 var L45 = samples.landsat45[0]
 let oldNDVI = (L45.B04 - L45.B03) / (L45.B04 + L45.B03)
 let newNDVI = (L8.B05 - L8.B04) / (L8.B05 + L8.B04)
 
 let val = [2*oldNDVI, 2*newNDVI, 2*oldNDVI];
 return {
    default: val
 }
}
