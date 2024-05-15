//VERSION = 3
//by András Zlinszky @azlinszky - based on https://www.sentinel-hub.com/faq/how-get-s2a-scene-classification-sentinel-2/ and https://www.science.org/doi/10.1126/sciadv.abc7447

function setup() {
    return {
        input: ["B04", "B08", "SCL", "dataMask"],
        output:
            { 
                bands: 1, 
                sampleType: "FLOAT32" 
            },
    }
}

const cloud_palette = {
    0: [0, 0, 0], // No Data (Missing data) - black  
    1: [1, 0, 0.016], // Saturated or defective pixel - red 
    2: [0.525, 0.525, 0.525], // Topographic casted shadows ("Dark features/Shadows" for data before 2022-01-25) - very dark grey
    3: [0.467, 0.298, 0.043], // Cloud shadows - dark brown
    6: [0, 0, 1], // Water (dark and bright) - blue
    7: [0.506, 0.506, 0.506], // Unclassified - dark grey
    8: [0.753, 0.753, 0.753], // Cloud medium probability - grey
    9: [0.949, 0.949, 0.949], // Cloud high probability - white
    10: [0.733, 0.773, 0.925], // Thin cirrus - very bright blue
    11: [0.325, 1, 0.980], // Snow or ice - very bright pink
}

function evaluatePixel(sample) {
    let kndvi = Math.tanh(Math.pow(((sample.B08 - sample.B04) / (sample.B08 + sample.B04)), 2));
    let is_clouds = Object.keys(cloud_palette).includes(sample.SCL.toString())
return [(is_clouds ? null : kndvi)]
}
