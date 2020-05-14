//VERSION=3 (auto-converted from 1)
function setup() {
  return {
    input: [{
      bands: [
          "VV",
          "VH"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


function calcRVI(sample) {
  var denom = sample.VH*2+sample.VV*2;
  return ((denom!=0) ? (sample.VH*8) / denom : 0.0);
}
function  stretch(val, min, max)  {
 return (val-min)/(max-min);
}

function evaluatePixel(samples,scenes) {  
  var avg1 = 0.2;
  var count1 = 0;
  var avg2 = 0.2;
  var count2 = 0;
  var avg3 = 0.2;
  var count3 = 0;
  var endMonth = scenes[0].date.getMonth();
  
  for (var i=0;i<samples.length;i++) {
      var rvi  = calcRVI(samples[i]);
      if (scenes[i].date.getMonth()==endMonth)
      {
		avg3 = avg3 + rvi;
        count3++;
      }
      else if (scenes[i].date.getMonth()==(endMonth-1))
      {
		avg2 = avg2 + rvi;
        count2++;
      }
      else
      {      
		avg1= avg1 + rvi;
        count1++;
      }
      
  }
  avg1 = avg1/count1;
  avg2 = avg2/count2;
  avg3 = avg3/count3;
  avg1 = stretch(avg1, 0.25, 0.75);
  avg2 = stretch(avg2, 0.25, 0.75);
  avg3 = stretch(avg3, 0.25, 0.75);
  
  return [avg1,avg2,avg3];


}
function filterScenes (scenes, inputMetadata) {
    return scenes.filter(function (scene) {
	  return scene.date.getTime()>=(inputMetadata.to.getTime()-3*31*24*3600*1000) ;
    });
}

