//
// Burned Area Index for Sentinel-2   (abbrv. BAIS2)
// Based on DOI: 10.3390/ecrs-2-05177 
// 2nd International Electronic Conference on Remote Sensing, Volume: Proceedings, 2(7), 364
// By Federico Filipponi of ISPRA
// URL https://www.researchgate.net/publication/323964124_BAIS2_Burned_Area_Index_for_Sentinel-2
// Adapted by Harel Dan. @hareldan, harel.dunn@gmail.com
//

let index = (1-((B06*B07*B8A)/B04)**0.5)*((B12-B8A)/((B12+B8A)**0.5)+1);
let min = 0;
let max = 0.99;
let zero = 0.5;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.
// This index crosses zero, so a diverging color map is used. To tweak the value of the break in the color map, change the variable 'zero'.

let underflow_color = [1, 1, 1];
let low_color = [0/255, 0/255, 255/255];
let high_color = [255/255, 20/255, 20/255];
let zero_color = [250/255, 255/255, 10/255];
let overflow_color = [255/255, 0/255, 255/255];

return colorBlend(index, [min, min, zero, max],
[
	underflow_color,
	low_color,
	zero_color, // divergent step at zero
	high_color,
	overflow_color // uncomment to see overflows
]);
