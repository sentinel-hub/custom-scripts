//VERSION=3 (auto-converted from 1)
/*
Source: @HarelDan - https://github.com/hareldunn/GIS_Repo/blob/master/Multi-Temporal%20NDVI%20for%20Sentinel%20Hub%20Custom%20Scripts
Visualizing NDVI multi-temporal trends in Sentinel-2 imagery.
will take the current image as baseline and calculate average NDVI for the previous 2 months
Based on:
https://twitter.com/sentinel_hub/status/922813457145221121
https://twitter.com/sentinel_hub/status/1020755996359225344
Script requires multi-temporal processing so parameter TEMPORAL=true should be added to the request
Adapted to PlanetScope and Analysis-ready PlanetScope by @azlinszky.bsky.social
This version is for PlanetScope data, checking cloudiness with the "clear" band.
*/

function setup() {
    return {
        input: [
            {
                bands: ["red", "nir", "clear"],
            },
        ],
        output: { bands: 3 },
        mosaicking: "ORBIT",
    };
}

function calcNDVI(sample) {
    var denom = sample.red + sample.nir;
    return denom != 0 ? (sample.nir - sample.red) / denom : 0.0;
}
function stretch(val, min, max) {
    return (val - min) / (max - min);
}

function evaluatePixel(samples, scenes) {
    if (!scenes || scenes.length === 0) {
        return [0, 0.3, 0.3]; // just a color to indicate something is wrong
    }
    var avg1 = 0;
    var count1 = 0;
    var avg2 = 0;
    var count2 = 0;
    var avg3 = 0;
    var count3 = 0;
    var endMonth = scenes[0].date.getMonth();

    for (var i = 0; i < samples.length; i++) {
        // Only use clear pixels
        if (!samples[i].clear) continue;
        var ndvi = calcNDVI(samples[i]);
        if (scenes[i].date.getMonth() == endMonth) {
            avg3 = avg3 + ndvi;
            count3++;
        } else if (scenes[i].date.getMonth() == endMonth - 1) {
            avg2 = avg2 + ndvi;
            count2++;
        } else {
            avg1 = avg1 + ndvi;
            count1++;
        }
    }
    avg1 = count1 > 0 ? avg1 / count1 : 0;
    avg2 = count2 > 0 ? avg2 / count2 : 0;
    avg3 = count3 > 0 ? avg3 / count3 : 0;
    avg1 = stretch(avg1, 0.1, 0.7);
    avg2 = stretch(avg2, 0.1, 0.7);
    avg3 = stretch(avg3, 0.1, 0.7);

    return [avg1, avg2, avg3];
}

function preProcessScenes(collections) {
    collections.scenes.orbits = collections.scenes.orbits.filter(function (
        orbit
    ) {
        var orbitDateFrom = new Date(orbit.dateFrom);
        return (
            orbitDateFrom.getTime() >=
            collections.to.getTime() - 3 * 31 * 24 * 3600 * 1000
        );
    });
    return collections;
}