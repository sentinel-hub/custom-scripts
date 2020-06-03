//indices to apply a mask to water bodies
let moisture = (B8A-B11)/(B8A+B11); 
let NDWI = (B03 - B08)/(B03 + B08);
let water_bodies = (NDWI-moisture)/(NDWI+moisture);
//indices to identify water plants and algae
let water_plants = (B05 - B04)/(B05 + B04);
let NIR2 = B04 + (B11 - B04)*((832,8 - 664,6)/(1613,7 - 664,6));
let FAI = B08 - NIR2;
//indices to apply a mask over clouds
//code taken from sentinel-2 custom scripts cby_cloud_detection by Peter Fogh
let bRatio = (B03 - 0.175) / (0.39 - 0.175);
let NDGR = index(B03, B04);
let gain = 2.5;
// natural color composition
let natural_color = [3*B04, 3*B03, 3*B02];
// cloud mask
function clip(a) {
 return Math.max(0, Math.min(1, a));
}

if (B11 > 0.1){
  if (bRatio > 1) { //cloud
     var v = 0.5*(bRatio - 1);
     return natural_color;
  }
  else if (bRatio > 0 && NDGR>0) { //cloud
     var v = 5 * Math.sqrt(bRatio * NDGR);
     return natural_color;
  }
}
//classify the presence of algae and water plants over water surfaces
if (NDWI < 0 && water_bodies > 0) return natural_color;
else return [FAI*8.5, water_plants*5.5, NDWI*1];
