//VERSION=3
//Multitemporal forest fire progression monitoring script utilizing a) Sentinel-2 data from 7 September 2019 for the visualization of burned areas
//and b) Sentinel-1 SAR data from 7 September and 12 September 2019 to monitor forest fire progression in overcast conditions.
//Author: Max Kampen

function setup() {
  return {
    input: [
      {datasource: "s1_t1", bands:["VH"]},                                  // S1 data from 7 September 2019 (t1)
      {datasource: "s1_t2", bands:["VV", "VH"]},                            // S1 data from 12 September 2019 (t2)
      {datasource: "l2a_t1", bands:["B03", "B04", "B08", "B11", "B12"]}],   // S2 data from 7 September 2019 (t1)
    output: [
      {id: "default", bands: 3, sampleType: SampleType.AUTO}
    ]
  };
}


function evaluatePixel(samples, inputData, inputMetadata, customData, outputMetadata) {
  var s1_1 = samples.s1_t1[0];     //Assigns S1 data from t1
  var s1_2 = samples.s1_t2[0];     //Assigns S1 data from t2
  var s2_1 = samples.l2a_t1[0];    //Assigns S2 data from t1

  // Calculate indices with S2 data from t1 for 'Burned Area Visualization' by Monja Sebela
  var NDWI = index(s2_1.B03, s2_1.B08);
  var NDVI = index(s2_1.B08, s2_1.B04);
  var INDEX = ((s2_1.B11 - s2_1.B12) / (s2_1.B11 + s2_1.B12))+(s2_1.B08);

  // Calculate difference in S1 VH backscatter between second (t2) and first scene (t1) (Belenguer-Plomer et al. 2019)
  var VH_diff = (s1_2.VH - s1_1.VH);

  // Set classification threshholds
  var thr_VH = 0.03;
  var thr_VH_diff = -0.015;
  var thr_VV = 0.2;

  if((NDWI > 0.15)||(NDVI > 0.35)||(INDEX > 0.2)){                   // If non-burned areas in S2 image from t1
    if ((s1_2.VH < thr_VH) & (VH_diff < thr_VH_diff)){               // are classified as burned in S1 image from t2 via threshholds for VH backscatter and the calculated difference layer
      return{default: [1,0,0]};                                       // Return red color
    }else{
      return{default: [2.5*s2_1.B12, 2.5*s2_1.B08, 2.5*s2_1.B04]};    // Else return SWIR composite
    }
  }else{
    if (s1_2.VV < thr_VV){              // Else, if already burnt area is also burned in S1 image from t2
      return{default:[0.9,0.9,0.7]};    // Return light yellow color
    }else{
      return{default:[0,0,1]};          // Else return blue for areas that are no longer burned in S1 image from t2
    }
  }
}
