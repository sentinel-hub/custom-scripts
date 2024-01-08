// tolerance in either direction, so i.e. +- 5 days
const toleranceDays = 0;
// night or daytime temp
const sensingTime = "1330"; // "0130" or "1330" or ""

const NODATA = NaN;
const band = "LST";

function setup() {
    return {
        input: [band, "dataMask"],
        output: { bands: 1, sampleType: "FLOAT32" },
        mosaicking: "TILE",
    };
}

const msInDay = 24 * 60 * 60 * 1000;
const msInYear = 365.25 * msInDay;
const msInHalfYear = msInYear / 2;
const toleranceMs = toleranceDays * msInDay;

var metadata = undefined;

function relDiff(a, b) {
    const diff = Math.abs(a - b);
    return diff > msInHalfYear ? msInYear - diff : diff;
}

function datetimeToYearEpoch(date) {
    return date - new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
}

function sortDatesDescending(d1, d2) {
    const date1 = new Date(d1.date);
    const date2 = new Date(d2.date);
    return date2 - date1;
}

function preProcessScenes(collections) {
    let scenes = collections.scenes.tiles.filter(function (tile) {
        return tile.dataPath.includes("T" + sensingTime);
    });
    // sort
    scenes = scenes.sort(sortDatesDescending);
    let newScenes = [];
    // convert first scene to day of year
    const observed = new Date(scenes[0].date);
    const obsMs = datetimeToYearEpoch(observed);
    for (let i = 0; i < scenes.length; i++) {
        let currentDate = new Date(scenes[i].date);
        let sceneMs = datetimeToYearEpoch(currentDate);
        let dt = relDiff(obsMs, sceneMs);
        if (dt <= toleranceMs) {
            newScenes.push(scenes[i]);
        }
    }

    metadata = {
        observed: observed.toISOString(),
        historical: newScenes.slice(1).map((scene) => scene.date),
    };

    collections.scenes.tiles = newScenes;
    return collections;
}

function updateOutputMetadata(scenes, inputMetadata, outputMetadata) {
    outputMetadata.userData = metadata;
}

function sum(array) {
    let sum = 0;
    for (let i = array.length; i--; ) {
        sum += array[i];
    }
    return sum;
}

function mean(array) {
    return sum(array) / array.length;
}

function std(array, mean) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i] - mean, 2);
    }
    return Math.sqrt(sum / array.length);
}

function evaluatePixel(samples) {
    const values = [];
    for (let i = samples.length; i--; ) {
        if (samples[i].dataMask) {
            values.push(samples[i][band]);
        }
    }
    if (values.length === 0) return [NODATA];
    const valsMean = mean(values);
    const valsStd = std(values, valsMean);
    const anomaly = samples[0][band] - valsMean;
    return [anomaly / valsStd];
}
