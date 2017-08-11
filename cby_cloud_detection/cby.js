var bRatio = (B02 - 0.175) / (0.39 - 0.175);
var NGDR = (B02 - B03) / (B02 + B03);

function clip(a) {
  return Math.max(0, Math.min(1, a));
}

if (bRatio > 1) { //cloud
  var v = 0.5*(bRatio - 1);
  return [0.5*clip(B04), 0.5*clip(B03), 0.5*clip(B02) + v];
}

if (bRatio > 0 && NGDR>0) { //cloud
  var v = 5 * Math.sqrt(bRatio * NGDR);
  return [0.5 * clip(B04) + v, 0.5 * clip(B03), 0.5 * clip(B02)];
}

return [2*B04, 2*B03, 2*B02];