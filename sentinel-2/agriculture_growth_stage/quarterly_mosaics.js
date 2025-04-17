//VERSION=3 (auto-converted from 1)
/*
Based on Source: @HarelDan - https://github.com/hareldunn/GIS_Repo/blob/master/Multi-Temporal%20NDVI%20for%20Sentinel%20Hub%20Custom%20Scripts
Adapted to visualize NDVI for Sentinel-2 quarterly cloudless mosaics by András Zlinszky using GitHub Copilot.
Each quarter's NDVI is assigned to an RGB channel:
- Red: NDVI for the oldest quarter
- Green: NDVI for the middle quarter
- Blue: NDVI for the most recent quarter
Script requires multi-temporal processing so parameter TEMPORAL=true should be added to the request.
*/

// How to use this script:
// Open Copernicus Browser, zoom to your area of interest
// Select Sentinel-2 Quarterly Mosaics
// On the date panel, select Time Range mode (calendar icon with from-to arrows on the right side of the date panel)
// Set the time range - it should be 7 months. This is because the date of a Quarterly Mosaic refers to the first date in the 3 month interval that is used for generating data (https://forum.dataspace.copernicus.eu/t/scenes-getmonth-for-quarterly-mosaics/3045/2?u=andras.zlinszky_education). So eg. if your start date is 2022-01-01 and your end date is 2022-07-01, your are actually looking at images from 2022-01-01 to 2022-09-30
//  If it is longer, the algorithm will use only the last 9 months

function setup() {
    return {
        input: [
            {
                bands: ["B04", "B08"],
            },
        ],
        output: { bands: 3 },
        mosaicking: "ORBIT",
    };
}

function calcNDVI(sample) {
    var denom = sample.B04 + sample.B08;
    return denom != 0 ? (sample.B08 - sample.B04) / denom : 0.0;
}

function evaluatePixel(samples, scenes) {
    var ndvi1 = 0; // NDVI for the oldest quarter
    var ndvi2 = 0; // NDVI for the middle quarter
    var ndvi3 = 0; // NDVI for the most recent quarter

    // Get the quarter of the most recent scene
    var endQuarter = Math.floor(scenes[0].date.getMonth() / 3);

    for (var i = 0; i < samples.length; i++) {
        var ndvi = calcNDVI(samples[i]);
        var sceneQuarter = Math.floor(scenes[i].date.getMonth() / 3);

        if (sceneQuarter == endQuarter) {
            ndvi3 = ndvi; // Most recent quarter
        } else if (sceneQuarter == endQuarter - 1 || (endQuarter == 0 && sceneQuarter == 3)) {
            ndvi2 = ndvi; // Middle quarter
        } else if (sceneQuarter == endQuarter - 2 || (endQuarter == 0 && sceneQuarter == 2) || (endQuarter == 1 && sceneQuarter == 3)) {
            ndvi1 = ndvi; // Oldest quarter
        }
    }

    // Stretch NDVI values for visualization
    ndvi1 = stretch(ndvi1, 0.1, 0.7);
    ndvi2 = stretch(ndvi2, 0.1, 0.7);
    ndvi3 = stretch(ndvi3, 0.1, 0.7);

    return [ndvi1, ndvi2, ndvi3];
}

function stretch(val, min, max) {
    return (val - min) / (max - min);
}

function preProcessScenes(collections) {
    // Filter scenes to include only the last three quarters
    collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
        var orbitDateFrom = new Date(orbit.dateFrom);
        return (
            orbitDateFrom.getTime() >=
            collections.to.getTime() - 3 * 3 * 30 * 24 * 3600 * 1000 // Last 9 months
        );
    });
    return collections;
}