/*
Author of the script: Bence Mélykúti, DPhil (Oxf)
*/


var estimator = -1.76e-05 + 10000*(-0.0003402*B01 -0.0004585*B02 + 0.001415*B03 + 0.01254*B04 -0.01112*B05 -0.01346*B06 + 0.002762*B07 + 0.002481*B08 + 0.009605*B8A + 0.001247*B09 -0.01462*B11 + 0.00406*B12);

function clamp (a) {
  return a<-1 ? 0 : a > 1 ? 1 : (1+a)/2;
}

function cividis (x) {
  // x must be in [0,1]
  // https://github.com/matplotlib/matplotlib/blob/master/lib/matplotlib/_cm_listed.py
  return [x*0.995737, x*0.909344+(1-x)*0.135112, x*0.217772+(1-x)*0.304751];
}

var NDWI = (B03 - B08) / (B03 + B08);

return NDWI < 0 ? [2.5*B04, 2.5*B03, 2.5*B02] : cividis(clamp(estimator));
