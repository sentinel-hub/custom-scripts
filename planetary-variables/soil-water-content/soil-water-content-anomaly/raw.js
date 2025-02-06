//VERSION=3
// tolerance in either direction, so i.e. +- 5 days
const toleranceDays = 1;

const band = "SWC";
const NODATA = NaN;

function setup() {
    return {
        input: [band, "dataMask"],
        output: { bands: 1, sampleType: "FLOAT32" },
        mosaicking: "ORBIT",
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
    const date1 = new Date(d1.dateFrom);
    const date2 = new Date(d2.dateFrom);
    return date2 - date1;
}

var obsPerYear = [0];
function preProcessScenes(collections) {
    // sort
    let scenes = collections.scenes.orbits;
    if (scenes.length == 0) {
        return collections;
    }
    scenes = scenes.sort(sortDatesDescending);
    let newScenes = [];
    // convert first scene to day of year
    const observed = new Date(scenes[0].dateFrom);
    const obsMs = datetimeToYearEpoch(observed);
    var year = 0;
    for (let i = 0; i < scenes.length; i++) {
        let currentDate = new Date(scenes[i].dateFrom);
        let sceneMs = datetimeToYearEpoch(currentDate);
        let dt = relDiff(obsMs, sceneMs);
        if (dt <= toleranceMs) {
            newScenes.push(scenes[i]);
            obsPerYear[year]++;
        } else {
            if (obsPerYear[year] != 0) {
                year++;
                obsPerYear[year] = 0;
            }
        }
    }

    metadata = {
        observed: observed.toISOString(),
        historical: newScenes.slice(1).map((scene) => scene.dateFrom),
    };

    collections.scenes.orbits = newScenes;
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
    // Return transparent, if no value for most recent image
    if (samples.length == 0) return [NODATA];
    if (!samples[0].dataMask) return [NODATA];
    const values = [];
    var yearIndex = 0;
    for (let i = 0; i < obsPerYear.length; i++) {
        let obsInYear = obsPerYear[i];
        if (obsInYear == 0) continue;
        let validObsInYear = 0;
        var yearSum = 0;
        for (let j = 0; j < obsInYear; j++) {
            var currentIndex = yearIndex + j;
            if (samples[currentIndex].dataMask) {
                yearSum += samples[currentIndex][band];
                validObsInYear++;
            }
        }
        if (validObsInYear) {
            const yearMean = yearSum / validObsInYear;
            values.push(yearMean);
        }
        yearIndex += obsInYear;
    }
    if (values.length === 0) return [NODATA];
    const valsMean = mean(values);
    const valsStd = std(values, valsMean);
    const anomaly = samples[0][band] - valsMean;
    return [anomaly / valsStd];
}
