/*
Radar Vegetation index for Sentinel-1
Subhadip Dey
IIT Bombay

This code is based on:
Nasirzadehdizaji, Rouhollah, et al. "Sensitivity Analysis of Multi-Temporal Sentinel-1 SAR Parameters to Crop Height and Canopy Coverage." Applied Sciences 9.4 (2019): 655.
*/
/// adapted by András Zlinszky for Sentinel-1 quarterly mosaics

function setup() {
    return {
        input: ["VV", "VH", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 1, sampleType: "FLOAT32" },
            { id: "dataMask", bands: 1 }
        ]
    };
}

var water_threshold = 10; // Lower means more water
const rvi_min = -0.1; // Lower limit of the color ramp
const rvi_max = 1;   // Upper limit of the color ramp
const num_steps = 9;  // Number of steps in the ramp

// Define the colors for the ramp from light sand brown to deep fir green
const colors = [
    [0.93, 0.91, 0.71], // Light sand brown
    [0.87, 0.85, 0.61], // Sandy beige
    [0.8, 0.78, 0.51],  // Light tan
    [0.74, 0.72, 0.42], // Golden brown
    [0.69, 0.76, 0.38], // Olive green
    [0.64, 0.8, 0.35],  // Light moss green
    [0.57, 0.75, 0.32], // Moss green
    [0.5, 0.7, 0.28],   // Forest green
    [0.38, 0.59, 0.21]  // Deep fir green
];

// Generate the ramp dynamically
const rvi_ramp = [];
const step_size = (rvi_max - rvi_min) / (num_steps - 1);

for (let i = 0; i < num_steps; i++) {
    const value = rvi_min + i * step_size;
    rvi_ramp.push([value, colors[i]]);
}

visualizer = new ColorRampVisualizer(rvi_ramp, rvi_min, rvi_max);

function evaluatePixel(samples) {
    let VV = samples.VV;
    let VH = samples.VH;
    let dataMask = samples.dataMask;

    // Calculate RVI
    let rvi = (4 * VH) / (VV + VH);
    rvi = Math.max(rvi_min, Math.min(rvi_max, rvi)); // Clamp to the range

    // Apply water threshold
    if (VV / VH >= water_threshold) {
        return {
            default: [0.7, 0.8, 0.9, 1.0], // Water color (light greyish blue)
            index: [rvi],
            eobrowserStats: [rvi],
            dataMask: [dataMask]
        };
    } else {
        // Get the color from the ramp
        let color = visualizer.process(rvi);
        return {
            default: color.concat([dataMask]),
            index: [rvi],
            eobrowserStats: [rvi],
            dataMask: [dataMask]
        };
    }
}