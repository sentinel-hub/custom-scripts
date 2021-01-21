//VERSION=3
// Atmospherically Resistant Vegetation Index   (abbrv. ARVI)
//
// General formula: (NIR - RED - y * (RED - BLUE))/ (NIR + RED - y*(RED-BLUE))
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=168&rsindex_id=4

// Initialize parameters
let y = 0.143;

let index = (B05 - B04 - y * (B04 - B02)) / (B05 + B04 - y * (B04 - B01));
let min = -1.002;
let max = 0.934;
let zero = 0.0;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.
// This index crosses zero, so a diverging color map is used. To tweak the value of the break in the color map, change the variable 'zero'.

var underflow_color = [1, 1, 1];
var low_color = [208/255, 88/255, 126/255];
var high_color = [241/255, 234/255, 200/255];
var zero_color = [0, 147/255, 146/255];
var overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, zero, max],
[
	underflow_color,
	low_color,
	zero_color, // divergent step at zero
	high_color,
	//overflow_color // uncomment to see overflows
]);
