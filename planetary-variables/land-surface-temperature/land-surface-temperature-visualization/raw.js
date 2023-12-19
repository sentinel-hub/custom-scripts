//VERSION=3

// Set defaultVis to false to scaled and choose color_min and color_max values.
// LST has two observations per days: 1h30 and 13h30 solar local time

const defaultVis = true // true or false
const color_min = 290 // default min: 263
const color_max = 330 // default max: 340
const sensing_time = "0130" // "0130" or "1330" or ""
const variable = "LST" // LST or LST_MaskedPixels

//set the data for map and timeseries
function setup() {
    return {
        input: [variable, "dataMask"],
        output: { bands: 1, sampleType: "FLOAT32" },
        mosaicking: "TILE"
    };
}

//Select files based on sensing time (0130 or 1330)
function preProcessScenes(collections) {
    collections.scenes.tiles = collections.scenes.tiles.filter(function (tile) {
        return tile.dataPath.includes("T" + sensing_time);
    })
    collections.scenes.tiles.sort((a, b) => new Date(b.date) - new Date(a.date));
    return collections
}

function evaluatePixel(samples) {
    // LST scale factor
    const scaleFactor = 100;

    // Precompute an array to contain observations
    var n_observations = samples.length;
    let array = new Array(n_observations).fill(0);

    // Fill the array with values
    samples.forEach((sample, index) => {
        array[index] = samples[index][variable] / scaleFactor;
    });

    // Get variable and apply scale factor
    for (var i = 0; i < samples.length; i++) {
        indexVal = samples[i][variable] / scaleFactor;
    }
    return [indexVal];
}
