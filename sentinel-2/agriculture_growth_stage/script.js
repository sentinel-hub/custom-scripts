//VERSION=3 (auto-converted from 1)
/*
Source: @HarelDan - https://github.com/hareldunn/GIS_Repo/blob/master/Multi-Temporal%20NDVI%20for%20Sentinel%20Hub%20Custom%20Scripts
Visualizing NDVI multi-temporal trends in Sentinel-2 imagery.
Copy into Sentinel-Hub Playground 
will take the current image as baseline and calculate average NDVI for the previous 2 months
Based on:
https://twitter.com/sentinel_hub/status/922813457145221121
https://twitter.com/sentinel_hub/status/1020755996359225344
Script requires multi-temporal processing so parameter TEMPORAL=true should be added to the request.
*/

function setup() {
  return {
    input: [{
      bands: [
          "B04",
          "B08"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


function calcNDVI(sample) {
  var denom = sample.B04+sample.B08;
  return ((denom!=0) ? (sample.B08-sample.B04) / denom : 0.0);
}
function  stretch(val, min, max)  {
 return (val-min)/(max-min);
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
      var ndvi = calcNDVI(samples[i]);
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
  avg1 = stretch(avg1, 0.1, 0.7);
  avg2 = stretch(avg2, 0.1, 0.7);
  avg3 = stretch(avg3, 0.1, 0.7);
  
  return [avg1,avg2,avg3];


}
function filterScenes (scenes, inputMetadata) {
    return scenes.filter(function (scene) {
	  return scene.date.getTime()>=(inputMetadata.to.getTime()-3*31*24*3600*1000) ;
    });
}
