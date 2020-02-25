/*
"Selective Enhancement based on Indices"
Interactive enhancement masks for alernate selection of Land x Water/Snow/Vegetation, based on NDWI, NDSI and NDVI Indices, for Sentinel-2 
(see Indices at  https://custom-scripts.sentinel-hub.com/#sentinel-2)
By Sérgio A. J. Volkmer (https://twitter.com/sergioajv1) * CC BY 4.0 International - https://creativecommons.org/licenses/by/4.0/
References: 
Selective treatment logics based on Simon Gascoin's "Better snow visualisation using NDSI" - https://www.sentinel-hub.com/contest
Enhancement functions based on Pierre Markuse's "Wildfire visualization" - https://custom-scripts.sentinel-hub.com/sentinel-2/markuse_fire/
NOTES for begginers (author too): Try to change values a bit to fit better for different situations; see comments after "//" if it helps. 
*/
// ENHANCEMENT FUNCTIONS (no parameters to adjust here; avoid changing these lines of functions):
function a(a, b) {return a + b};
// FUNCTION FOR CONTRAST:
function stretch(val, min, max) {return (val - min) / (max - min);} 
// FUNCTION FOR SATURATION (for Verse and Inverse, separately):
function satEnh_V(rgbArr) {
    var avg = rgbArr.reduce((a, b) => a + b, 0) / rgbArr.length;
    return rgbArr.map(a => avg * (1 - SATU_V) + a * SATU_V); }	
function satEnh_I(rgbArr) {
    var avg = rgbArr.reduce((a, b) => a + b, 0) / rgbArr.length;
    return rgbArr.map(a => avg * (1 - SATU_I) + a * SATU_I); } 
// FUNCTION CONTRAST + SATURATION (for Verse and Inverse, separately):
function applyEnh_V(bArr) {
	return satEnh_V([stretch(bArr[0], SminV, SmaxV), stretch(bArr[1], SminV, SmaxV), stretch(bArr[2], SminV, SmaxV)]); }
function applyEnh_I(bArr) {
	return satEnh_I([stretch(bArr[0], SminI, SmaxI), stretch(bArr[1], SminI, SmaxI), stretch(bArr[2], SminI, SmaxI)]); }
//==============================================================================
// *SETTINGS BEGIN HERE*: Choose adjustments to these parameters (for Verse and Inverse selections, separately):
// STRETCH CONTRAST (min/max: Shadow/Light; default=0.00/1.00; blackout-mask = 1,1): // TIP: avoid too different contrast for masks
var SminV = 0.05 ; // Shadows: Darken : >0 ; Lighten <0
var SmaxV = 0.95 ; // Lights:  Darken : >1 ; Lighten <1
var SminI = 0.05 ; // Shadows: Darken : >0 ; Lighten <0
var SmaxI = 0.95 ; // Lights:  Darken : >1 ; Lighten <1
// SATURATION:
var SATU_V = 1.10 ; // standard=1.00; monochromatic=0; 2x=2.00
var SATU_I = 1.10 ; // standard=1.00; monochromatic=0; 2x=2.00
//------------------------------------------------------------------------------
// INDEX: Choose "only one" as SELECTION MASK (activate it removing first "//"; default=NDWI2):
//var NDSI = (B03-B11)/(B03+B11);  // Discriminates WATER&SNOW x NON-WATER: standard SNOW ~ > 0.42
//var NDVI = (B08-B04)/(B08+B04);  // Discriminates VEGETATION x NON-VEG: ~ Water<0 Soil,Sand,Snow,Clouds=-.1,+.1 LowVeg=.2,.4 DenseVeg>.4
var NDWI2 = (B03-B08)/(B03+B08); // Discriminates WATER x NON-WATER: standard WATER limit ~ > 0.3
//------------------------------------------------------------------------------
// BAND COMPOSTIONS: [RED, GREEN, BLUE]; (more customised compostions can be added to list below) // Enhancement description:
// (activate compositions removing first "//").
// A) Proposed for VERSE SELECTION (Water/NDWI, Vegetation/NDVI, Snow/NDSI):
var NATURAL_REDGE = [(B04*4.0), (B03*2.8+B06*1.5), (B02*3.5)]; // Near Natural; turbidity and algae RedEdge
//var FALSECOLOR_NIR = [(B08*2.3), (B03*1.0+B05*2.0), (B02*2.7)]; // Bluish water NIR; algae RedEdge
// B) Proposed for INVERSE SELECTION (LAND):
var NATURAL_NIR = [(B04*3.0+B05*1.0), (B03*3.0+B08*1.0), (B02*3.5)] ; // Near Natural; Vegetation NIR 
//var NATURAL_SWIR = [(B04*2.6+B12*0.8), (B03*3.0+B08*0.5), (B02*3.0)] ; // Bare soil SWIR; Vegetation NIR
//var GEOLOGY_SWIR = [(B12*2.2), (B04*1.4+B08*1.0), (B02*2.5)] ; // Geology SWIR; Vegetation NIR
//------------------------------------------------------------------------------
// SET BAND COMPOSTIONS (for each mask; may use same COMPO for both, or switch each other, according to necessity): 
var MaskVERSE   = NATURAL_REDGE ; // Copy composition here
var MaskINVERSE = NATURAL_NIR ;  // Copy composition here
//------------------------------------------------------------------------------
var EnhVERSE   = applyEnh_V(MaskVERSE)  ; // These two lines recall to FUNCTION CONTRAST + SATURATION;
var EnhINVERSE = applyEnh_I(MaskINVERSE); // no parameters to adjust here; avoid changing these two lines.
//------------------------------------------------------------------------------
// RETURNs on screen selected ENHANCEMENT, according to Indices above, and limits below (choose "only one" line to remove "//"; default NDWI2):
//return ( NDSI > 0.42 ) ? EnhVERSE : EnhINVERSE ; // For SNOWY areas only
//return ( NDVI > 0.4 ) ? EnhVERSE : EnhINVERSE ; // For VEGETATION areas only
return ( NDWI2 > 0.1 ) ? EnhVERSE : EnhINVERSE ; // LAND x WATER: limit lowered to take clouds w/ water
//