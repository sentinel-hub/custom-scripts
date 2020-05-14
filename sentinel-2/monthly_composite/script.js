//VERSION=3 (auto-converted from 1)
/*
Author: Karasiak Nicolas
*/

// Put 3 to have synthesis of the last 90 days
var numberOfMonthsToUse = 1;
// Thresold to consider pixel as snow
var NDSIthresold = 0.2;
// In order to dismiss snow from water
var redThresold = 0.2;
// In order to dismiss clouds
var blueThresold = 0.12;
var highBlueThresold = 0.45;

var numberOfTimesForWater = 2; // minimum number of times to identify as water

var stretchMin = 0;
var stretchMax = 1;

function setup() {
  return {
    input: [{
      bands: [
          "B02",
          "B03",
          "B04",
          "B05",
          "B08",
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

function NDWI(sample) {
    return ((sample.B03 - sample.B08) / (sample.B03 + sample.B08));

}

function median(values) {
    // from https://stackoverflow.com/questions/45309447/calculating-median-javascript
    if (values.length === 0) return 0;
    if (values.length === 1) return values[0];

    values.sort(function(a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);
    return values[half];
}

function r(a, b) {
    return (a / b);
}

function stretch(val, min, max) {
    return (val - min) / (max - min);
}

function indexOfMaxRatio(a, b) {
    ratios = [];
    for (i = 0; i < a.length; i++) {
        ratios.push(r(a[i], b[i]));
    }
    if (ratios.length === 0) {
        return -1;
    }

    var max = ratios[0];
    var maxIndex = 0;

    for (var i = 1; i < ratios.length; i++) {
        if (ratios[i] > max) {
            maxIndex = i;
            max = ratios[i];
        }
    }

    return maxIndex;
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
    let B05 = [];
    let B08 = [];

    // for high blue scenes
    let highB02 = [];
    let highB03 = [];
    let highB04 = [];
    let highB05 = [];
    let highB08 = [];

    // isWater
    let isWater = 0;

    // to manage image length between tiles
    let realSampleLength = 0;

    for (i = 0; i < samples.length; i++) {
        // in order to avoid black pixel (the ones between tiles)
        if ((samples[i].B02 > 0) & (samples[i].B03 > 0)) {
            realSampleLength++;
            if (samples[i].B02 < blueThresold) {
                B02.push(samples[i].B02);
                B03.push(samples[i].B03);
                B04.push(samples[i].B04);
                B05.push(samples[i].B05);
                B08.push(samples[i].B08);
            } else if ((samples[i].B02 < highBlueThresold) & (samples[i].B02 > blueThresold)) {
                highB02.push(samples[i].B02);
                highB03.push(samples[i].B03);
                highB04.push(samples[i].B04);
                highB05.push(samples[i].B05);
                highB08.push(samples[i].B08);
            }
            if ((NDSI(samples[i]) > NDSIthresold) & (samples[i].B04 > redThresold)) {
                snowyCount++;
                snowB02.push(samples[i].B02);
                snowB03.push(samples[i].B03);
                snowB04.push(samples[i].B04);
            }
            if ((samples[i].B02 < blueThresold) & (NDWI(samples[i]) > 0)) {
                isWater++;
            }
        }
    }
    if ((B02.length > 0)) {
        if (isWater > 2) {
            bestRatio = indexOfMaxRatio(B02, B08);
        } else {
            bestRatio = indexOfMaxRatio(B08, B03);
        }
        colorMap = [stretch((2.8 * B04[bestRatio] + 0.1 * B05[bestRatio]), stretchMin, stretchMax), stretch((2.8 * B03[bestRatio] + 0.15 * B08[bestRatio]), stretchMin, stretchMax), stretch((2.8 * B02[bestRatio]), stretchMin, stretchMax)];
    } else if ((highB02.length > 0) & (B02.length < 1)) {
        if (isWater > 2) {
            bestRatio = indexOfMaxRatio(B02, B08);
        } else {
            bestRatio = indexOfMaxRatio(highB03, highB02);
        }
        colorMap = [stretch((2.8 * highB04[bestRatio] + 0.1 * highB05[bestRatio]), stretchMin, stretchMax), stretch((2.8 * highB03[bestRatio] + 0.15 * highB08[bestRatio]), stretchMin, stretchMax), stretch((2.8 * highB02[bestRatio]), stretchMin, stretchMax)];
    } else if ((snowyCount > 0) & (highB02.length < 1) & (B02.length < 1)) {
        // snowColorMap
        colorMap = [1.1 * median(snowB04), 1.3 * median(snowB03), 1.1 * median(snowB02)];
    } else {
        colorMap = [1, 0, 0];
    }

    return colorMap;
}

function filterScenes(scenes, inputMetadata) {
    return scenes.filter(function(scene) {
        return scene.date.getTime() >= (inputMetadata.to.getTime() - (numberOfMonthsToUse * 31 * 24 * 3600 * 1000));
    });
}
