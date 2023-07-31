//VERSION=3
//NDVI

function setup() {
  return {
    input: [{
      bands: [
        "Red",
        "NIR",
        "dataMask", 
        "UDM2_Clear"
      ]
    }],
    output:  [
      { id: "default", bands: 4 },
      { id: "index", bands: 1, sampleType: "FLOAT32" },
      { id: "eobrowserStats", bands: 2, sampleType: "FLOAT32" },
      { id: "dataMask", bands: 1 },
    ]
  }
}


function isClear (udm2_clear) {
  if (udm2_clear == 0)  {
    return false;
  }
  else {
    return true;
  }
}
  
function evaluatePixel(samples) {
  
    let ndvi = (samples.NIR-samples.Red)/(samples.NIR+samples.Red);

    const indexVal = samples.dataMask === 1 ? ndvi : NaN;

    const clear = isClear(samples.UDM2_Clear)?0:1

    let id_default = colorBlend(ndvi,  [0.0, 0.5, 1.0],
      [
        [1,0,0, samples.dataMask * samples.UDM2_Clear], 
        [1,1,0,samples.dataMask * samples.UDM2_Clear], 
        [0.1,0.31,0,samples.dataMask * samples.UDM2_Clear], 
      ])

      return {
        default: id_default,
        index: [indexVal],
        eobrowserStats: [indexVal, clear],
        dataMask: [samples.dataMask],
      };

}
