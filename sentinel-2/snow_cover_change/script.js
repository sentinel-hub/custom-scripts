//VERSION=3 (auto-converted from 1)
/*
Author: Karl Chastko
*/


function setup() {
  return {
    input: [{
      bands: [
          "B03",
          "B11"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


function calcNDSI(sample) {
  ndsi = (sample.B03 - sample.B11)/ (0.01 + sample.B03 + sample.B11);
  return ((ndsi>0.2)&(sample.B03>0.15)) ? (ndsi) : 0.0
}

function evaluatePixel(samples,scenes) {
  var avg1 = 0;
  var count1 = 0;
  var avg2 = 0;
  var count2 = 0;
  var avg3 = 0;
  var count3 = 0;
  var endMonth = scenes[0].date.getMonth();

  for (var i=0;i<samples.length;i++) {
      var ndvi = calcNDSI(samples[i]);
      if (scenes[i].date.getMonth()==endMonth)
      {
		avg3 = avg3 + ndvi;
        count3++;
      }
      else if (scenes[i].date.getMonth()==(endMonth-1))
      {
		avg2 = avg2 + ndvi;
        count2++;
      }
      else
      {
		avg1= avg1 + ndvi;
        count1++;
      }

  }
  avg1 = avg1/count1;
  avg2 = avg2/count2;
  avg3 = avg3/count3;

  return [avg1*5,avg2*5,avg3*5];

}
function filterScenes (scenes, inputMetadata) {
    return scenes.filter(function (scene) {
	  return scene.date.getTime()>=(inputMetadata.to.getTime()-3*31*24*3600*1000) ;
    });
}
