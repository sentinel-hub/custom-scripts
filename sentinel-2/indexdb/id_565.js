//VERSION=3
// Tasselled Cap - Soil Brightness Index MSS  (abbrv. SBIMSS)
//
// General formula: 0.332*[500:600] + 0.603*[600:700] + 0.675*[700:800] + 0.262*[800:1100]
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=565
//

let index = 0.332 * B03 + 0.603 * B04 + 0.675 * B06 + 0.262 * B09;
let min = 0.137;
let max = 0.63;

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
