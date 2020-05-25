//VERSION=3
var setup = () => ({
  input: [
    {datasource: "s1grd", bands:["VV", "VH"]},
    {datasource: "s2l2a", bands:["B08", "B04", "CLM"], units: "REFLECTANCE"},
  ],
  output: [
    { id: "default", bands: 3, sampleType: SampleType.AUTO },
  ],
});

function toDb(linear) {
  // Convert the linear backscatter to DB (Filgueiras et al. (2019), eq. 3)
  return 10 * Math.LN10 * linear
};

function calc_s1_ndvi(sigmaVV, sigmaVH){
    // Convert sigma0 to Decibels
    let vh_Db = toDb(sigmaVH)
    let vv_Db = toDb(sigmaVV)

    // Calculate NRPB (Filgueiras et al. (2019), eq. 4)
    let NRPB = (vh_Db - vv_Db) / (vh_Db + vv_Db)

    // Calculate NDVI_nc with approach A3 (Filgueiras et al. (2019), eq. 14)
    let NDVInc = 2.572 - 0.05047 * vh_Db + 0.176 * vv_Db + 3.422 * NRPB

    return NDVInc
};


function evaluatePixel(samples, inputData, inputMetadata, customData, outputMetadata) {
  var s2 = samples.s2l2a[0];
  var s1 = samples.s1grd[0];
  
  // Calculate S2 NDVI
  let ndvi = index(s2.B08, s2.B04);
  
  // Calculate S1 NDVI
  let s1_ndvi = calc_s1_ndvi(s1.VV, s1.VH);
  
  // Create an NDVI visualiser
  var viz=new ColorMapVisualizer([[0.0,0xa50026],
                                  [0.1,0xd73027], [0.2,0xf46d43],
                                  [0.3,0xfdae61], [0.4,0xfee08b],
                                  [0.5,0xffffbf], [0.6,0xd9ef8b],
                                  [0.7,0xa6d96a], [0.8,0x66bd63],
                                  [0.9,0x1a9850], [1.0,0x006837]]);
  if (s2.CLM == 1) {
    // If clouds are present use S1 NDVI
    return {
      default: viz.process(s1_ndvi)
    }
  } else {
    // Otherwise use s2 NDVI
    return {
      default: viz.process(ndvi)
    }
  }
} 