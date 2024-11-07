//VERSION=3

// LST has two observations per day: 1h30 and 13h30 solar local time

const date = "2022-12-31"; // The date for which the backward average is calculated
const nDays = 20; // The number of days to load data for
const scaleFactor = 100; // The scale factor for the SWC values
const sensing_time = "0130"; // Observation time: "0130" or "1330" or ""
const variable = "LST"; // Variable of interest: "LST" or "LST_MaskedPixels"

function setup() {
  return {
    input: [variable, "dataMask"],
    output: { bands: 1, sampleType: "FLOAT32" },
    mosaicking: "TILE",
  };
}

// Select files based on sensing time (0130 or 1330) and within the last nDays
function preProcessScenes(collections) {
  var calculationDate = new Date(date);
  collections.scenes.tiles = collections.scenes.tiles.filter(function (tile) {
    var tileDate = new Date(tile.date);
    return (
      tile.dataPath.includes("T" + sensing_time) &&
      tileDate.getTime() >= calculationDate.getTime() - nDays * 24 * 3600 * 1000
    );
  });
  return collections;
}

function get_mean_lst_value(samples) {
  // Get the sum of all LST values
  let n_valid_dates = 0;
  let sum = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i].dataMask) {
      sum += samples[i].LST / scaleFactor;
      n_valid_dates += 1;
    }
  }

  // Calculate the mean LST value
  let mean_lst_value = NaN;
  if (n_valid_dates > 0) {
    mean_lst_value = sum / n_valid_dates;
  }

  return mean_lst_value;
}

function evaluatePixel(samples) {
  // When there are no dates, return no data
  if (samples.length == 0) return [NaN];

  // Calculate mean LST value
  const mean_lst_val = get_mean_lst_value(samples);

  return [mean_lst_val];
}
