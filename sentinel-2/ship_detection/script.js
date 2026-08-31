//VERSION=3
// ============================================================
// Purse-seiner / wake / net interpreter for Sentinel-2 L2A
// Paste into Copernicus Browser -> Custom script. Pick a MODE.
//   0 = Enhanced true color   -> wakes, slicks, sunglint texture
//   1 = Vessel highlighter     -> hulls flagged red on a dim base
//   2 = NIR/SWIR false color   -> hulls glow, water goes black
//   3 = Glint-stretch (mono)   -> max surface texture for nets/wakes
// Tune WATER_MAX / GAMMA / SHIP_T_* below.
// Note: per-pixel only (no spatial filtering in-browser). For wake/net
// edge enhancement and detection, use the offline toolkit (Run-SeinerScan.ps1).
// ============================================================

const MODE = 1;

const WATER_MAX = 0.06;   // reflectance mapped to white for water bands (raise to see more texture)
const GAMMA     = 0.6;    // <1 brightens wakes/slicks
const STRETCH   = 1.0;    // overall gain

const SHIP_T_NIR  = 0.045; // B08 threshold (hull bright in NIR vs dark water)
const SHIP_T_SWIR = 0.020; // B11/B12 threshold (water ~0 in SWIR)

function setup() {
  return { input: ["B02","B03","B04","B08","B11","B12","dataMask"], output: { bands: 3 } };
}
function s(x){ let v=Math.max(0,Math.min(1,(x/WATER_MAX)*STRETCH)); return Math.pow(v,GAMMA); }
function isShip(p){ return (p.B08>SHIP_T_NIR)||(p.B11>SHIP_T_SWIR)||(p.B12>SHIP_T_SWIR); }

function evaluatePixel(p){
  let tc=[s(p.B04),s(p.B03),s(p.B02)];          // S2 order: R=B04 G=B03 B=B02
  if (MODE===0) return tc;
  if (MODE===1){ if(isShip(p)) return [1.0,0.1,0.0]; return [tc[0]*0.5,tc[1]*0.5,tc[2]*0.7]; }
  if (MODE===2) return [Math.min(1,p.B12*12), Math.min(1,p.B08*12), s(p.B03)];
  if (MODE===3){ let g=s(p.B03); if(isShip(p)) return [1.0,0.7,0.0]; return [g,g,g]; }
  return tc;
}
