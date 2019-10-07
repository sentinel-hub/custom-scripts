function setup (dss) {
  setInputComponents([dss.B04,dss.B08]);
  setOutputComponentCount(1);
}

//reference dekads to calculate min, max from
const dekadDays = 10;
const startMonth = 7;
const startDay = 1;
const startYear = 2015;
const endYear = 2018;

//the year for which we're interested in the same dekad
const observedYear = 2019;

function isInDekad(date, yearFrom, yearTo) {
  const year = date.getFullYear();  
  if (year < yearFrom || year > yearTo) {
    return false;
  }
  const from = new Date(year, startMonth, startDay);
  const to = new Date(year, startMonth, startDay+dekadDays);
  return from <= date && date <= to;
}

function filterScenes(scenes, inputMetadata) {
  return scenes.filter(scene => isInDekad(scene.date, startYear, endYear) || isInDekad(scene.date, observedYear, observedYear))
    .map(scene => { scene.observedDekad = isInDekad(scene.date, observedYear, observedYear); return scene; });
}

function evaluatePixel(samples, scenes) {
  var histMax = Number.NEGATIVE_INFINITY, histMin = Number.POSITIVE_INFINITY;
  var observed = Number.NaN;
  for (var i = 0; i < samples.length; i++) {
    const ndvi = index(samples[i].B08, samples[i].B04);
    if (scenes[i].observedDekad) {
      observed = ndvi;
      //TODO: if there are multiple sample in observed dekad, average them or take the one with least CC
    } else {
       histMax = Math.max(histMax, ndvi);
       histMin = Math.min(histMin, ndvi);
    }
  }
  var vci = (observed - histMin) / (histMax - histMin);
  return [vci];
  //TODO: rather than plain VCI, return off-colors where values are suspictious (eg no histMin available, or histMax very low)
}


