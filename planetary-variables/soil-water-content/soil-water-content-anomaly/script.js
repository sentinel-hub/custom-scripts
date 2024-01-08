// Visualization
const vmin = -2;
const vmax = 2;
// tolerance in either direction, so i.e. +- 1 days
const toleranceDays = 1;

const band = "SWC";
const NODATA = NaN;

function setup() {
    return {
        input: [band, "dataMask"],
        output: { bands: 4 },
        mosaicking: "ORBIT",
    };
}

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
    [-3, 0x67001f],
    [-2, 0xb2182b],
    [-1, 0xd6604d],
    [-0.5, 0xf4a582],
    [-0.25, 0xfddbc7],
    [0, 0xf7f7f7],
    [0.25, 0xd1e5f0],
    [0.5, 0x92c5de],
    [1, 0x4393c3],
    [2, 0x2166ac],
    [3, 0x053061],
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
    if (values.length === 0) return [0, 0, 0, 0];
    const valsMean = mean(values);
    const valsStd = std(values, valsMean);
    const anomaly = samples[0][band] - valsMean;
    const val = anomaly / valsStd;
    let imgVals = visualizer.process(val);
    return [...imgVals, samples[0].dataMask];
}
