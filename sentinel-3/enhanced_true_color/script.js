// Sentinel-3 - Enhanced natural colors 
// Author: Annamaria Luongo (Twitter: @annamaria_84, https://www.linkedin.com/in/annamaria-luongo-RS) 
// CC BY 4.0 International - https://creativecommons.org/licenses/by/4.0/ 

function stretch(val, min, max) { return (val - min) / (max - min); }

var brightness = 1.0; // default value is 1.0 for land, brightness<=0.3 for clouds or snow/ice; 
var index = (B04 - B08) / (B06 + B09); // used for enhance sea visualization

var band1 = brightness * (stretch(B09, 0, 0.25) - 0.1 * stretch(B14, 0, 0.1));
var band2 = brightness * (1.1 * stretch(B06, 0, 0.25) - 0.1 * stretch(B14, 0, 0.1));
var band3 = brightness * (stretch(B04, 0, 0.25) - 0.1 * stretch(B14, 0, 0.1) + .01 * stretch(index, 0.5, 1));

return [band1, band2, band3];
