//VERSION=3
//Author: Regione del Veneto

function setup() {
    return {
        input: [
            {datasource: "S1GRD", bands:["VV", "VH"], orthorectify:"TRUE"},
            {datasource: "S2L2A", bands:["B02", "B03", "B04", "B08","B11","B12"]}
        ],
        output: [
            { id: "default", bands: 3}
        ]
    };
}

function evaluatePixel(samples) {

    // Setting the samples for Sentinel-1 and Sentinel-2 products
    let S1 = samples.S1GRD[0]
    let S2 = samples.S2L2A[0]
    
    //Computing the indices for image classification
    // Normalized Difference Vegetation Index
    let ndvi = index(S2.B08,S2.B04)
    // Modified Normalized Difference Water Index
    let mndwi = index(S2.B03,S2.B12)
    // Bare Soil Index
    let bsi = ((S2.B11 + S2.B04) - (S2.B08 + S2.B02)) / ((S2.B11 + S2.B04) + (S2.B08 + S2.B02))
    // (NEW) Modified Normalized Difference Sand Index
    let mndsi = index(S2.B04,S2.B02)

    //Setting threshold values for image classification
    // Extracts built-up areas in white
    if (S1.VH > 0.2 || S1.VV > 0.2) {
        return {
            default: [1,1,1]
        }}
    // Extracts shrub and grassland in ~yellow
    if (ndvi > 0.2 && ndvi < 0.4) {
        return {
            default: [0.9,0.9,0]
        }}
    // Extracts flourishing vegetation in ~green
    if (ndvi >= 0.4) {
        return {
            default: [0.2,0.75,0]
        }}
    // Extracts water bodies in ~blue
    if (mndwi > 0 && S1.VH < 0.015) {
        return {
            default: [0,0,0.75]
        }}
    // Extracts bare soils in ~red
    if (bsi > 0.2) {
        return {
            default: [0.75,0,0]
        }}
    // Extracts sand surface in ~orange
    if (mndsi > 0.1) {
        return {
            default: [1,0.65,0]
        }}
    // Leave in black unclassified pixels
    else{
    return {
      default: [0,0,0]
    }}
}
