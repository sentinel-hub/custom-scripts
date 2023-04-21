// Sentinel-3 OLCI - Tristimulus

var red = Math.log(1.0 + 0.01 * B01 + 0.09 * B02+ 0.35 * B03 + 0.04 * B04 + 0.01 * B05 + 0.59 * B06 + 0.85 * B07 + 0.12 * B08 + 0.07 * B09 + 0.04 * B10);
var green= Math.log(1.0 + 0.26 * B03 + 0.21 *B04 + 0.50 * B05 + B06 + 0.38 * B07 + 0.04 * B08 + 0.03 * B09 + 0.02 * B10);
var blue= Math.log(1.0 + 0.07 * B01 + 0.28 * B02 + 1.77 * B03 + 0.47 * B04 + 0.16 * B05);

return [red,green,blue];

