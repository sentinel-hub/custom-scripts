//VERSION=3
//Author: Monja B. Šebela

function setup() {
  return {
    input: [
        {datasource: "s2l1c", bands:["B02", "B03", "B04", "B08", "B11"]},
        {datasource: "s1grd", bands:["VV", "VH"], orthorectify:"TRUE"},
        {datasource: "s2l2a", bands:["B02", "B03", "B04"]}
    ],
    output: [
        { id: "default", bands: 3}
    ]
}}

function evaluatePixel(samples) {
 var S2L1C = samples.s2l1c[0]
 var S2L2A = samples.s2l2a[0]
 var S1 = samples.s1grd[0]
 let ndvi = (S2L1C.B08 - S2L1C.B04) / (S2L1C.B08 + S2L1C.B04)
 let ndmi = (S2L1C.B08 - S2L1C.B11) / (S2L1C.B08 + S2L1C.B11)

   if (ndvi > 0.5) {
    return {
      default: [3*S2L2A.B04, 3*S2L2A.B03, 3*S2L2A.B02]
    }}
  if (ndmi > 0) {
    return {
      default: [3*S2L2A.B04, 3*S2L2A.B03, 4*S2L2A.B02]
    }
 }
  if ((S1.VH > 0.2)||(S1.VV > 0.2)) {
    return {
      default: [S1.VH*5.5, S1.VV, S1.VH*8]
    }}

  return {
    default: [3*S2L1C.B04-0.2, 3*S2L1C.B03-0.2, 3*S2L1C.B02-0.2]
  }
}
