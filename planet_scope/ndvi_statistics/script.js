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


  
function evaluatePixel(samples) {
  
    let ndvi = (samples.NIR-samples.Red)/(samples.NIR+samples.Red);

    const indexVal = samples.dataMask === 1 ? ndvi : NaN;

const clear = samples.dataMask * samples.UDM2_Clear;

    let id_default = colorBlend(ndvi,  [0.0, 0.5, 1.0],
      [
        [1,0,0, samples.dataMask * samples.UDM2_Clear], 
        [1,1,0,samples.dataMask * samples.UDM2_Clear], 
        [0.1,0.31,0,samples.dataMask * samples.UDM2_Clear], 
      ])

      return {
        default: id_default,
        index: [indexVal],
        eobrowserStats: [indexVal, samples.UDM2_Clear],
        dataMask: [samples.dataMask],
      };

}
