//VERSION=3
function setup() {
  return {
    input: [{
        datasource: "S2L2A",
        bands: ["B08", "B03", "B04", "CLM", "CLP"]
      },
      {
        datasource: "S1GRD",
        bands: ["VV", "VH", "dataMask"]
      }
    ],
    output: { bands: 4 },
    mosaicking: "SIMPLE"
  };
}

function toDB(input){
  return 10 * Math.log(input)/Math.LN10;
}

function evaluatePixel(sample) {
  var S1 = sample.S1GRD[0];
  var S2 = sample.S2L2A[0];
  if (toDB(S1.VV) <= -15){
    return [S1.VV * 10, S1.VV * 10 , S1.VV * 50, 1];
  } else {
    const f = 2.5;
    return [f*S2.B08,f*S2.B08, f*S2.B08,1]
  }
}