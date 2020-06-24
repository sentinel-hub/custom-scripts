//VERSION=3
function setup() {
  return {
    input: ["B04", "B08"],
    output: { bands: 1},
    mosaicking: "ORBIT"
  };
}

const msInDay = 24 * 60 * 60 * 1000;
const msInYear = 365.25 * msInDay;
const toleranceDays = 10;
const toleranceMs = toleranceDays * msInDay;

var metadata = undefined;

function filterScenes(scenes, inputMetadata) {
  scenes = scenes.sort((s1, s2) => s2.date - s1.date);
  const observed = scenes[0].date;
  var newScenes = [scenes[0]];
  for (var historical = observed - msInYear; historical >= inputMetadata.from - toleranceMs; historical -= msInYear) {
    newScenes.push(findClosest(scenes, historical));
  }
  newScenes = newScenes.filter(scene => scene != null);
  metadata = {
    observed: observed.toISOString(),
    historical: newScenes.slice(1).map(scene => scene.date.toISOString())
  }
  return newScenes;
}

function findClosest(scenes, date) {
  var closestDt = toleranceMs + 1, closestScene = null;
  for (var i = 0; i < scenes.length; i++) {
    const dt = Math.abs(scenes[i].date - date);
    if (dt < closestDt) {
      closestDt = dt;
      closestScene = scenes[i];
    }
  }
  return closestScene;
}

function percentileOfScore (data, value)  {
  // Calculate the percentile rank of a value relative to a list of values.

    if (!data.length) {return [0];}

    data.sort();

    let lowerCount = 0;
    let sameCount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i] < value) {
        lowerCount++;
      } else if (data[i] === value) {
        sameCount++;
      } else {
        break;
      }
    }

    return (lowerCount + 0.5 * sameCount) / data.length * 100;
}

function updateOutputMetadata(scenes, inputMetadata, outputMetadata) {
  outputMetadata.userData = metadata;
}

function evaluatePixel(samples, scenes) {
  const observed = index(samples[0].B08, samples[0].B04);
  var hist_ndvi = [];
  for (var i = 1; i < samples.length; i++) {
    const ndvi = index(samples[i].B08, samples[i].B04);
    hist_ndvi.push(ndvi);
  }

  return [percentileOfScore(hist_ndvi, observed) / 100];
}