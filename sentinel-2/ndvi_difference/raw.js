//VERSION=3
// Script to extract NDVI difference between the latest acquisition and the acquisition 10-day prior to the latest within a specified time range
// Returns raw (Float32) values
function setup() {
    return {
      input: [{
        bands: ["B04", "B08", "SCL", "dataMask"],
        units: "DN"
      }],
      output: {
        bands: 1,
        sampleType: SampleType.FLOAT32
      },
      mosaicking: Mosaicking.ORBIT
    }
    
  }
  
  function evaluatePixel(samples) {
    // ndvi difference
    let latest = samples[0];
    let prior = samples[1];
    let combinedMask = latest.dataMask * prior.dataMask;
    const diff = combinedMask === 1 ? index(latest.B08, latest.B04) - index(prior.B08, prior.B04) : NaN;
    return [diff];
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
    collections.scenes.orbits = [latest, closest];
    return collections
}
