//VERSION=3
// Chlorophyll Absorption Ratio Index 2  (abbrv. CARI2)
//
// General formula: (abs((a*[670]+[670]+b))/(a^2+1)^0.5)*([700]/[670])
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=250
//

// Initialize parameters
let a = 0.496;

let index = (Math.abs(((B05 - B03) / 150.0 * B04 + B04 + B03 - (a * B03))) / Math.pow((Math.pow(a, 2.0) + 1.0), 0.5)) * (B05 / B04);
let min = 0.019;
let max = 2.047;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

let underflow_color = [1, 1, 1];
let low_color = [208/255, 88/255, 126/255];
let high_color = [241/255, 234/255, 200/255];
let overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, max],
[
	underflow_color,
	low_color,
	high_color,
	//overflow_color // uncomment to see overflows
]);
