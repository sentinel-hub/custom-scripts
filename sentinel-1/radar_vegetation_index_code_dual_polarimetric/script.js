/*
Radar Vegetation index for Sentinel-1
Subhadip Dey
IIT Bombay

This code is based on:
Nasirzadehdizaji, Rouhollah, et al. "Sensitivity Analysis of Multi-Temporal Sentinel-1 SAR Parameters to Crop Height and Canopy Coverage." Applied Sciences 9.4 (2019): 655.
*/
/// updated to version 3 by András Zlinszky and GitHub Copilot

function setup() {
    return {
        input: ["VV", "VH"],
        output: { bands: 3 }
    };
}

function evaluatePixel(sample) {
    let VV = sample.VV;
    let VH = sample.VH;

    // Calculate RVI
    let rvi = (4 * VH) / (VV + VH);

    // Return RVI as grayscale
    return [rvi, rvi, rvi];
}