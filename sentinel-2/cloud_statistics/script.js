//VERSION=3
function setup() {
  return {
  // The script can be adapted for S2L1C by removing the "SCL" band
    input: ["CLM", "SCL", "dataMask"],
    output: { bands: 4 },
    mosaicking: "ORBIT"
  };
}

function isNotCloudy(smp) {
  // Check if cloud using s2cloudless and scene classification
  let clm = smp.CLM;
  let scl = smp.SCL;

  if (clm == 1){
    // s2cloudless
    return false;
  } else if (scl == 1 || scl == 3 || scl == 8 || scl == 9 || scl == 10){
    // saturated/defective, cloud shadow, cloud medium probability,
    // cloud high probability, cirrus
    return false;
  } else {
    return true;
  }
}

function evaluatePixel(samples) {
  var noOfClearPx = 0;
  var noOfSamples = 0;

  // Loop over available samples (images)
  for (i=0;i<samples.length;i++)
  {
	//If there is no value available, we avoid further count
    if (!samples[i].dataMask) continue;
     noOfSamples++;

    //Criteria for cloudless pixel
    if (
      isNotCloudy(samples[i])
     ) noOfClearPx++;
  }

  //transparent if there is no data
  if (noOfSamples==0) return [0,0,0,0];

  // Ratio of non-cloudy pixels
  var avg = noOfClearPx / noOfSamples;

  // Color scheme for visualisation
  var color= colorBlend(avg,
   [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0 ],
   [
    [0/255,0,0/255],        //  -> 0 = #000000
    [141/255,0/255,0/255],   //  -> .1 = #8D0000
    [219/255,36/255,36/255],  //  -> .2 = #DB2424
    [236/255,125/255,0/255],  //  -> .3 = #EC7D00
    [236/255,199/255,0/255], //  -> .4 = #ECC700
    [111/255,161/255,32/255], //  -> .5 = #6FA120
    [75/255,126/255,39/255], //  -> .6 = #4B7E27
    [72/255,168/255,146/255], //  -> .7 = #48A892
    [63/255,142/255,185/255],  //  -> .8 = #3F8EB9
    [133/255,78/255,144/255],   //  -> .9 = #854EA4
    [85/255,34/255,115/255]         //  -> 1.0 = #552273
   ]);

  return[color[0],color[1],color[2],1];
}
