/*
Name:    Sentinel-2 Water Quality (Se2WaQ) 
Version: 1.0
Date:    2020-01-31

Author:      Nuno Sidónio Andrade Pereira
Affiliation: Polytechnic Institute of Beja, Portugal
License:     Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)

Refs.: [1]M. Potes et al., “Use of Sentinel 2 – MSI for water quality 
          monitoring at Alqueva reservoir, Portugal,” Proc. Int. Assoc. 
          Hydrol. Sci., vol. 380, pp. 73–79, Dec. 2018.

       [2]K. Toming, T. Kutser, A. Laas, M. Sepp, B. Paavel, and T. Nõges,
          “First Experiences in Mapping Lake Water Quality Parameters with
          Sentinel-2 MSI Imagery,” Remote Sens., vol. 8, no. 8, p. 640, 
          Aug. 2016.
*/

// user defined FLAGs
var FLAGparam = 5;
var FLAGbackGround = 2;

// Water-land contrast index (to define the background)
var NDWI = index(B03, B08); 

// Background indexes                           
var Black = [0];                                       // FLAGbackGround = 0
var NDVI = index(B08, B04);                            // FLAGbackGround = 1
var TrueColor = [B04*2.5, B03*2.5, B02*2.5];           // FLAGbackGround = 2

// Empirical models
var Chl_a = 4.26 * Math.pow(B03/B01, 3.94);            // FLAGparam = 0; S2-L2A; [1] Unit: mg/m3;        
var Cya = 115530.31 * Math.pow(B03 * B04 / B02, 2.38); // FLAGparam = 1; S2-L2A; [1] Unit: 10^3 cell/ml; 
var Turb = 8.93 * (B03/B01) - 6.39;                    // FLAGparam = 2; S2-L2A; [1] Unit: NTU;          
var CDOM = 537 * Math.exp(-2.93*B03/B04);              // FLAGparam = 3; S2-L1C; [2] Unit: mg/l;         
var DOC = 432 * Math.exp(-2.24*B03/B04);               // FLAGparam = 4; S2-L1C; [2] Unit: mg/l;         
var Color = 25366 * Math.exp(-4.53*B03/B04);           // FLAGparam = 5; S2-L1C; [2] Unit: mg.Pt/l;      

// Numerical values for the scales of parameters
var scaleChl_a = [0, 6, 12, 20, 30, 50];
var scaleCya   = [0, 10, 20, 40, 50, 100];
var scaleTurb  = [0, 4, 8, 12, 16, 20];
var scaleCDOM  = [0, 1, 2, 3, 4, 5];
var scaleDOC   = [0, 5, 10, 20, 30, 40];
var scaleColor = [0, 10, 20, 30, 40, 50];

// Colors for the scales
var s = 255;
var colorScale = 
  [
   [73/s, 111/s, 242/s],
   [130/s, 211/s, 95/s],
   [254/s, 253/s, 5/s],
   [253/s, 0/s, 4/s],
   [142/s, 32/s, 38/s],
   [217/s, 124/s, 245/s]
  ];

// Image generation
if (NDWI<0) {
  if ( FLAGbackGround == 0 ) {
    return Black;
  } else if ( FLAGbackGround == 1 ) {
    return [0, .5*(NDVI+1), 0];
  } else if ( FLAGbackGround == 2 ) {
    return TrueColor;
  }
} else {
  switch ( FLAGparam ) {
    case 0:
     return colorBlend(Chl_a, scaleChl_a, colorScale);
     break;
    case 1:
      return colorBlend(Cya, scaleCya, colorScale);
      break;
    case 2:
      return colorBlend(Turb, scaleTurb, colorScale);
      break;
    case 3:
      return colorBlend(CDOM, scaleCDOM, colorScale);
      break;
    case 4:
      return colorBlend(DOC, scaleDOC, colorScale);
      break;
    case 5:
      return colorBlend(Color, scaleColor, colorScale);
      break;
    default:
      return TrueColor;
  }
}
