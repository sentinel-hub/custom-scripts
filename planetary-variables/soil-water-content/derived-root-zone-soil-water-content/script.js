//VERSION=3

const nDays = 10;           // The number of days to load data for
const scaleFactor = 1000;   // The scale factor for the SWC values
const vmin = 0.1;           // The minimum value of the colormap
const vmax = 0.4;           // The maximum value of the colormap

function setup() {
    return {
        input: ["SWC", "dataMask"],
        output: [
            { id: "default", bands: 4, 
            }
        ],
        mosaicking: "ORBIT"
    };
}


function preProcessScenes(collections){
    collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
        var orbitDateFrom = new Date(orbit.dateFrom)
        // Select all images within the last nDays
        return orbitDateFrom.getTime() >= (collections.to.getTime() - (nDays * 24 * 3600 * 1000));
    })
    return collections
}


function expFilter(swc, dataMask, dates, timeConst) {
    let deltaDays = 0;       // Initialize time difference with previous valid time [Unit days]
    let gain = 1.0;          // Initialize gain
    let referenceIndex = -1; // Initialize index of the first day with data
    let referenceDate = NaN; // Initialize date of the first day with data
    let referenceSWC = NaN;  // Initialize SWC value of the first day with data

    // Find the first day with data in the time series
    for (let i = 0; i < dates.length; i++) {
        if (dataMask[i]) {
            // Set index, date and SWC initial values to the first date with data
            referenceIndex = i;
            referenceDate = dates[i];
            referenceSWC = swc[i];
            break;
        }
    }

    // Set first day of derived root-zone SWC equal to surface SWC
    let drzswc = referenceSWC;

    if (referenceIndex > -1) {
        // Only apply the filter if there is at least one valid value in the time series
        for (let i = referenceIndex; i < dates.length; i++) {
            if (dataMask[i]) {
                deltaDays = (dates[i] - referenceDate) / (24 * 3600 * 1000);
                gain = gain / (gain + Math.exp(-deltaDays / timeConst));
                drzswc = drzswc + gain * (swc[i] - drzswc);
                referenceDate = dates[i]
            }
        }
    }
    return [drzswc];
}


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

// Prepare colormap based on provided min and max values
updateColormap(vmin, vmax);
const visualizer = new ColorRampVisualizer(cmap);


function evaluatePixel(samples, scenes) {
    // When there are no dates, return no data
    if (samples.length == 0) return [NaN, NaN, NaN, 0];

    // When there is no data for the last day, don't run calculation, return no data
    if (!samples[0].dataMask) return [NaN, NaN, NaN, 0];
    
    // Extract dates, data mask and scaled SWC values and sort them ascending (oldes to newest)
    var datesASC = scenes.map(scene => new Date(scene.date)).reverse();
    var swcASC = samples.map(sample => sample.SWC / scaleFactor).reverse();
    var dataMaskASC = samples.map(sample => sample.dataMask).reverse();

    // Calculate derived root-zone SWC by applying exponential filter
    const drzswc = expFilter(swcASC, dataMaskASC, datesASC, nDays);

    // Apply colormap
    let imgVals = visualizer.process(drzswc);

    return [...imgVals, samples[0].dataMask];
}
