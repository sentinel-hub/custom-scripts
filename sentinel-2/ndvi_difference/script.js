//VERSION=3
// Script to extract NDVI difference between the latest acquisition and the acquisition 10-day prior to the latest within a specified time range
function setup() {
    return {
      input: [{
        bands: ["B04", "B08", "SCL", "dataMask"],
        units: "DN"
      }],
      output: [
        {id: "default", bands: 4},
        {id: "index", bands: 1, sampleType: "FLOAT32"},
        {id: "eobrowserStats", bands: 2, sampleType: "FLOAT32"},
        {id: "dataMask", bands: 1}
      ],
      mosaicking: Mosaicking.ORBIT
    }
    
  }
  
  function evaluatePixel(samples) {
    // ndvi difference
    let latest = samples[0];
    let prior = samples[1];
    let combineMask = latest.dataMask * prior.dataMask;
    const diff = combineMask === 1 ? index(latest.B08, latest.B04) - index(prior.B08, prior.B04) : NaN;
    
    // visualisation
    const ramps = [
        [-2, 0x000000],
        [2, 0xffffff]
    ]
    const visualizer = new ColorRampVisualizer(ramps);
    let imgVals = visualizer.process(diff);
    imgVals.push(combineMask)

    return {
        default: imgVals,
        index: [diff],
        eobrowserStats: [diff, isCloud(samples.SCL)?1:0],
        dataMask: [combineMask]
    };
  }

  function preProcessScenes (collections) {
    // sort from most recent to least recent
    collections.scenes.orbits = collections.scenes.orbits.sort(
      (s1, s2) => new Date(s2.dateFrom) - new Date(s1.dateFrom)
    );
    
    let scenes = collections.scenes.orbits;
    let latest;
    let closest;
    latest = closest = scenes[0];

    // timestamp of 10-day prior to latest acquisition
    let target = new Date(new Date(latest.dateFrom).getTime() - 10*24*3600*1000);

    // find closet timestamp to the target
    let diff = Number.POSITIVE_INFINITY;
    for (let i = 1; i < scenes.length; i++) {
      current = new Date(scenes[i].dateFrom);
      if (Math.abs(current - target) >= diff) {break;}
      diff = Math.abs(current - target);
      closest = scenes[i];
    }

    // filter collections to keep the latest acquisition and the closest acquisitions to the target
    collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
        var orbitDateFrom = orbit.dateFrom;
        return [latest.dateFrom, closest.dateFrom].includes(orbitDateFrom);
    })
    return collections
}

function isCloud (scl) {
    if (scl == 3) { // SC_CLOUD_SHADOW
      return false;
    } else if (scl == 9) { // SC_CLOUD_HIGH_PROBA
      return true; 
    } else if (scl == 8) { // SC_CLOUD_MEDIUM_PROBA
      return true;
    } else if (scl == 7) { // SC_CLOUD_LOW_PROBA
      return false;
    } else if (scl == 10) { // SC_THIN_CIRRUS
      return true;
    } else if (scl == 11) { // SC_SNOW_ICE
      return false;
    } else if (scl == 1) { // SC_SATURATED_DEFECTIVE
      return false;
    } else if (scl == 2) { // SC_DARK_FEATURE_SHADOW
       return false;
    }
    return false;
  }
