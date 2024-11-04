//VERSION=3

// Set defaultVis to false to scale and set color_min and color_max values.
// LST has two observations per day: 1h30 and 13h30 solar local time

const date = "2022-12-31"; // The date for which the backward average is calculated
const nDays = 20; // The number of days to load data for
const scaleFactor = 100; // The scale factor for the SWC values
const defaultVis = true; // If true, the default visualization will be applied. If false, the color_min and color_max values will be used.
const color_min = 290; // The minimum value of the colormap. Default min: 263.
const color_max = 330; // The maximum value of the colormap. Default max: 340.
const sensing_time = "0130"; // Observation time: "0130" or "1330" or ""
const variable = "LST"; // Variable of interest: "LST" or "LST_MaskedPixels"

function setup() {
  return {
    input: [variable, "dataMask"],
    output: { id: "default", bands: 4 },
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

// Create color ramp 250 - 340 (full range)
const cmap = [
  [263, 0x000004],
  [266, 0x06051a],
  [270, 0x140e36],
  [274, 0x251255],
  [278, 0x3b0f70],
  [282, 0x51127c],
  [286, 0x641a80],
  [289, 0x782281],
  [293, 0x8c2981],
  [297, 0xa1307e],
  [301, 0xb73779],
  [305, 0xca3e72],
  [309, 0xde4968],
  [313, 0xed5a5f],
  [316, 0xf7705c],
  [320, 0xfc8961],
  [324, 0xfe9f6d],
  [328, 0xfeb77e],
  [332, 0xfecf92],
  [336, 0xfde7a9],
  [340, 0xfcfdbf],
];

// Updated color ramp based on color_min and color_max
function updateCMap(min, max) {
  const numIntervals = cmap.length;
  const intervalLength = (max - min) / (numIntervals - 1);
  for (let i = 0; i < numIntervals; i++) {
    cmap[i][0] = min + intervalLength * i;
  }
}

// Update the min max of color bar if defaultVis set to false
if (!defaultVis) updateCMap(color_min, color_max);

// Initialize the ColorRamp
const visualizer = new ColorRampVisualizer(cmap);

function evaluatePixel(samples) {
  // When there are no dates, return no data
  if (samples.length == 0) return [NaN, NaN, NaN, 0];

  // Calculate mean LST value
  const mean_lst_val = get_mean_lst_value(samples);

  // Set opacity to 0 if there is no valid data
  let opacity = 1;
  if (isNaN(mean_lst_val)) {
    opacity = 0;
  }

  // Apply colormap
  imgVals = visualizer.process(mean_lst_val);
  return [...imgVals, opacity];
}
