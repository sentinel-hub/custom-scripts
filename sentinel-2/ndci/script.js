/*
Normalized difference chlorophyl index
https://pdfs.semanticscholar.org/2fba/caa14adb43d5bc8d2dd274304f60814d933c.pdf
https://www.sciencedirect.com/science/article/pii/S0380133018301801 
https://www.researchgate.net/publication/297718964_Comparison_of_satellite_reflectance_algorithms_for_estimating_chlorophyll-a_in_a_temperate_reservoir_using_coincident_hyperspectral_aircraft_imagery_and_dense_coincident_surface_observations 
*/

//white color represents pixels with no data
if ((B05+B04)==0) return [1,1,1]

return colorBlend(
  val,
  [-0.5,0, 0.1, 0.2, 0.3,1],
  [
   [0,0,1],
   [0,0.5,0.5],
   [1,0.3,0],
   [1,1,0],
   [0.2,0.8,0],
   [0,0.5,0]]);
