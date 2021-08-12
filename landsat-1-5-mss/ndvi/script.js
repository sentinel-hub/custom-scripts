//VERSION=3

function evaluatePixel(samples) {
  let ndvi = (samples.B04-samples.B02)/(samples.B04+samples.B02)
  
  if (ndvi<-1.1) return [0,0,0, samples.dataMask];
  else if (ndvi<-0.2) return [0.75,0.75,0.75, samples.dataMask];
  else if (ndvi<-0.1) return [0.86,0.86,0.86, samples.dataMask];
  else if (ndvi<0) return [1,1,0.88, samples.dataMask];
  else if (ndvi<0.025) return [1,0.98,0.8, samples.dataMask];
  else if (ndvi<0.05) return [0.93,0.91,0.71, samples.dataMask];
  else if (ndvi<0.075) return [0.87,0.85,0.61, samples.dataMask];
  else if (ndvi<0.1) return [0.8,0.78,0.51, samples.dataMask];
  else if (ndvi<0.125) return [0.74,0.72,0.42, samples.dataMask];
  else if (ndvi<0.15) return [0.69,0.76,0.38, samples.dataMask];
  else if (ndvi<0.175) return [0.64,0.8,0.35, samples.dataMask];
  else if (ndvi<0.2) return [0.57,0.75,0.32, samples.dataMask];
  else if (ndvi<0.25) return [0.5,0.7,0.28, samples.dataMask];
  else if (ndvi<0.3) return [0.44,0.64,0.25, samples.dataMask];
  else if (ndvi<0.35) return [0.38,0.59,0.21, samples.dataMask];
  else if (ndvi<0.4) return [0.31,0.54,0.18, samples.dataMask];
  else if (ndvi<0.45) return [0.25,0.49,0.14, samples.dataMask];
  else if (ndvi<0.5) return [0.19,0.43,0.11, samples.dataMask];
  else if (ndvi<0.55) return [0.13,0.38,0.07, samples.dataMask];
  else if (ndvi<0.6) return [0.06,0.33,0.04, samples.dataMask];
  else return [0,0.27,0, samples.dataMask];
}

function setup() {
  return {
    input: [{
      bands: [
        "B01",
        "B02",
        "B04",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}
