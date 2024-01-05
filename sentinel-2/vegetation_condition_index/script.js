//VERSION=3
function setup() {
    return {
      input: ["B04", "B08", "CLM", "dataMask"],
      output: { bands: 1 },
      mosaicking: "ORBIT"
    };
  }
  
  const NODATA = -32768;
  
  // tolerance in either direction, so i.e. +- 5 days
  const toleranceDays = 5;
  const msInDay = 24 * 60 * 60 * 1000;
  const msInYear = 365.25 * msInDay;
  const msInHalfYear = msInYear / 2
  const toleranceMs = toleranceDays * msInDay;
  
  var metadata = undefined;
  
  function relDiff(a, b) {
    const diff = Math.abs(a - b);
    return diff > msInHalfYear ? msInYear - diff : diff;
  }
  
  function datetimeToYearEpoch(date) {
    return date - new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
  }
  
  function sortDatesDescending(d1, d2) {
    const date1 = new Date(d1.dateFrom);
    const date2 = new Date(d2.dateFrom);
    return date2 - date1
  }
  
  function preProcessScenes(collections) {
    // sort
    let scenes = collections.scenes.orbits;
    scenes = scenes.sort(sortDatesDescending);
    let newScenes = [];
    // convert first scene to day of year
    const observed = new Date(scenes[0].dateFrom);
    const obsMs = datetimeToYearEpoch(observed)
    for (let i = 0; i < scenes.length; i++) {
      let currentDate = new Date(scenes[i].dateFrom);
      let sceneMs = datetimeToYearEpoch(currentDate)
      let dt = relDiff(obsMs, sceneMs)
      if (dt <= toleranceMs) {
        newScenes.push(scenes[i]);
      }
    }
  
    metadata = {
      observed: observed.toISOString(),
      historical: newScenes.slice(1).map(scene => scene.dateFrom)
    }
  
    collections.scenes.orbits = newScenes;
    return collections;
  }
  
  
  function updateOutputMetadata(scenes, inputMetadata, outputMetadata) {
    outputMetadata.userData = metadata;
  }
  
  function calcNDVI(sample) {
    return index(sample.B08, sample.B04);
  }
  
  function calcMaxMin(samples) {
    let ndvi = calcNDVI(samples[0])
    let max = ndvi;
    let min = ndvi;
    for (let i = 1; i < samples.length; ++i) {
      ndvi = calcNDVI(samples[i])
      if (ndvi > max) {
        max = ndvi;
      } else if (ndvi < min) {
        min = ndvi;
      }
    }
    return [max, min]
  }
  
  function isClear(sample) {
    return sample.CLM == 0 && sample.dataMask == 1;
  }
  
  function evaluatePixel(samples) {
    // if the first value isn't clear, stop
    if (!isClear(samples[0])) {
      return [NODATA]
    }
    const clearTs = samples.filter(isClear)
    const observed = index(clearTs[0].B08, clearTs[0].B04);
    let max = NODATA, min = NODATA, vci = NODATA;
    if (clearTs.length > 0) {
      [max, min] = calcMaxMin(clearTs);
      vci = (observed - min) / (max - min)
    }
  
    return [vci];
  }
  