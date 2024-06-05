//VERSION=3
//Cloudless Mosaic with PlanetScope

function setup() {
  return {
    input: ["Red", "Green", "Blue", "dataMask", "UDM2_Clear"],
    output: { bands: 4 },
    mosaicking: "ORBIT"
  };
}

function preProcessScenes(collections) {
  collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
    var orbitDateFrom = new Date(orbit.dateFrom);
    return orbitDateFrom.getTime() >= (collections.to.getTime() - 7 * 24 * 3600 * 1000);
  });
  return collections;
}

function getLastObservation(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) { // optional check if you are sure all invalid observations are filtered out
      return arr[i];
    }
  }
  return 0;
}

function getMedian(sortedValues) {
  var index = Math.floor(sortedValues.length / 2);
  return sortedValues[index];
}

function evaluatePixel(samples, scenes) {
  var reds = []; var greens = []; var blues = []; //empty arrays for reds greens and blues
  var a = 0; //incrementer

  for (var i = 0; i < samples.length; i++) { //for each sample
    var sample = samples[i]; //get current sample
    var clear = 0 + (sample.dataMask * sample.UDM2_Clear); //0 for clouds OR datamask, 1 for neither

    if (clear === 1) { //if not clouds nor datamask 
      reds[a] = sample.Red; //assign values for that sample to the channel arrays
      blues[a] = sample.Blue;
      greens[a] = sample.Green;
      a = a + 1; //increment a to represent that at this specific pixel, a value was detected
    }
  }

  var rValue;
  var gValue;
  var bValue;

  if (a > 0) {
    rValue = getMedian(reds); // or call getLastObservation - which is less guaranteed to remove hazy images
    gValue = getMedian(greens);
    bValue = getMedian(blues);
    transparency = 1;
  } else {
    rValue = 1;
    gValue = 1;
    bValue = 1;
    transparency = 0;
  }
  return [(rValue / 3000), (gValue / 3000), (bValue / 3000), transparency];
}
