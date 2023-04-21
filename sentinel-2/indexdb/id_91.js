//VERSION=3
// Tasselled Cap - brightness  (abbrv. SBI)
//
// General formula: 0.3037*[450:520] + 0.2793*[520:600] + 0.4743*[630:690] + 0.5585*[760:900] + 0.5082*[1150:1750] + 0.1863*[2080:2350]
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=91
//

let index = 0.3037 * B02 + 0.2793 * B03 + 0.4743 * B04 + 0.5585 * B08 + 0.5082 * B10 + 0.1863 * B12;
let min = 0.22;
let max = 0.727;

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
