//VERSION=3

//Basic initialization setup function
function setup() {
  return {
    //List of all bands, that will be used in the script, either for visualization or for choosing best pixel
    input: [{
      bands: [
        "Red",
        "NIR"
      ]
    }],
    //This can always be the same if one is doing RGB images
    output: { bands: 4 },
    mosaicking: "ORBIT"
  }
}

/*
In this function we limit the scenes, which are used for processing. 
These are based also on input variables. 
E.g. if one sets date "2017-03-01" ("TO date") and cloud coverage filter 30%, 
all scenes older than 2017-03-01 with cloud coverage 30% will be checked against
further conditions in this function (in this function it is currently limited to 3 months).
The more scenes there are, longer it will take to process the data.
After 60 seconds of processing, there will be a timeout.
*/

function preProcessScenes(collections) {
  collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
    var orbitDateFrom = new Date(orbit.dateFrom)
    return orbitDateFrom.getTime() >= (collections.to.getTime() - 3 * 31 * 24 * 3600 * 1000);
  })
  return collections
}

function calcNDVI(sample) {
  var denom = sample.Red + sample.NIR;
  return ((denom != 0) ? (sample.NIR - sample.Red) / denom : NaN);
}
function evaluatePixel(samples) {
  var max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < samples.length; i++) {
    var ndvi = calcNDVI(samples[i]);
    max = ndvi > max ? ndvi : max;
  }
  let max_exists = 0;
  if (isFinite(max)) {
    max_exists = 1;
  }
  if (max < -1.1) { return [0, 0, 0, max_exists]; }
  else if (max < - 0.2) { return [0.75, 0.75, 0.75, max_exists]; }
  else if (max < - 0.1) { return [0.86, 0.86, 0.86, max_exists]; }
  else if (max < 0) { return [1, 1, 0.88, max_exists]; }
  else if (max < 0.025) { return [1, 0.98, 0.8, max_exists]; }
  else if (max < 0.05) { return [0.93, 0.91, 0.71, max_exists]; }
  else if (max < 0.075) { return [0.87, 0.85, 0.61, max_exists]; }
  else if (max < 0.1) { return [0.8, 0.78, 0.51, max_exists]; }
  else if (max < 0.125) { return [0.74, 0.72, 0.42, max_exists]; }
  else if (max < 0.15) { return [0.69, 0.76, 0.38, max_exists]; }
  else if (max < 0.175) { return [0.64, 0.8, 0.35, max_exists]; }
  else if (max < 0.2) { return [0.57, 0.75, 0.32, max_exists]; }
  else if (max < 0.25) { return [0.5, 0.7, 0.28, max_exists]; }
  else if (max < 0.3) { return [0.44, 0.64, 0.25, max_exists]; }
  else if (max < 0.35) { return [0.38, 0.59, 0.21, max_exists]; }
  else if (max < 0.4) { return [0.31, 0.54, 0.18, max_exists]; }
  else if (max < 0.45) { return [0.25, 0.49, 0.14, max_exists]; }
  else if (max < 0.5) { return [0.19, 0.43, 0.11, max_exists]; }
  else if (max < 0.55) { return [0.13, 0.38, 0.07, max_exists]; }
  else if (max < 0.6) { return [0.06, 0.33, 0.04, max_exists]; }
  else { return [0, 0.27, 0, max_exists]; }
}