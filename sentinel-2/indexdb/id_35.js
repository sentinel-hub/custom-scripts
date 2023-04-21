// Infrared percentage vegetation index
// URL https://www.indexdatabase.de/db/si-single.php?rsindex_id=35=&sensor_id=96

let index = ((B09) / (B09 + B05)) / (2) * (((B05 - B03) / (B05 + B03)) + 1);
let min = 0.028;
let max = 0.571;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

var underflow_color = [1, 1, 1];
var low_color = [208 / 255, 88 / 255, 126 / 255];
var high_color = [241 / 255, 234 / 255, 200 / 255];
var overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, max],
	[
		underflow_color,
		low_color,
		high_color,
		//overflow_color // uncomment to see overflows
	]);
