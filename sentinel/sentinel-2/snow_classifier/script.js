var NDSI = (B03 - B11) / (B03 + B11);
var NDVI = (B08 - B04) / (B08 + B04);
var gain = 2.5;

function si(a) {
    return (a>=0.4) ? 1 : (Math.abs(NDVI - 0.1) <= 0.025 ? 1 : 0);
}

function br(a) {
    return a>0.3;
}
   
var v = si(NDSI) && br(B03);

return (v==1) ? [1.0,0.8,0.4] : [B04, B03, B02].map(a => gain * a);