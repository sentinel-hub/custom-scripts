//VERSION=3
// Chlorophyll Absorption Ratio Index  (abbrv. CARI)
//
// General formula: (700nm/670nm)*(sqrt((a*670+670nm+b)^2))/((a^2+1)^0.5)
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=142
//

let index = (B05 / B04) * (Math.sqrt(Math.pow(((B05 - B03) / 150.0 * 670.0 + B04 + (B03 - ((B05 - B03) / 150.0 * 550.0))), 2.0))) / (Math.pow(((B05 - B03) / Math.pow(150.0, 2.0) + 1.0), 0.5));
let min = 0.018;
let max = 5.295;

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
