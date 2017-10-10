function clamp (a) {
  return a<0 ? 0 : a > 1 ? 1 : a;
}
function sigNDVI (b4, s4, b8, s8) {
  var sum = b8 + b4;
  var ndvi = (b8 - b4)/sum;
  var s_ndvi = 2 / (sum*sum) *
      Math.sqrt(b8*b8*s4*s4+b4*b4*s8*s8);
  var darkness = clamp(1-2*s_ndvi);
  return [
    0.9*clamp(1-ndvi)*darkness,
    0.8*clamp(ndvi)*darkness,
    0.1*darkness];
}
return sigNDVI(B04, 0.02, B08, 0.03);