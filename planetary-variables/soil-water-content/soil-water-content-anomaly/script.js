const vmin = -1;
const vmax = 1;
const band = "SWC";

function setup() {
    return {
        input: [band, "dataMask"],
        output: { bands: 4 },
        mosaicking: "ORBIT",
    };
}

const NODATA = -32768;

// tolerance in either direction, so i.e. +- 5 days
const toleranceDays = 1;
const msInDay = 24 * 60 * 60 * 1000;
const msInYear = 365.25 * msInDay;
const msInHalfYear = msInYear / 2;
const toleranceMs = toleranceDays * msInDay;

function updateColormap(vmin, vmax) {
    const numIntervals = cmap.length;
    const intervalLength = (vmax - vmin) / (numIntervals - 1);
    for (let i = 0; i < numIntervals; i++) {
        cmap[i][0] = vmin + intervalLength * i;
    }
}

const cmap = [
    [0.0, 0xfff7ea],
    [0.05, 0xfaedda],
    [0.1, 0xede4cb],
    [0.15, 0xdedcbd],
    [0.2, 0xced3af],
    [0.25, 0xbdcba3],
    [0.3, 0xaac398],
    [0.35, 0x96bc90],
    [0.4, 0x80b48a],
    [0.45, 0x68ac86],
    [0.5, 0x4da484],
    [0.55, 0x269c83],
    [0.6, 0x009383],
    [0.65, 0x008a85],
    [0.7, 0x008186],
    [0.75, 0x007788],
    [0.8, 0x006d8a],
    [0.85, 0x00618c],
    [0.9, 0x00558d],
    [0.95, 0x00478f],
    [1.0, 0x003492],
];

updateColormap(vmin, vmax);
const visualizer = new ColorRampVisualizer(cmap);

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

function preProcessScenes(collections) {
    // sort
    let scenes = collections.scenes.orbits;
    scenes = scenes.sort(sortDatesDescending);
    let newScenes = [];
    // convert first scene to day of year
    const observed = new Date(scenes[0].dateFrom);
    const obsMs = datetimeToYearEpoch(observed);
    for (let i = 0; i < scenes.length; i++) {
        let currentDate = new Date(scenes[i].dateFrom);
        let sceneMs = datetimeToYearEpoch(currentDate);
        let dt = relDiff(obsMs, sceneMs);
        if (dt <= toleranceMs) {
            newScenes.push(scenes[i]);
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
    for (let i = 0; i < array.length; i++) {
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
    return Math.sqrt(sum / array.length - 1);
}

function evaluatePixel(samples) {
    const values = samples
        .filter((sample) => sample.dataMask)
        .map((sample) => sample[band]);
    if (values.length === 0) return [0, 0, 0, 0];
    const valsMean = mean(values);
    const valsStd = std(values, valsMean);
    const anomaly = samples[0][band] - valsMean;
    const val = anomaly / valsStd;
    let imgVals = visualizer.process(val);
    return [...imgVals, samples[0].dataMask];
}
