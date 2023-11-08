/*
Normalized difference chlorophyll index
https://pdfs.semanticscholar.org/2fba/caa14adb43d5bc8d2dd274304f60814d933c.pdf
https://www.sciencedirect.com/science/article/pii/S0380133018301801 
https://www.researchgate.net/publication/297718964_Comparison_of_satellite_reflectance_algorithms_for_estimating_chlorophyll-a_in_a_temperate_reservoir_using_coincident_hyperspectral_aircraft_imagery_and_dense_coincident_surface_observations 
*/
function setup() {
    return {
        input: ["B04", "B05"],
        output: {
            bands: 1,
            sampleType: "FLOAT32"
        }
    };
}

function evaluatePixel(samples) {
    return [index(samples.B05, samples.B04)]
}
