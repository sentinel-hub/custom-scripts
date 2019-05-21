/*
The boundary of affected wildfire area is important to understand the impact and measure the impact of event. The existing script of wildfire boundary extraction still not be able to automatically delineate the boundary of affected area.
This script is introduced to highlighted the boundary of affected areas in more contrast and detail. Band 11 and Band 12 of Sentinel-2 is used. Using higher coefficient number lead to more contrast visualization.
This script is benefit not only for firefighter to manage the spread of fire but also for recovery management effort.

Authors of the script: Adzanil Rachmadhi Putra, Fatwa Ramdani
The Fire Boundary Script was submited to the Sentinel Hub Custom Script Contest 2019 and won the 3rd prize in the category Disaster Management and Prevention.
*/

function setup(dataSource) {
  setInputComponents([dataSource.B11, dataSource.B12]);
  setOutputComponentCount(1);
}

let viz = new HighlightCompressVisualizerSingle(-1.0, 1.0);

function evaluatePixel(samples) {
  let val = 8.5 * (samples[0].B12 - samples[0].B11) / (samples[0].B12 + samples[0].B11 + 0.25); return viz.process(val);
}