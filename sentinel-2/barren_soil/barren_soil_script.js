
/*
Author: Monja Sebela
*/


function evaluatePixel(s) {
    let val = 2.5 * ((s[0].B11 + s[0].B04)-(s[0].B08 + s[0].B02))/((s[0].B11 + s[0].B04)+(s[0].B08 + s[0].B02));
    return [2.5* val, s[0].B08, s[0].B11];
}
function setup(ds) {
   setInputComponents([ds.B02, ds.B04, ds.B08, ds.B11, ds.B12]);
   setOutputComponentCount(3); }
