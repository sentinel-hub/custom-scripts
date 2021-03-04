
//simplified operational index
let ndvi = (B08-B04)/(B08+B04)
let kNDVI_simple = Math.tanh(Math.pow(ndvi,2)); 

//
let 
let sigma = 0.5*(B08 + B04)
let kNDVI = Math.tanh(Math.pow(((B08-B04)/(2*sigma)),2))


return [kNDVI]
//return[sigma]

//https://advances.sciencemag.org/content/7/9/eabc7447
// https://advances.sciencemag.org/content/advances/suppl/2021/02/22/7.9.eabc7447.DC1/abc7447_SM.pdf
//higher σ are automatically selected for bare soils.
