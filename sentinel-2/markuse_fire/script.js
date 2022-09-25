// VERSION=3
// QuickFire V1.0.0 by Pierre Markuse (https://twitter.com/Pierre_Markuse)
// Made for use in the Sentinel Hub EO Browser (https://apps.sentinel-hub.com/eo-browser/?)
// CC BY 4.0 International (https://creativecommons.org/licenses/by/4.0/)

function setup() {
  return {
    input: ["B01","B02","B03","B04","B08","B8A","B11","B12","CLP", "dataMask"],
    output: { bands: 4 }
  };
}

function stretch(val, min, max) {return (val - min) / (max - min);} 

function satEnh(arr, s) {
   var avg = arr.reduce((a, b) => a + b, 0) / arr.length;
   return arr.map(a => avg * (1 - s) + a * s);
}

 function layerBlend(lay1, lay2, lay3, op1, op2, op3) {
    return lay1.map(function(num, index) {
     return (num / 100 * op1 + (lay2[index] / 100 * op2) + (lay3[index] / 100 * op3));
    });
  }  

function evaluatePixel(sample) {
  const hsThreshold = [2.0, 1.5, 1.25, 1.0];
  const hotspot = 1;
  const style = 1;
  const hsSensitivity = 1.0;
  const boost = 1;
  
  const cloudAvoidance = 1;
  const cloudAvoidanceThreshold = 245;
  const avoidanceHelper = 0.8;

  const offset = -0.000;
  const saturation = 1.10;
  const brightness = 1.00;
  const sMin = 0.01;
  const sMax = 0.99;
  
  const showBurnscars = 0;
  const burnscarThreshold = -0.25;
  const burnscarStrength = 0.3;

  const NDWI = (sample.B03-sample.B08)/(sample.B03+sample.B08);
  const NDVI = (sample.B08-sample.B04)/(sample.B08+sample.B04);
  const waterHighlight = 0;
  const waterBoost = 2.0;
  const NDVI_threshold = -0.15;
  const NDWI_threshold = 0.15;
  const waterHelper = 0.2;
  
  const Black = [0, 0, 0];
  const NBRindex = (sample.B08-sample.B12) / (sample.B08+sample.B12); 
  const naturalColorsCC = [Math.sqrt(brightness * sample.B04 + offset), Math.sqrt(brightness * sample.B03 + offset), Math.sqrt(brightness * sample.B02 + offset)];
  const naturalColors = [(2.5 * brightness * sample.B04 + offset), (2.5 * brightness * sample.B03 + offset), (2.5 * brightness * sample.B02 + offset)];
  const URBAN = [Math.sqrt(brightness * sample.B12 * 1.2 + offset), Math.sqrt(brightness * sample.B11 * 1.4 + offset), Math.sqrt(brightness * sample.B04 + offset)];
  const SWIR = [Math.sqrt(brightness * sample.B12 + offset), Math.sqrt(brightness * sample.B8A + offset), Math.sqrt(brightness * sample.B04 + offset)];
  const NIRblue = colorBlend(sample.B08, [0, 0.25, 1], [[0/255, 0/255, 0/255],[0/255, 100/255, 175/255],[150/255, 230/255, 255/255]]);
  const classicFalse = [sample.B08 * brightness, sample.B04 * brightness, sample.B03 * brightness];
  const NIR = [sample.B08 * brightness, sample.B08 * brightness, sample.B08 * brightness];
  const atmoPen = [sample.B12 * brightness, sample.B11 * brightness, sample.B08 * brightness];
  var enhNaturalColors = [0, 0, 0];
  for (let i = 0; i < 3; i += 1) { enhNaturalColors[i] = (brightness * ((naturalColors[i] + naturalColorsCC[i]) / 2) + (URBAN[i] / 10)); }
  
  const manualCorrection = [0.00, 0.00, 0.00];
  
  var Viz = layerBlend(URBAN, naturalColors, naturalColorsCC, 10, 40, 50); // Choose visualization(s) and opacity here

  if (waterHighlight) {
    if ((NDVI < NDVI_threshold) && (NDWI > NDWI_threshold) && (sample.B04 < waterHelper)) {
     Viz[1] = Viz[1] * 1.2 * waterBoost + 0.1;
     Viz[2] = Viz[2] * 1.5 * waterBoost + 0.2;
    }
  } 
  
  Viz = satEnh(Viz, saturation);
  for (let i = 0; i < 3; i += 1) {
    Viz[i] = stretch(Viz[i], sMin, sMax); 
    Viz[i] += manualCorrection[i];  
  }

  if (hotspot) {  
    if ((!cloudAvoidance) || ((sample.CLP<cloudAvoidanceThreshold) && (sample.B02<avoidanceHelper))) {
     switch (style) {
       case 1:
        if ((sample.B12 + sample.B11) > (hsThreshold[0] / hsSensitivity)) return [((boost * 0.50 * sample.B12)+Viz[0]), ((boost * 0.50 * sample.B11)+Viz[1]), Viz[2], sample.dataMask]; 
        if ((sample.B12 + sample.B11) > (hsThreshold[1] / hsSensitivity)) return [((boost * 0.50 * sample.B12)+Viz[0]), ((boost * 0.20 * sample.B11)+Viz[1]), Viz[2], sample.dataMask]; 
        if ((sample.B12 + sample.B11) > (hsThreshold[2] / hsSensitivity)) return [((boost * 0.50 * sample.B12)+Viz[0]), ((boost * 0.10 * sample.B11)+Viz[1]), Viz[2], sample.dataMask];  
        if ((sample.B12 + sample.B11) > (hsThreshold[3] / hsSensitivity)) return [((boost * 0.50 * sample.B12)+Viz[0]), ((boost * 0.00 * sample.B11)+Viz[1]), Viz[2], sample.dataMask]; 
       break;
       case 2:
        if ((sample.B12 + sample.B11) > (hsThreshold[3] / hsSensitivity)) return [1, 0, 0, sample.dataMask]; 
       break;
       case 3:
        if ((sample.B12 + sample.B11) > (hsThreshold[3] / hsSensitivity)) return [1, 1, 0, sample.dataMask]; 
       break;
       case 4:  
        if ((sample.B12 + sample.B11) > (hsThreshold[3] / hsSensitivity)) return [Viz[0] + 0.2, Viz[1] - 0.2, Viz[2] - 0.2, sample.dataMask];
       break;
       default:
      }
    }
  }

  if (showBurnscars) {
   if (NBRindex<burnscarThreshold) {
     Viz[0] = Viz[0] + burnscarStrength;
     Viz[1] = Viz[1] + burnscarStrength;
   }
  }

  return [Viz[0], Viz[1], Viz[2], sample.dataMask];
}
