/*
Author of the script: Thales Sehn Koerting
*/

// detection of vegetation
NDVI_RedEdge = (B08 - B05)/(B08 + B05)
threshold_vegetation = 0.45
Vegetation = NDVI_RedEdge > threshold_vegetation

// ceramic rooftop detection
RATIO_Red = B04/[B01+B02+B03+B04+B05+B06+B07]
NDBI = (B11 - B08)/(B11 + B08)
threshold_rooftop = 0.14
Rooftop = (RATIO_Red > threshold_rooftop) && (NDBI > threshold_rooftop)

// water detection
NDWI = (B03 - B08)/(B03 + B08)
threshold_water = 0.2
Water = NDWI > threshold_water

// gain to obtain smooth visualization
gain = 0.7
return [gain*Rooftop, gain*Vegetation, gain*Water]