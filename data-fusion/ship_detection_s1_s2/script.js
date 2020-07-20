//VERSION=3
//Ship detection with S1 and S2
//Author: Monja B. Šebela

var setup = () => ({
  input: [
    {datasource: "s2l1c", bands:["B02", "B03", "B04", "B08"], units: "REFLECTANCE", mosaicking: "ORBIT"},
    {datasource: "s1grd", bands:["VV", "VH"], units: "REFLECTANCE", mosaicking: "ORBIT"}
  ],
  output: [
    { id: "default", bands: 3, sampleType: SampleType.AUTO }
  ],
})

function evaluatePixel(samples, inputData, inputMetadata, customData, outputMetadata) {
 var S2L1C = samples.s2l1c[0]
 var S1 = samples.s1grd[0]
 let ndwi = (S2L1C.B03 - S2L1C.B08) / (S2L1C.B03 + S2L1C.B08)
 
 if ((ndwi > 0.1)&&((S1.VV > 0.3)||(S1.VH>0.3))) {
    return {
      default: [1,1,1]
    }
 }
 else if (ndwi > 0.1){
    return {
      default: [(4*S2L1C.B04)-0.2, (4*S2L1C.B03)-0.2, (5*S2L1C.B02)-0.2]
    }
 }
  
  let val = [(4*S2L1C.B04)-0.2, (4*S2L1C.B03)-0.2, (4*S2L1C.B02)-0.2];
  return {
    default: val
  }
}