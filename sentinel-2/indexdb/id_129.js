//
// Leaf Water Content Index  (abbrv. LWCI)
//
// General formula: log(1-(NIR-MIDIR))/(-log(1-(NIR-MIDIR)))
// This is an auto-generated script. Double checking the source information with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=129
//

// Initialize parameters
let MIDIR = 0.101;

let index = Math.log(1.0 - (B08 - MIDIR)) / (-Math.log(1.0 - (B08 - MIDIR)));
let min = -1.0;
let max = -1.0;

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
