//VERSION=3
//Author: Benjamin Kuo 
// S2L2A Enhancement using S3SLSTR F2
// This script uses a combination of two different satellites -- S2L2A and S3SLTR -- to better highlight areas burning due to wildfires. The way this script works is it adjusts the brightness of the S2L2A, true color image using a scaled value of the S3SLSTR F2 value, which increases the brightness of areas that are burning, and decreases the value of areas which are not burning.

function setup() {
  return {
    input: [
      {datasource: "S3SLSTR", bands:["F1","F2","S7"]},
      {datasource: "S2L2A", bands:["B12", "B8A", "B04","dataMask"]}],
    output: [
      {id: "default", bands: 3, sampleType: SampleType.AUTO}
    ]
  }
}


function evaluatePixel(samples) {
  var s1 = samples.S3SLSTR[0]
  var s2 = samples.S2L2A[0]
  let val = 320/s1.F2;


  let val2 = [s2.B12*val, s2.B8A*val, s2.B04*val,samples.dataMask];
  return val2;

}
