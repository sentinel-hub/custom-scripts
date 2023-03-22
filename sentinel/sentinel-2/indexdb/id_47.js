//VERSION=3
// Modified Triangular Vegetation Index 2  (abbrv. MTVI2)
//
// General formula: (1.5 * (1.2 * (800nm - 550nm) - 2.5 * (670nm - 550nm)) / sqrt((2 * 800nm + 1)^2 - (6 * 800nm - 5 * sqrt(670nm))-0.5 )
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=47
//

let index = 1.5 * (1.2 * (B08 - B03) - 2.5 * (B04 - B03)) / Math.sqrt(Math.pow((2.0 * B08 + 1.0), 2.0) - (6.0 * B08 - 5.0 * Math.sqrt(B04)) - 0.5);
let min = -0.597;
let max = 1.035;
let zero = 0.0;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.
// This index crosses zero, so a diverging color map is used. To tweak the value of the break in the color map, change the variable 'zero'.

let underflow_color = [1, 1, 1];
let low_color = [208/255, 88/255, 126/255];
let high_color = [241/255, 234/255, 200/255];
let zero_color = [0, 147/255, 146/255];
let overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, zero, max],
[
	underflow_color,
	low_color,
	zero_color, // divergent step at zero
	high_color,
	//overflow_color // uncomment to see overflows
]);
