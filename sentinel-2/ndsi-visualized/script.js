//VERSION=3
//Reference: https://earth.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm

let viz = new Identity();

function setup() {
  return {
    input: ["B03", "B11","B04","B02","dataMask"],
     output: [
       { id: "default", bands: 4 },
       { id: "index", bands: 1, sampleType: "FLOAT32" }
     ]
  };
}

function evaluatePixel(samples) {
    let val = index(samples.B03, samples.B11);
  	let imgVals = null;
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;
  
    if (val>0.42) 
      imgVals = [0,0.8,1,samples.dataMask];
    else 
      imgVals = [2.5*samples.B04, 2.5*samples.B03,2.5*samples.B02,samples.dataMask];
	
  	return {
      default: imgVals,
      index: [indexVal] 
    };
}
