function visualize_idx(band1, band2, gain) {
  let idx = index(band1, band2);
  return [idx, band1* gain, band2 * gain];
}
//let ndsi_viz = visualize_idx(B03, B12, 1);
//let ndwi_viz = visualize_idx(B08, B12, 1.5);
let ndvi_viz = visualize_idx(B08, B04, 2);
//let gndvi_viz = visualize_idx(B08, B03, 1);
//let bndvi_viz = visualize_idx(B08, B02, 1.5);
//let gbndvi_viz = visualize_idx(B08, B04+B03, 1);
return ndvi_viz;
