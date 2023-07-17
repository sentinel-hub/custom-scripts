/*
SELDOM AND REGULAR WATER SURFACE DETECTION AND POSSIBLE HIGH INCLINATION (INFRASTRUCTURE, ROADS, BRIDGES, RIDGE, CLIFFS, MOUNTAINS, HILLS, ETC.)
use only in multi-temporal processing, it is recommended to have around 30 samples.

Author: Mohor Gartner (Linkedin: https://www.linkedin.com/in/mohor-gartner/)

As values (VV) can be variable for different parts around the world and result depends on selected timeline, limiting parameters could need adjustment. 
Recommended values are VVminLim=0.02, VV50lim=1, percLim=0.1 and onlySeldomWater=false. For specific cases, calibration of the variables might be necessary. In case high percentage of smooth surfaces (wide roads, sand dunes), onlySeldomWater=true -> waterCol=terrainCol. 

WMS settings in layer should be following:
Mosaic order: Most Recent
Acquisition mode: IW
Polarization: DV
Resolution: High
Orbit direction: Both
Orthorectification: Enabled
Backscatter coefficient: gamma0

Template script to make multi-temporal processing was used from:
https://github.com/sentinel-hub/custom-scripts/blob/master/sentinel-2/max_ndvi/script.js

REPRESENTATIVE IMAGES
1. Platte and Missouri Rivers confluence (USA): VVminLim=0.02, VV50lim=1, percLim=0.1;
2. Intermittent lake Cerknica (Slovenia): VVminLim=0.01, VV50lim=1.5, percLim=0.1;
3. Kerala (India): VVminLim=0.02, VV50lim=3, percLim=0.1;
4. The Villages (USA): VVminLim=0.02, VV50lim=2, percLim=0.1;
5. Polemidia dam (Cyprus): VVminLim=0.006, VV50lim=1, percLim=0.1;

*/

//VERSION=3

var VVminLim = 0.02;
var VV50lim = 1;
var percLim = 0.1;
var onlySeldomWater = false;

// calculate percentile for the array
function percentile(sortedArray, length, percentile) {
	// position i of the percentile
	let i = percentile * length;
	// round up, it is needed if not integer
	i = Math.ceil(i) - 1;// minus 1 because indexing starts with 0
	// percValue
	let percValue = sortedArray[i];
	return percValue;
}

function setup () {
	return {
    input: ["VV"],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  };
}

function evaluatePixel(samples) {
	//gather all values of one pixel for defined timeline
	var VVarray = [];
	// get sum
	var VVsum = 0;
	// get max
	var VVmax = 0;
	// get min
	var VVmin = 1;
	var N = samples.length;
	// VV50
	var VV50 = 1;
	
	// loop through selected timeline
	for (var i = 0; i < N; i++) {
		var VVi = samples[i].VV;
		// vv array
		VVarray.push(VVi);
		// sum
		VVsum = VVsum+VVi;
		// max
		if (VVi > VVmax) {VVmax = VVi;}
		// min
		if (VVi < VVmin) {VVmin = VVi;}	
		
		//// VV50 is calculated as VVi*50. Non-water areas have higher values (e.g. VV50>1), and water areas have lower values (e.g. VV50<1)
		// at the end of the loop, pixel with lower values (water presence) has lower VV50 value and pixel with higher values (non-water presence, high inclincation presence) has higher VV50 value
		// note: it would be more appropriate to check VV50 value in new loop. However, with suitable timeline samples it can be done in the same loop for improved performance. Therefore, if low VV50 is detected at least once in the loop for pixel, lower value means higher probability for water presence.
		if (VV50 > VVmax) {VV50 = VVi*50;}	
	}

  	// make sorted array
	var VVarraySort = VVarray.sort((a, b) => a - b);
		
	// calc avg value
	var VVavg = VVsum / N;
	// possible classes for pixel, except "normal terrain"
	var border = false;
	var water = false;
	var seldomWater = false;
	var highIncl = false;
	
	// colour palette
	let terrainCol = [0, VVavg, 0];
	let seldomWaterCol=[1, 0, 0];
	let borderCol=[0.58, 0.58, 0.58];
	let highInclCol=[1, 1, 1];
	let waterCol = [0, 0.66, 1];
	if (onlySeldomWater) {
		waterCol=terrainCol;
	}
	let perc95 = percentile(VVarraySort, N, 0.95);
	
	// identify which class of pixel
	if (VVmin == VVmax) {
		border = true;
	}
	if (!border && VVmin <= VVminLim && VV50 < VV50lim) {
		water = true;
	}
	if (water && perc95 >= percLim) {
		seldomWater = true;
	}
	
	// classify as high inclination terrain if applicable
	if (perc95 >= 0.8){
		highIncl = true;
	}
	
	// define the colour of the pixel
	let vis = terrainCol;
	if (border) {
		vis = borderCol;
	}
	if (water) {
		vis = waterCol;
	}
	if (seldomWater) {
		vis = seldomWaterCol;
	}
	if (!water && highIncl) {
		vis = highInclCol;
	}

	return vis
}
