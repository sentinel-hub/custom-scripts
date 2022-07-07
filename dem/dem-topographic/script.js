// DEM Topographic Visualization
//VERSION=3
function setup() {
  return {
    input: ["DEM"],
    output: { bands: 3 }
  };
}

function evaluatePixel(sample) {
  
  let val = sample.DEM;
  let imgVals = null;
  
  if (val>8000) imgVals = [1,1,1];
  else if (val>7000) imgVals = [0.95,0.95,0.95];
  else if (val>6000) imgVals = [0.9,0.9,0.9];  
  else if (val>5500) imgVals = [0.29,0.22,0.07];
  else if (val>5000) imgVals = [0.37,0.30,0.15];
  else if (val>4500) imgVals = [0.45,0.38,0.22];
  else if (val>4000) imgVals = [0.53,0.45,0.30];
  else if (val>3500) imgVals = [0.6,0.53,0.38];
  else if (val>3000) imgVals = [0.68,0.61,0.46];
  else if (val>2500) imgVals = [0.76,0.69,0.54];
  else if (val>2000) imgVals = [0.84,0.77,0.62];
  else if (val>1500) imgVals = [0.92,0.85,0.69];
  else if (val>1000) imgVals = [0.99,0.93,0.75];
  else if (val>900) imgVals = [0.67,0.87,0.63];
  else if (val>800) imgVals = [0.65, 0.84, 0.61];
  else if (val>700) imgVals = [0.59,0.81,0.56];  
  else if (val>600) imgVals = [0.52,0.76,0.48];
  else if (val>500) imgVals = [0.48, 0.73, 0.44];
  else if (val>400) imgVals = [0.45,0.70,0.40];
  else if (val>300) imgVals = [0.37,0.64,0.33];  
  else if (val>200) imgVals = [0.30,0.58,0.25];
  else if (val>100) imgVals = [0.24,0.53,0.24];
  else if (val>75) imgVals = [0.21,0.49,0.23];  
  else if (val>50) imgVals = [0.18,0.45,0.18];  
  else if (val>25)  imgVals = [0.15,0.41,0.13];
  else if (val>10) imgVals = [0.12,0.37,0.08];
  else if (val>0)  imgVals = [0.09,0.33,0.03];   
  else imgVals = [0.06,0.06,0.55];
  
  return imgVals;
}
