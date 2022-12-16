//VERSION=3
/*
SIMPLE WATER BODIES MAPPING (SWBM)
Author: Mohor Gartner (https://www.linkedin.com/in/mohor-gartner/)
*/

/* 1. Set the source according to selection under Discover:
"S2L2A" - has already classified data (SCL), so filter for clouds applicable
"S2L1C" - no cloud filter
"L8" - either Landsat 8-9 L1 or Landsat 8-9 L2
it is recommended to use low cloud coverage, for example 15% or less, or in timelapse manually filter images
*/
var source = "S2L2A";

/* 2. Histogram for index selection
// needed for calibration of threshold under 3.
// 0 - MNDWI, 1 - NDWI, 2 -SWI (only for S2)
*/
var histogramIndex = 0;

/* 3. Set water surface detection THRESHOLDS
Calibration of thresholds might be needed. If so, follow instructions below
- under 1. select desired source
- under 2. select desired index which will be used for histogram (statistical analysis)
- do the histogram on specific scene. You can to this on 3 different types of scenes visible in EO Browser (if possible scene should not have clouds and snow)
  -a.) select representative scene with cca half water area and half non-water area.
       Run script and check histogram. Typically there should be peak on left and right. Threshold value for analyzed index is between these peaks.
       Example of the histogram can be checked here: https://bit.ly/3DfeJkR
  -b.) select representative scene with only non-water area.
       Run script and check histogram. As threshold for analysed index select value which is higher than (almost) all values on the histogram
  -c.) select representative scene with only water area.
     Run script and check histogram. As threshold for analysed index select value which is lower than (almost) all values on the histogram
It is recommended to do calibration for all 3 indices. SWI index is not applicable for L8 source.
*/
var MNDWI_thr = 0.1;
var NDWI_thr = 0.2;
var SWI_thr = 0.03; //only for S2
// note: if you want to ignore specific index for water surface detection, input should be a high high value, for example 999

// OTHER:
// function "index(x,y)" is: (x - y) / (x + y)


////// VARS
var nrDS, s1DS, vre1DS;
// define input bands for different sources
var inputList;
switch (source) {
    case "S2L2A":
        inputList = ["B02", "B03", "B04", "B05", "B08", "B11", "SCL", "dataMask"];
        break;
    case "S2L1C":
        inputList = ["B02", "B03", "B04", "B05", "B08", "B11", "dataMask"];
        break;
    case "L8":
        inputList = ["B02", "B03", "B04", "B05", "B06", "dataMask"];
        break;
}


////// FUNCTIONS
//water body id for S2
function wbiS2(g, nr, s1, vre1) {
    //water surf.
    let ws = 0;
    try {
        var mndwi = index(g, s1), ndwi = index(g, nr), swi = index(vre1, s1);
        //DEFINE WB. || OR used which can cause false detection of WB. User can also change to && AND for less false detection of WB, but WB detection is probably then under-detected
        if (mndwi > MNDWI_thr || ndwi > NDWI_thr || swi > SWI_thr) { ws = 1; }
    } catch (err) { ws = 0; }
    return ws;
}
//water body id for L8
function wbiL8(g, nr, s1) {
    //water surf.
    let ws = 0;
    try {
        var mndwi = index(g, s1), ndwi = index(g, nr);
        //DEFINE WB. || OR used which can cause false detection of WB. User can also change to && AND for less false detection of WB, but WB detection is probably then under-detected
        if (mndwi > MNDWI_thr || ndwi > NDWI_thr) { ws = 1; }
    } catch (err) { ws = 0; }
    return ws;
}


// optional filtering for clouds using the Sentinel-2A SCL band (values 1, 2, 7, 8, 9, 10, 11 are either clouds or snow)
function isCloud(scl) {
    /* SCL bands, user can add more bands, however it might filter scene too much or even filter out water area
    1-SC_SATURATED_DEFECTIVE
    2-SC_DARK_FEATURE_SHADOW
    3-SC_CLOUD_SHADOW
    7-SC_CLOUD_LOW_PROBA
    8-SC_CLOUD_MEDIUM_PROBA
    9-SC_CLOUD_HIGH_PROBA
    10-SC_THIN_CIRRUS
    11-SC_SNOW_ICE
    */
    if ([8, 9].includes(scl)) {
        return true;
    } else {
        return false;
    }
}
// calculate index value for statistics
function calcInVal(histogramIndex, g, nr, s1, vre1) {
    if (histogramIndex === 0) {
        return index(g, s1);
    } else if (histogramIndex === 1) {
        return index(g, nr);
    } else if (histogramIndex === 2) {
        return index(vre1, s1)
    } else {
        // if this retured, there is error!
        return 9999;
    }
}

////// SETUP
function setup() {
    return {
        input: inputList,
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: 'FLOAT32' },
            { id: "eobrowserStats", bands: 2, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

////// MAIN
function evaluatePixel(p) {
    // default value for vre1, if stays default that means that L8 is source
    vre1 = 9999;

    // define bands according to source
    if (source == "S2L2A" || source == "S2L1C") {
        nrDS = "B08"; s1DS = "B11"; vre1DS = "B05" //S2 bands
        // for S2, already get the data from channel VRE1 as it does not exist for L8
        vre1 = p[vre1DS];
    } else {
        nrDS = "B05"; s1DS = "B06"; //bands for Landsat 8
    }

    // common data for S2 and L8
    // rgb
    let b = p.B02, g = p.B03, r = p.B04;
    //nir,swir1
    let nr = p[nrDS], s1 = p[s1DS];

    //water body id according to the source
    if (source == "S2L2A" || source == "S2L1C") {
        w = wbiS2(g, nr, s1, vre1);
    } else {
        w = wbiL8(g, nr, s1);
    }

    // calculation of the index value for statistics, depending on choosen index
    let indexVal = p.dataMask === 1 ? calcInVal(histogramIndex, g, nr, s1, vre1) : NaN; // index without no-data values
    // only clouds SCL source if S2L2A, S2L1C&L8 do not have that
    let cloud = false;
    if (source == "S2L2A") {
        cloud = isCloud(p.SCL) //calling in our cloud filtering functon as a cloud variable
    }

    let outPixel = null;

    // outpixel color definition
    waterCol = [0, 0, 2, p.dataMask];
    RGB = [r * 2, g * 2, b * 2, p.dataMask];

    //Define color for output, either water body (blue) or not (RGB). Also if cloud detected, pixel should be RGB
    // note: in case of S2L2A, if cloud filtering would filter out significant areas of water, user can disable below cloud filtering
    outPixel = (cloud) ? RGB : ((w == 1) ? waterCol : RGB );

    // Return the 4 inputs and define content for each one
    return {
        default: outPixel,
        index: [indexVal],
        eobrowserStats: [w, cloud ? 1 : 0],
        dataMask: [p.dataMask]
    };
}