//VERSION=3

const nDays = 20;           // The number of days to load data for
const scaleFactor = 1000;   // The scale factor for the SWC values

function setup() {
    return {
        input: ["SWC", "dataMask"],
        output: [
            { id: "default", bands: 1, 
              sampleType: "FLOAT32",
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

function evaluatePixel(samples, scenes) {
    // When there are no dates, return no data
    if (samples.length == 0) return [NaN];

    // When there is no data for the last day, don't run calculation, return no data
    if (!samples[0].dataMask) return [NaN];
    
    // Extract dates, data mask and scaled SWC values and sort them ascending (oldes to newest)
    var datesASC = scenes.map(scene => new Date(scene.date)).reverse();
    var swcASC = samples.map(sample => sample.SWC / scaleFactor).reverse();
    var dataMaskASC = samples.map(sample => sample.dataMask).reverse();

    // Calculate derived root-zone SWC by applying exponential filter
    const drzswc = expFilter(swcASC, dataMaskASC, datesASC, nDays);

    return [drzswc];
}