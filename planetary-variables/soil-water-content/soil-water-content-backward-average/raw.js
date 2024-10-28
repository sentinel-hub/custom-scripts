//VERSION=3

const nDays = 20; // The number of days to load data for
const scaleFactor = 1000; // The scale factor for the SWC values

function setup() {
  return {
    input: ["SWC", "dataMask"],
    output: { bands: 1, sampleType: "FLOAT32" },
    mosaicking: "ORBIT",
  };
}

function preProcessScenes(collections) {
  collections.scenes.orbits = collections.scenes.orbits.filter(function (
    orbit
  ) {
    var orbitDateFrom = new Date(orbit.dateFrom);
    // Select all images within the last nDays
    return (
      orbitDateFrom.getTime() >=
      collections.to.getTime() - nDays * 24 * 3600 * 1000
    );
  });
  return collections;
}

function get_mean_swc_value(samples) {
  // Get the sum of all SWC values
  let n_valid_dates = 0;
  let sum = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i].dataMask) {
      sum += samples[i].SWC / scaleFactor;
      n_valid_dates += 1;
    }
  }

  // Calculate the mean SWC value
  let mean_swc_value = NaN;
  if (n_valid_dates > 0) {
    mean_swc_value = sum / n_valid_dates;
  }

  return mean_swc_value;
}

function evaluatePixel(samples) {
  // When there are no dates, return no data
  if (samples.length == 0) return [NaN];

  // Calculate mean SWC value
  const mean_swc_val = get_mean_swc_value(samples);

  return [mean_swc_val];
}
