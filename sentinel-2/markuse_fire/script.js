// Wildfire and burn scar visualization in Sentinel-2 images V2.0.0
// Twitter: Pierre Markuse (@pierre_markuse)
// https://pierre-markuse.net/2018/04/30/visualizing-wildfires-burn-scars-sentinel-hub-eo-browser/
// CC BY 4.0 International - https://creativecommons.org/licenses/by/4.0/
function a(a, b) {return a + b};
function stretch(val, min, max) {return (val - min) / (max - min);}
function satEnh(rgbArr) {
    var avg = rgbArr.reduce((a, b) => a + b, 0) / rgbArr.length;
    return rgbArr.map(a => avg * (1 - saturation) + a * saturation); }
function highlightBurnscar(val, oLow, oHigh, deSat, darken) {
    if ((B12 + B11 > 0.05) && (val > 0)) {
        if (((B8A - B12) / (B8A + B12)) > oLow) {
            saturation = saturation - deSat;
            stretchMax = stretchMax + darken;
        } else {
            if (((B8A - B12) / (B8A + B12)) <= oHigh) {
                noFire[0] = noFire[0] + 0.2 * val;
                noFire[1] = noFire[1] + 0.05 * val;
            } else {
                noFire[0] = noFire[0] + 0.15 * val;
                noFire[1] = noFire[1] + 0.15 * val;
            }
        }
    }
}
function indexMap(ind, lVal, mVal, hVal, cont, dir, pal) {
  var col1=GREEN;var col2=YELLOW;var col3=RED;  
  if (pal == 1) {col1=CBL;col2=CBM;col3=CBH;} 
  if (pal == 2) {col1=OWNL;col2=OWNM;col3=OWNH;}         
    var lValCol = col1;
    var mValCol = col2;var hValCol = col3;
    if (dir == 1){
    	lValCol = col3;hValCol = col1;
    }
    if (cont == 0) {
        if (ind <= lVal) return lValCol; if ((ind > lVal) && (ind < hVal)) return mValCol; if (ind >= hVal) return hValCol;
      } else {
        return colorBlend(ind, [lVal, mVal,hVal], [lValCol,mValCol,hValCol]);
    }
}
function blend(bArr1, bArr2, opa1, opa2) {
    return bArr1.map(function(num, index) {
        return (num / 100 * opa1 + bArr2[index] / 100 * opa2);
    });
}
function applyEnh(bArr) {
    highlightBurnscar(burnscarHighlight, burnscarThresholdLow, burnscarThresholdHigh, burnscarDesaturateBackdrop, burnscarDarkenBackdrop);
    return satEnh([stretch(bArr[0], stretchMin, stretchMax), stretch(bArr[1], stretchMin, stretchMax), stretch(bArr[2], stretchMin, stretchMax)]);
}
var BLACK = [0.0, 0.0, 0.0];
var RED = [0.9, 0.1, 0.1];
var YELLOW = [0.9, 0.9, 0.1];
var GREEN = [0.0, 0.6, 0.0];
var CBL  = [0/255, 80/255, 0/255];
var CBM  = [120/255, 120/255, 230/255];
var CBH  = [70/255, 195/255, 255/255];
var OWNL = [0.0, 0.0, 0.0];
var OWNM = [0.0, 0.0, 0.0];
var OWNH = [0.0, 0.0, 0.0];
// Visualization style of the different fire zones
var Fire1OVL = [stretch((2.1 * B04 + 0.5 * B12), 0.01, 0.99) + 1.1, stretch((2.2 * B03 + 0.5 * B08), 0.01, 0.99), stretch(2.1 * B02, 0.01, 0.99)];
var Fire2OVL = [stretch((2.1 * B04 + 0.5 * B12), 0.01, 0.99) + 1.1, stretch((2.2 * B03 + 0.5 * B08), 0.01, 0.99) + 0.25, stretch(2.1 * B02, 0.01, 0.99)];
var Fire3OVL = [stretch((2.1 * B04 + 0.5 * B12), 0.01, 0.99) + 1.1, stretch((2.2 * B03 + 0.5 * B08), 0.01, 0.99) + 0.5, stretch(2.1 * B02, 0.01, 0.99)];
// Band combinations (To get quicker processing you should comment out all those you are not using in the Settings further down)
var NaturalColors = [2.9 * B04, 3.1 * B03, 3.0 * B02];
// var EnhancedNaturalColors = [2.8 * B04 + 0.1 * B05, 2.8 * B03 + 0.15 * B08, 2.8 * B02];
// var NaturalNIRSWIRMix = [2.1 * B04 + 0.5 * B12, 2.2 * B03 + 0.5 * B08, 3.0 * B02];
// var NIRSWIRColors1 = [2.6 * B12, 1.9 * B08, 2.7 * B02];
var NIRSWIRColors2 = [2.4 * B12, 1.7 * B8A, 2.2 * B05];
// var NIRSWIRColors3 = [0.5 * (B12 + B11) / 4 / B07, 0.8 * B8A, 1 * B07];
// var NIRSWIRColors4 = [2.0 * B12, 1.1 * B11, 1.6 * B08];
// var FalseColor = [B08 * 2, B04 * 2, B03 * 2];
// var NatFalseColor = [B12 * 2.6, B11 * 2, B04 * 2.7];
// var Vegetation = [B11 * 2.4, B8A * 2, B04 * 2.9];
// var PanBand = [B08, B08, B08];
// var NBR8A12 = indexMap((B8A - B12) / (B8A + B12), -0.8, -0.4, 0.0, 1, 1, 1);
// var NDVI = indexMap((B08 - B04) / (B08 + B04), -0.4, -0.2, 0.0, 1, 1, 1);
// Settings
// Fire (hot spot) visualization
var fire1 = Fire1OVL;
var fire2 = Fire2OVL;
var fire3 = Fire3OVL;
// Used band combinations and mixing
var layer1 = NIRSWIRColors2;
var layer2 = NaturalColors;
var layer1Amount = 0;
var layer2Amount = 100;
// Influence contrast and saturation
var stretchMin = 0.00;
var stretchMax = 1.00;
var saturation = 1.00;
// Fire sensitivity (Default = 1.00), higher values increase fire (hot spot) detection and false positives
var fireSensitivity = 1.00;
// Burn scar visualization
var burnscarHighlight = 0.00;
var burnscarThresholdLow = -0.25;
var burnscarThresholdHigh = -0.38;
var burnscarDesaturateBackdrop = 0.25;
var burnscarDarkenBackdrop = 0.25;
// Manually influence RGB output
var manualCorrection = [0.00, 0.00, 0.00];
// Image generation and output
noFire = blend(layer1, layer2, layer1Amount, layer2Amount);
finalRGB = applyEnh(noFire).map(function(num, index) {
    return num + manualCorrection[index];});
return (a(B12, B11) > (1.0 / fireSensitivity)) ?
    (a(B12, B11) > (2.0 / fireSensitivity)) ? fire3 :
    (a(B12, B11) > (1.5 / fireSensitivity)) ? fire2 : fire1 :
   finalRGB;
