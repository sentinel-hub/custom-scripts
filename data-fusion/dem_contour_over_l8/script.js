//VERSION=3
//Author: Monja B. Šebela

function setup() {
  return {
  	input: [
    	{datasource: "L8L1C", bands:["B04", "B03", "B02"]},
    	{datasource: "DEM", bands:["DEM"]}],
  	output: [
    	{id: "default", bands: 3}
  	]
  };
}

function evaluatePixel(samples, inputData, inputMetadata, customData, outputMetadata){
    var L8 = samples.L8L1C[0]
    var DEMM = samples.DEM[0]
    var DEM = DEMM.DEM

    var d = DEM;
    if (d % 50 < 4) {
      return{
        default: [1,1,1]
      }
    }
    else{
      return{
        default: [(5*L8.B04)-0.2, (5*L8.B03)-0.2, (5*L8.B02)-0.2]
      }
    }
}
