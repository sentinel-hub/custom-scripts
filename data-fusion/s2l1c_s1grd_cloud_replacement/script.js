// VERSION=3
// SAR data substitution for clouded Sentinel-2 images V1.0.0
// Twitter: Pierre Markuse (@pierre_markuse)
// CC BY 4.0 International - https://creativecommons.org/licenses/by/4.0/

var setup = () => ({
  input: [
    {datasource: "S2L1C", bands:["B02", "B03", "B04","CLM", "CLP"], units: "REFLECTANCE", mosaicking: "ORBIT"},
    {datasource: "S1GRD", bands:["VV", "VH"], units: "REFLECTANCE", mosaicking: "ORBIT"},
  ],
  output: [
    { id: "default", bands: 3, sampleType: SampleType.AUTO }
  ],
})

function evaluatePixel(samples, inputData, inputMetadata, customData, outputMetadata) {
 var S2L1C = samples.S2L1C[0];
 var S1 = samples.S1GRD[0];
 let SI = 54272; // Yes, I'm that old...
 let WAT = 25; // Water Threshold for SAR
 let CLP = S2L1C.CLP / 2.55; // Cloud Propability
 let CLPT = 70; // Cloud Propabilty Threshold in percent



if ( (CLP > CLPT && S1.VV/S1.VH <= WAT))
 {
    return {
      default: [S1.VV*3.0,S1.VV*1.1+S1.VH*8.75,S1.VH*1.75]
    }}

  if ( (CLP > CLPT && S1.VV/S1.VH > WAT))
 {
    return {
      default: [S1.VV*1,S1.VV*8,0.5+S1.VV*3+S1.VH*2000]
    }}


    let val = [3*S2L1C.B04, 3*S2L1C.B03, 3*S2L1C.B02];
  return {
    default: val
  }
}
