//VERSION=3
//Cloudless Mosaic with PlanetScope
//adapted by András Zlinszky and Google Gemini to handle first quartile or median mosaicking

function setup() {
    return {
        input: ["red", "green", "blue", "dataMask", "clear"],
        output: { bands: 4 },
        mosaicking: "ORBIT", // 'ORBIT' or 'TILE' or 'NONE' - determines initial mosaicking behavior
        // Define a custom parameter for the mosaicking method
        processing: {
            // 'mosaickingMethod' is the name of your custom parameter.
            // Users can set this to 'median' or 'q1'.
            mosaickingMethod: {
                defaultValue: "q1", // Default to first quartile
                validValues: ["median", "q1"],
            },
        },
    };
}

function preProcessScenes(collections) {
    collections.scenes.orbits = collections.scenes.orbits.filter(function (
        orbit
    ) {
        var orbitDateFrom = new Date(orbit.dateFrom);
        const nAggregationDays = 7;
        return (
            orbitDateFrom.getTime() >=
            collections.to.getTime() - nAggregationDays * 24 * 3600 * 1000
        );
    });
    return collections;
}

function getLastObservation(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            return arr[i];
        }
    }
    return 0;
}

function getMedian(sortedValues) {
    const n = sortedValues.length;
    if (n === 0) {
        return undefined;
    }

    const mid = Math.floor(n / 2);

    if (n % 2 === 1) {
        return sortedValues[mid];
    } else {
        return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    }
}

/**
 * Calculates the first quartile (Q1) of a sorted array of numbers.
 *
 * @param {number[]} sortedValues An array of numbers sorted in ascending order.
 * @returns {number} The first quartile (Q1) of the distribution, or undefined if array is empty.
 */
function getFirstQuartile(sortedValues) {
    const n = sortedValues.length;
    if (n === 0) {
        return undefined;
    }

    const lowerHalfEndIndex = Math.floor(n / 2);
    const lowerHalf = sortedValues.slice(0, lowerHalfEndIndex);

    return getMedian(lowerHalf);
}

// *** CRITICAL CHANGE HERE: ADD 'properties' AS THE THIRD ARGUMENT ***
function evaluatePixel(samples, scenes, properties) {
    var reds = [];
    var greens = [];
    var blues = [];

    // Collect clear samples
    for (var i = 0; i < samples.length; i++) {
        var sample = samples[i];
        var clear = sample.dataMask && sample.clear;

        if (clear === 1) {
            reds.push(sample.red);
            blues.push(sample.blue);
            greens.push(sample.green);
        }
    }

    var rValue;
    var gValue;
    var bValue;
    var transparency;

    if (reds.length > 0) {
        // IMPORTANT: Sort the arrays by value before calculating statistics.
        reds.sort((a, b) => a - b);
        greens.sort((a, b) => a - b);
        blues.sort((a, b) => a - b);

        // *** Access the method from the 'properties' object ***
        const method = properties.mosaickingMethod; // No 'processing' here, directly under properties

        if (method === "median") {
            rValue = getMedian(reds);
            gValue = getMedian(greens);
            bValue = getMedian(blues);
        } else if (method === "q1") {
            rValue = getFirstQuartile(reds);
            gValue = getFirstQuartile(greens);
            bValue = getFirstQuartile(blues);
        } else {
            // Fallback in case of an unexpected method value (shouldn't happen with validValues)
            rValue = reds[0];
            gValue = greens[0];
            bValue = blues[0];
        }

        transparency = 1;
    } else {
        // If no clear samples, default to black and fully transparent.
        rValue = 0;
        gValue = 0;
        bValue = 0;
        transparency = 0;
    }

    // Scale values for display (e.g., to 0-1 range).
    return [
        Math.min(1, Math.max(0, rValue / 3000)),
        Math.min(1, Math.max(0, gValue / 3000)),
        Math.min(1, Math.max(0, bValue / 3000)),
        transparency
    ];
}