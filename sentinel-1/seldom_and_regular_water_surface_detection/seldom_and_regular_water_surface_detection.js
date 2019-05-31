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

// limiting parameters
var VVminLim=0.02;
var VV50lim=1;
var percLim=0.1;
var onlySeldomWater=false;

function setup (dss) {
	setInputComponents([dss.VV]);
	setOutputComponentCount(3);
}

// calculate percentile for the array
function percentile(sortedArray,N,percentile) {
	//position i of the percentile
	let i=percentile*N;
	// round up, it is needed if not integer
	i=Math.ceil(i)-1;// minus 1 because indexing starts with 0
	//percValue
	let percValue=sortedArray[i];
	return percValue;
}

// adding new element to array and sort in order, from lowest to highest
function sortArray(array,min,max,newVV) {
	// if new element <=min or >=max, then prepend or append. Otherwise search for the right index (j) to insert to.
	if (newVV <= min) {
		array.unshift(newVV);
	} else if (newVV >= max) {
		array.push(newVV);
	} else {
		//first figure out j of equal
		let Na=array.length;
		let found=false;
		let trueJ;
		//half bisection
		let j=Math.ceil(Na/2);
		let minJ=0;
		let maxJ=Na;
		while (!found) {			
			if (array[j]==newVV) {
				trueJ=j;
				found=true;
			} else if ((maxJ-minJ)<=1) {
					trueJ=j+1;
					found=true;			
			} else if (array[j]>newVV) {
				maxJ=j;
				max=array[j];
				j=minJ+Math.ceil((maxJ-minJ)/2);				
			} else if (array[j]<newVV) {
				minJ=j;
				min=array[j];
				j=minJ+Math.ceil((maxJ-minJ)/2);	
			}
		}
		//insert to new array
		array.splice(trueJ,0,newVV);
	}
	return array;
}

function evaluatePixel(samples) {
	//gather all values of one pixel for defined timeline in sorted order from lowest to highest
	var VVarraySort=[];
	// get avg, max
	var VVavg=0;
	// get max
	var VVmax=0;
	// get min
	var VVmin=1;
	var N=samples.length;
	// VV50
	var VV50=1;
	
	//loop through selected timeline
	for (var i=0;i<N;i++) {
		var VVi = samples[i].VV;
		// avg
		VVavg=VVavg+VVi;
		// max min
		if (VVi>VVmax) {VVmax=VVi;}
		if (VVi<VVmin) {VVmin=VVi;}	
		
		//// VV50 is calculated as VVi*50. Non-water areas have higher values (e.g. VV50>1), and water areas have lower values (e.g. VV50<1)
		// at the end of the loop, pixel with lower values (water presence) has lower VV50 value and pixel with higher values (non-water presence, high inclincation presence) has higher VV50 value
		// note: it would be more appropriate to check VV50 value in new loop. However, with suitable timeline samples it can be done in the same loop for improved performance. Therefore, if low VV50 is detected at least once in the loop for pixel, lower value means higher probability for water presence.
		if (VV50>VVmax) {VV50=VVi*50;}	
		////make sorted array
		//start to sort only when second sample evaluated
		if (i == 0) {
			// first sample, only add to array
			VVarraySort.push(VVi);
		} else if (i==1) {
			//only in case of adding second sample
			if (VVi < VVarraySort[0]) {
				VVarraySort.unshift(VVi);
			} else {
				VVarraySort.push(VVi);
			}
		} else {
			// for third or later sample it is needed to figure out where to add new element/sample to array
			VVarraySort=sortArray(VVarraySort,VVmin,VVmax,VVi);
		}
	}
		
	// calc avg value
	VVavg=VVavg/N;
	// possible classes for pixel, except "normal terrain"
	var border=false;
	var water=false;
	var seldomWater=false;
	var highIncl=false;
	
	//colour palette
	let terrainCol=[0,VVavg,0];
	if (onlySeldomWater) {
		var waterCol=terrainCol;
	} else {
		var waterCol=[0,0.66,1];
	}
		let seldomWaterCol=[1,0,0];
	let borderCol=[0.58,0.58,0.58];
	let highInclCol=[1,1,1];
	
	///identify which class of pixel
	if (VVmin==VVmax) {
		border=true;
	} else {
		//calculate percentile for classification of seldom water pixel if neeeded
		var perc95=percentile(VVarraySort,N,0.95);
		//first define if there was water presence on the pixel in the selected timeline
		if (VVmin<=VVminLim && VV50<VV50lim){
			water=true;
			// identify, if that water presence is only occasional
			if (perc95 >=percLim) {
				seldomWater=true;
			}
		}
	}	
	
	// classify as high inclination terrain if applicable
	if (perc95>=0.8){
		highIncl=true;
	}
	
	//// define the colour of the pixel
	// is this border pixel?
	return (border)
	? borderCol
	// is this water pixel?
	: (water)
		//is this pixel with occasional water presence
		? (seldomWater)
			? seldomWaterCol
			: waterCol
		// if there is no water presence (regular or seldom), check for potentinal high inclination
		: (highIncl)
			? highInclCol
			: terrainCol;
}
