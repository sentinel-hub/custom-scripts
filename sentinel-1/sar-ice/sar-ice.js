// Copyright (C) 2020 Martin Raspaud

function overlay(top, bottom) {
  var res = ((1 - 2 * top) * bottom + 2 * top) * bottom;
  return res;
}

function stretch(arr, min, max) {
  var delta = max - min;
  var offset = -min / delta;
  return arr/delta + offset;
}

function gamma(arr, val) {
  return arr ** (1.0 / val);
}

var mhv = Math.sqrt(HV + 0.002);
var mhh = Math.sqrt(HH + 0.002);
var ov = overlay(mhh, mhv);
var red = gamma(stretch(mhv, 0.02, 0.1), 1.1);
var green = gamma(stretch(ov, 0.0, 0.06), 1.1);
var blue = gamma(stretch(mhh, 0.0, 0.32), 1.1);
return [red, green, blue];
