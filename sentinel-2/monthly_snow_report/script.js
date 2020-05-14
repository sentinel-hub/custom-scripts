//VERSION=3 (auto-converted from 1)
/*
Source: @nkarasiak / www.karasiak.net

Monthly snow report.
Tired of waiting the perfect image with no cloud to show the snow cover ? This monthly snow report is here for you.
This script will find where the snow is persistent within the last 31 days (from chosen date).
In order to well represent the land-cover, the script will store each pertinent date in a list and will represents the median value.

This sentinel-2 script voluntarily color in green the image to better differentiate the snow from the other land-cover.

Script requires multi-temporal processing.
*/

// Put 3 to have synthesis of the last 3 months
var numberOfMonthsToUse = 1;
// Thresold to consider pixel as snow
var NDSIthresold = 0.20;
// In order to dismiss snow from water
var redThresold = 0.2;
// In order to dismiss clouds
var blueThresold = 0.18;

function setup() {
  return {
    input: [{
      bands: [
          "B02",
          "B03",
          "B04",
          "B11"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


function NDSI(sample) {
    return ((sample.B03 - sample.B11) / (0.01 + sample.B03 + sample.B11));
}

function median(values) {
    // from https://stackoverflow.com/questions/45309447/calculating-median-javascript
    if (values.length === 0) return 0;

    values.sort(function(a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}

function evaluatePixel(samples, scenes) {
    // for snow scene
    let snowyCount = 0;
    let snowB02 = [];
    let snowB03 = [];
    let snowB04 = [];

    // for unsnow scene
    let B02 = [];
    let B03 = [];
    let B04 = [];

    // to manage image length between tiles
    realSampleLength = 0;

    for (i = 0; i < samples.length; i++) {
        // in order to avoid black pixel (the ones between tiles)

        if ((samples[i].B02 > 0) || (samples[i].B03 > 0)) {
            realSampleLength++;

            // found snow
            if ((NDSI(samples[i]) > NDSIthresold) & (samples[i].B04 > redThresold)) {
                snowyCount++;
                snowB02.push(samples[i].B02);snowB03.push(samples[i].B03);snowB04.push(samples[i].B04);
            }
            // maybe it is snowy but clouds...
            // so count as snow but not memorizing pixel values.
            else if ((samples[i].B02 > blueThresold) & (samples[i].B04 > redThresold)) {
                snowyCount++;
            }
            // not snow
            else if (samples[i].B02 < blueThresold) {
                B02.push(samples[i].B02);B03.push(samples[i].B03);B04.push(samples[i].B04);
            }
        }
    }

    if ((snowB02 == 0) & (B02.length == 0)) {
        // no valid data available : dark green color
        colorMap = [.05,.2,.05];
    } else if ((snowyCount == realSampleLength) || (B02.length<1)) {
        // snowColorMap
        colorMap = [1.1 * median(snowB04), 1.3 * median(snowB03), 1.1 * median(snowB02)];
    } else if (B02.length >= 1) {
        // defaultColorMap
        colorMap = [1.5 * median(B04), 2.5 * median(B03), 1.5 * median(B02)];
    }

    return colorMap;
}

function filterScenes(scenes, inputMetadata) {
    return scenes.filter(function(scene) {
        return scene.date.getTime() >= (inputMetadata.to.getTime() - (numberOfMonthsToUse * 31 * 24 * 3600 * 1000));
    });
}
