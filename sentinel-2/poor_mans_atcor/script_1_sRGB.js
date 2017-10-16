function sRGBenc(C) {
  return C < 0.0031308 ? (12.92 * C)
                       : (1.055 * Math.pow(C, 0.41666) - 0.055);
}
return [B04, B03, B02].map(sRGBenc);
