//VERSION=3
//PlanetScope NDWI EO Browser

function setup() {
    return {
        input: [{
            bands: [
                "green",
                "nir",
                "dataMask",
                "clear"]
        }],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 2, sampleType: "FLOAT32" },
            { id: "dataMask", bands: 1 },
        ]
    }
}

function evaluatePixel(sample) {

    let band1 = sample.green;
    let band2 = sample.nir;
    const denominator = band1 + band2;
    let ndwi = denominator === 0 ? NaN : (band1 - band2) / denominator;

    const clear = (sample.dataMask * sample.clear);

    let id_default = colorBlend(ndwi,
        [-1, -0.5, -0.2, 0, 0.2, 0.5, 1.0],
        [
            [1, 0, 1],
            [1, 0.5, 0],
            [1, 1, 0],
            [0.2, 1, 0.5],
            [0, 0, 1],
            [0, 0, 0.3],
            [0, 0, 0],
        ]
    );

    return {
        default: [...id_default, clear],
        index: [ndwi],
        eobrowserStats: [ndwi, sample.dataMask],
        dataMask: [sample.dataMask],
    };
}
