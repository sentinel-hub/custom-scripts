//VERSION=3

const nDays = 20;           // The number of days to load data for
const scaleFactor = 1000;   // The scale factor for the SWC values

function setup() {
    return {
      input: ["SWC", "dataMask"],
      output: { bands: 1, sampleType: "FLOAT32" },
      mosaicking: "ORBIT"
    };
  }
  
  function preProcessScenes(collections) {
    collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
      var orbitDateFrom = new Date(orbit.dateFrom)
      // Select all images within the last nDays
      return orbitDateFrom.getTime() >= (collections.to.getTime() - (nDays * 24 * 3600 * 1000));
    })
    return collections
  }
  
  function get_mean_swc_value(swc, dataMask) {
    // Get the sum of all SWC values
    let n_valid_dates = 0;
    let sum = 0;
    for (let i = 0; i < swc.length; i++) {
        if (dataMask[i]) {
            sum += swc[i];
            n_valid_dates += 1;
        }
    }
    
    // Calculate the mean SWC value
    let mean_swc_value = NaN
    if (n_valid_dates > 0) {
      mean_swc_value = sum / n_valid_dates;
    }
  
    return mean_swc_value;
  }

function evaluatePixel(samples) {
    // When there are no dates, return no data
    if (samples.length == 0) return [NaN, NaN, NaN, 0];

    // Extract SWC values and dataMask
    var swc  = samples.map(sample => sample.SWC / scaleFactor);
    var dataMask = samples.map(sample => sample.dataMask);

    // Calculate mean SWC value
    mean_swc_val = get_mean_swc_value(swc, dataMask);
   
    return [mean_swc_val];
  }
  
  