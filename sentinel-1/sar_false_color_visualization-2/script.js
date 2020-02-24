// Sentinel-1 False-Color Visualization V1.0.0
// Twitter: Pierre Markuse (@pierre_markuse)
// Website: https://pierre-markuse.net/
// CC BY 4.0 International - https://creativecommons.org/licenses/by/4.0/

function stretch(val, min, max)  {
	return (val - min) / (max - min);
}

function satEnh(rgbArr) {
    var avg = rgbArr.reduce((a, b) => a + b, 0) / rgbArr.length;
    return rgbArr.map(a => avg * (1 - saturation) + a * saturation);
}

var BLUE = [0.0, 0.2, 1.0];
var GREEN = [0.0, 0.7, 0.0];
var BLACK = [0.0, 0.0, 0.0];
var RED = [1.0, 0.0, 0.0];

var water_normal = [stretch(VV*1,0.0,0.99),stretch(VV*8,0.0,0.99),0.5+VV*3+stretch(VH*2000,0.0,0.99)];
var water_bright = [stretch(VV*1.33,0.0,0.99),stretch(VV*10,0.0,0.99),0.5+VV*4+stretch(VH*3000,0.0,0.99)];
var oilspill_1 = [stretch(VV*5.0,0.2,0.99),0.0+stretch(VV*10,0.10,0.50),0.0+stretch(VV*20,0.10,0.50)];
var oilspill_2 = [stretch(VV*5.0,0.2,0.99),0.0+stretch(VV*10,0.15,0.40),0.1+stretch(VV*20,0.15,0.40)];
var oilspill_3 = [stretch(VV*5.0,0.2,0.99),0.1+stretch(VV*11,0.03,0.60),0.1+stretch(VV*23,0.01,0.58)];
var land_redder = [stretch(VV*3.4,-0.0,0.99),(stretch(VV*1.1,-0.0,0.99)+stretch(VH*8.75,-0.0,0.99)),stretch(VH*1.75,-0.0,0.99)];
var land_normal = [stretch(VV*3.0,-0.0,0.99),(stretch(VV*1.1,-0.0,0.99)+stretch(VH*8.75,-0.0,0.99)),stretch(VH*1.75,-0.0,0.99)];
var land_greener = [stretch(VV*3.0,-0.0,0.99),(stretch(VV*1.4,-0.0,0.99)+stretch(VH*9.75,-0.0,0.99)),stretch(VH*1.75,-0.0,0.99)];
var city = [0.9-VV-2*VH,0.9-VV-3*VH,0.9-0.3*VV-6*VH];


var watervis = water_normal;
var landvis = land_normal;
var water_threshold = 25; //lower means more water
var saturation = 1.0; //Standard 1.0
var brightness = 1.0; //Standard 1.0
var avoid_dark_land = 0; //0=off,1=on
var avoid_dark_land_threshold = 0.1; //Standard 0.05
var avoid_dark_water = 0; //0=off,1=on
var avoid_dark_water_threshold = 1.00; //Standard 1.00
var manualCorrection_water = [0.00, 0.00, 0.00];
var manualCorrection_land = [0.00, 0.00, 0.00];

var i = 0;
while (i<3) {
 watervis[i] = watervis[i] + manualCorrection_water[i];
 landvis[i] = landvis[i] + manualCorrection_land[i];
 landvis[i] = landvis[i] * brightness;
 i++;
};

var watervis = satEnh(watervis);
var landvis = satEnh(landvis);

if (avoid_dark_land) {
 var dark = landvis[0]+landvis[1]+landvis[2];
 if (dark < avoid_dark_land_threshold) {var landvis=BLUE;}; //Try other things than BLUE!
};

if (avoid_dark_water) {
 var dark = watervis[0]+watervis[1]+watervis[2];
 if (dark < avoid_dark_water_threshold) {var watervis=BLUE;}; //Try other things than BLUE!
};

return ((VV/VH) > water_threshold)
? watervis :
 landvis;
