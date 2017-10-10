function index(x, y) {
	return (x - y) / (x + y);
}

function clip(a) {
  return Math.max(0, Math.min(1, a));
}

if (bRatio > 1) { //cloud
  var v = 0.5 * (bRatio - 1);
  return [0.5 * clip(B04), 0.5 * clip(B03), 0.5 * clip(B02) + v];
}

if (bRatio > 0 && NGDR>0) { //cloud
  var v = 5 * Math.sqrt(bRatio * NGDR);
  return [0.5 * clip(B04) + v, 0.5 * clip(B03), 0.5 * clip(B02)];
}

let bRatio = (B02 - 0.175) / (0.39 - 0.175);
let NGDR = index(B02, B03);
let gain = 2.5;

return [B04, B03, B02].map(a => gain * a);
