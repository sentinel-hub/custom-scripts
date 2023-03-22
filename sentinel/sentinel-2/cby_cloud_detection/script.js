function index(x, y) {
	return (x - y) / (x + y);
}

function clip(a) {
  return Math.max(0, Math.min(1, a));
}

let bRatio = (B03 - 0.175) / (0.39 - 0.175);
let NDGR = index(B03, B04);
let gain = 2.5;

if (B11>0.1 && bRatio > 1) { //cloud
  var v = 0.5*(bRatio - 1);
  return [0.5*clip(B04), 0.5*clip(B03), 0.5*clip(B02) + v];
}

if (B11 > 0.1 && bRatio > 0 && NDGR>0) { //cloud
  var v = 5 * Math.sqrt(bRatio * NDGR);
  return [0.5 * clip(B04) + v, 0.5 * clip(B03), 0.5 * clip(B02)];
}

return [B04, B03, B02].map(a => gain * a);
