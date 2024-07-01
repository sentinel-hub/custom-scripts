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
    output: { bands: 1 },
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
  return [max];
}