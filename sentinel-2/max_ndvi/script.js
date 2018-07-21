//Basic initialization setup function
function    setup (dss) {
//List of all bands, that will be used in the script, either for visualization or for choosing best pixel
  setInputComponents([dss.B04,dss.B03,dss.B02]);
//This can always be the same if one is doing RGB images
  setOutputComponentCount(3);
}

/*In this function we limit the scenes, which are used for processing. 
These are based also on input variables, coming from Playground. 
E.g. if one sets date "2017-03-01" ("TO date") and cloud coverage filter 30%, 
all scenes older than 2017-03-01 with cloud coverage 30% will be checked against
further conditions in this function.
The more scenes there are, longer it will take to process the data.
After 60 seconds of processing, there will be a timeout.
*/

function filterScenes (scenes, inputMetadata) {
    return scenes.filter(function (scene) {
//Here we limit data between "(TO date - 1 month) to (TO date)
      return scene.date.getTime()>=(inputMetadata.to.getTime()-31*24*3600*1000) ;
    });
}



function evaluatePixel(samples, scenes) {  
//initial set of min values, which is higher than any real data (10000)
  var minB02 = 200000.0;
  var minB03 = 200000.0;
  var minB04 = 200000.0;
  
  for (var i=0;i<samples.length;i++) {
//Finding "best" pixel value    
    if (samples[i].B02<minB02 && samples[i].B02>0.0) minB02=samples[i].B02;
    if (samples[i].B03<minB03 && samples[i].B03>0.0) minB03=samples[i].B03;
    if (samples[i].B04<minB04 && samples[i].B04>0.0) minB04=samples[i].B04;    
  }
//Return of R,G,B
  
  return [2.5*minB04,2.5*minB03,2.5*minB02];
}

