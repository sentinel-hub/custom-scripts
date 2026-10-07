//VERSION=3
// Chlorophyll Absorption Ratio Index  (abbrv. CARI)
//
// General formula: (700nm/670nm)*(sqrt((a*670+670nm+b)^2))/((a^2+1)^0.5)
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=142
//

// Set USE_SCL_CLOUD_MASKING to false to disable cloud/shadow/water masking
var USE_SCL_CLOUD_MASKING = true;

function setup() {
    return {
        input: ["B03", "B04", "B05", "SCL", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
            { id: "dataMask", bands: 1 }
        ]
    };

}

// USER-CONFIGURABLE PARAMETERS
// Adjust these values to rescale the color palette visualization:
var minColorValue = 0.018;      // Values below this appear as white (underflow)
var maxColorValue = 5.295;     // Values above this appear as black (overflow)

const cloud_palette = {
    0: [0, 0, 0],             // No Data (Missing data) - black
    1: [1, 0, 0.016],         // Saturated or defective pixel - red
    2: [0.525, 0.525, 0.525], // Topographic casted shadows - very dark grey
    3: [0.467, 0.298, 0.043], // Cloud shadows - dark brown
    6: [0, 0, 1],             // Water (dark and bright) - blue
    7: [0.506, 0.506, 0.506], // Unclassified - dark grey
    8: [0.753, 0.753, 0.753], // Cloud medium probability - grey
    9: [0.949, 0.949, 0.949], // Cloud high probability - white
    10: [0.733, 0.773, 0.925], // Thin cirrus - very bright blue
    11: [0.325, 1, 0.980],    // Snow or ice - very bright pink
};

function evaluatePixel(sample) {    let index = (sample.B05 / sample.B04) * (Math.sqrt(Math.pow(((sample.B05 - sample.B03) / 150.0 * 670.0 + sample.B04 + (sample.B03 - ((sample.B05 - sample.B03) / 150.0 * 550.0))), 2.0))) / (Math.pow(((sample.B05 - sample.B03) / Math.pow(150.0, 2.0) + 1.0), 0.5));
    // colorBlend will return a color when the index is between minColorValue and maxColorValue and white when it is less than minColorValue.
    // To see black when it is more than maxColorValue, uncomment the last line of colorBlend.
    // The minColorValue/maxColorValue values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

    let underflow_color = [1, 1, 1];
    let low_color = [208/255, 88/255, 126/255];
    let high_color = [241/255, 234/255, 200/255];
    let overflow_color = [0, 0, 0];

    let imgVals = colorBlend(index, [minColorValue, minColorValue, maxColorValue],
    [
    	underflow_color,
    	low_color,
    	high_color,
    	//overflow_color // uncomment to see overflows
    ]);
    let is_clouds = USE_SCL_CLOUD_MASKING && Object.keys(cloud_palette).includes(sample.SCL.toString());
    if (is_clouds) {
        imgVals = cloud_palette[sample.SCL];
    }
    return {
        default: imgVals.concat(sample.dataMask),
        index: [is_clouds ? NaN : index],
        eobrowserStats: [is_clouds ? NaN : index],
        dataMask: [sample.dataMask]
    };
}

