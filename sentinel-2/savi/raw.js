// Soil Adjusted Vegetation Index  (abbrv. SAVI)
// General formula: (800nm - 670nm) / (800nm + 670nm + L) * (1 + L)
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=87
function setup() {
    return {
        input: ["B04", "B08"],
        output: {
            bands: 1,
            sampleType: "FLOAT32"
        }
    };
}

let L = 0.428; // L = soil brightness correction factor could range from (0 -1)

function evaluatePixel(samples) {
    const index = (samples.B08 - samples.B04) / (samples.B08 + samples.B04 + L) * (1.0 + L);
    return [index]
}
