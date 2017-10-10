// ***
// Visualizing (wild)fires in Sentinel-2 imagery
// For use in Sinergise EO Browser (http://apps.sentinel-hub.com/eo-browser)
// Pierre Markuse (@pierre_markuse)
// ***
// Functions
function A(a, b) {return a + b};
function stretch(val, min, max)  {
	return (val - min) / (max - min);
}

// Band combinations
var NaturalColors = [stretch(3.1 * B04,0.05,0.9), stretch(3 * B03,0.05,0.9), stretch(3.0 * B02,0.05,0.9)];
var EnhancedNaturalColors = [stretch((3.1 * B04 + 0.1 * B05),0.05,0.9), stretch((3 * B03 + 0.15 * B08),0.05,0.9), stretch(3 * B02,0.05,0.9)];
var NIRSWIRColors = [stretch(2.6 * B12,0.05,0.9), stretch(1.9 * B08,0.05,0.9), stretch(2.7 * B02,0.05,0.9)];
var PanBand = [stretch(B08,0.01,0.99),stretch(B08,0.01,0.99),stretch(B08,0.01,0.99)];
var NaturalNIRSWIRMix = [stretch((2.1 * B04 + 0.5 * B12),0.01,0.99), stretch((2.2 * B03 + 0.5 * B08),0.01,0.99), stretch(3.2 * B02,0.01,0.99)];
var PanTintedGreen = [B08 * 0.2, B08, B08 * 0.2];
var Fire1OVL = [stretch((2.1 * B04 + 0.5 * B12),0.01,0.99)+1.1, stretch((2.2 * B03 + 0.5 * B08),0.01,0.99), stretch(2.1 * B02,0.01,0.99)];
var Fire2OVL = [stretch((2.1 * B04 + 0.5 * B12),0.01,0.99)+1.1, stretch((2.2 * B03 + 0.5 * B08),0.01,0.99)+0.5, stretch(2.1 * B02,0.01,0.99)];
// Choose a Color, Band Combination, or make up your own visual
// In case it doesn't have to look aesthetically pleasing you can put RED and YELLOW here 
var FIRE1 = Fire1OVL; // Outer fire zone, def = Fire1OVL
var FIRE2 = Fire2OVL; // Inner fire zone, def = Fire2OVL
// I recommend NaturalNIRSWIRMix or NIRSWIRColors for best visuals
// Try NaturalColors, EnhancedNaturalColors, PanTintedGreen, and PanBand as well
var NOFIRE = NaturalNIRSWIRMix;
// Using B12 and B11 to highlight possible fires in two zones to get some more distinction
// Increase SENSITIVITY for more possible fires and more wrong indications
var SENSITIVITY = 1.0;
return (A(B12, B11) > (1.0 / SENSITIVITY))
? (A(B12, B11) > (2.0 / SENSITIVITY)) ? FIRE2 : FIRE1
: NOFIRE;
