//VERSION = 3
//by András Zlinszky @azlinszky - based on https://www.sentinel-hub.com/faq/how-get-s2a-scene-classification-sentinel-2/ and https://www.science.org/doi/10.1126/sciadv.abc7447

function setup() {
    return {
        input: ["B04", "B08", "SCL", "dataMask"],
        output: [
            { bands: 4 }
        ]
    }
}

const kndvi_ramp = [
    [-1.1, [0, 0, 0]],
    [-0.1, [0.86, 0.86, 0.86]],
    [0, [1, 1, 0.88]],
    [-0.2, [0.75, 0.75, 0.75]],
    [0.025, [1, 0.98, 0.8]],
    [0.05, [0.93, 0.91, 0.71]],
    [0.075, [0.87, 0.85, 0.61]],
    [0.1, [0.8, 0.78, 0.51]],
    [0.125, [0.74, 0.72, 0.42]],
    [0.15, [0.69, 0.76, 0.38]],
    [0.175, [0.64, 0.8, 0.35]],
    [0.2, [0.57, 0.75, 0.32]],
    [0.25, [0.5, 0.7, 0.28]],
    [0.3, [0.44, 0.64, 0.25]],
    [0.35, [0.38, 0.59, 0.21]],
    [0.4, [0.31, 0.54, 0.18]],
    [0.45, [0.25, 0.49, 0.14]],
    [0.5, [0.19, 0.43, 0.11]],
    [0.55, [0.13, 0.38, 0.07]],
    [0.6, [0.06, 0.33, 0.04]]
]
visualizer = new ColorRampVisualizer(kndvi_ramp);
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
    let imgVals = kndvi <= 0.6 ? visualizer.process(kndvi) : [0, 0.27, 0];
    let is_clouds = Object.keys(cloud_palette).includes(sample.SCL.toString())
    imgVals = is_clouds ? cloud_palette[sample.SCL] : imgVals;
    return imgVals.concat(sample.dataMask)
}
