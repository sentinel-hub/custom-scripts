//VERSION=3

/*

Sentinel-2 Water Surface Visualizer
Author: Harel Dan (https://www.linkedin.com/in/harel-dan, https://twitter.com/HarelDan)

The script uses the small spectral changes found between adjacent bands to highlight areas of variance
in and otherwise homogemuous region. This tool works best on flat water surface, and can highlight water
eddies, temperature induced vortices, suspended matter in shallow water, oil slicks and sheens, and more.

*/

var v1 = Math.log((B02/B03)); 
var v2 = Math.log((B03/B04));
var v3 = Math.log((B04/B08));

return [v1,v2,v3];

// alternatively, one can enhace the green band fraction slightly more, by multiplying v1 with v2 in the R band
// return [v1*v2,v2,v3];
