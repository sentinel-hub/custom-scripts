//VERSION=3
/*
Based on Source: @HarelDan - https://github.com/hareldunn/GIS_Repo/blob/master/Multi-Temporal%20NDVI%20for%20Sentinel%20Hub%20Custom%20Scripts
Adapted to visualize NDVI for Sentinel-2 quarterly cloudless mosaics by András Zlinszky using GitHub Copilot / Claude Code.

NDVI of three consecutive quarterly mosaics, oldest to most recent, in the Red, Green and Blue
channel. The mosaics are loaded by data fusion as three data sources named Q1, Q2 and Q3, which
have to be set up in Copernicus Browser first - see the README for how.
*/

function setup() {
    return {
        input: [
            {
                datasource: "Q1",
                bands: ["B04", "B08", "dataMask"],
            },
            {
                datasource: "Q2",
                bands: ["B04", "B08", "dataMask"],
            },
            {
                datasource: "Q3",
                bands: ["B04", "B08", "dataMask"],
            },
        ],
        output: { bands: 4 },
        mosaicking: "SIMPLE",
    };
}

// NDVI values are stretched between these limits for visualization for all three images
const min = 0.1;
const max = 0.7;

function quarterNDVI(samples) {
    // Under data fusion, a datasource always returns an array, holding either one sample or none
    if (samples.length === 0 || samples[0].dataMask !== 1) return null;
    return stretch(index(samples[0].B08, samples[0].B04), min, max);
}

function evaluatePixel(samples) {
    var ndvi1 = quarterNDVI(samples.Q1); // NDVI for the oldest quarter
    var ndvi2 = quarterNDVI(samples.Q2); // NDVI for the middle quarter
    var ndvi3 = quarterNDVI(samples.Q3); // NDVI for the most recent quarter

    // The composite is only meaningful where all three quarters have data
    if (ndvi1 === null || ndvi2 === null || ndvi3 === null) return [0, 0, 0, 0];

    return [ndvi1, ndvi2, ndvi3, 1];
}

function stretch(val, min, max) {
    return (val - min) / (max - min);
}
