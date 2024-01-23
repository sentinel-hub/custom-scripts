---
title: White-Water Detection Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/white_water/
nav_exclude: true
examples:
- zoom: '15'
  lat: '39.60651'
  lng: '-9.09239'
  datasetId: S2L2A
  fromTime: '2023-04-04T00:00:00.000Z'
  toTime: '2023-04-04T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbIkIwMSIsIkIwMiIsIkIwMyIsICJkYXRhTWFzayJdLAogICAgb3V0cHV0OiB7IGJhbmRzOiA0IH0KICB9Owp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZSkgewogIAogIHJldHVybiBbMi41ICogc2FtcGxlLkIwMSwgMi41ICogc2FtcGxlLkIwMiwgMi41ICogc2FtcGxlLkIwMywgc2FtcGxlLmRhdGFNYXNrXTsKfQ==
---

## General description of the script

The script can be used for mapping white-water zones. Primary, the focus is on detection of white-water on the coastline (surf zone). Secondly, it can be also used for the detection of white-water on rivers. The most useful way to analyze white-water zones is with multi-temporal analysis. Nevertheless, it can be used also directly on one image.

White-water mapping is beneficial in different areas: improvement of bathymetric mapping from multi-temporal analysis of Sentinel 2 data (Evagorou et. al., 2019), erosion level evaluation, identification of reef or submerged reef, bathymetry slope evaluation, civil engineering (potential location for new ports, coastal protection structures and measures), maritime navigation, wave hydrodynamics (swell direction etc.), surf zone habitat identification, wave breaking numerical modeling validation, detection of new reef or island, wind conditions detection, ships location, new surf spots identification. There are also 3 alternative ways to use this custom script: detection of white-water on rivers, a rise of the sea level, snow and ice detection.

### Applicability of the script

The script is globally applicable on coastal zones in case of coastal white-water detection. It is even applicable in low waves conditions (Adriatic, Mediterranean). If snow, ice, and white-water are all present, the script is not able to differentiate between them. 

In the case of white-water detection on rivers, the script is applicable to bigger and wider rivers, where no snow and ice are present. In addition, the river should not have a higher amount of floating sediment.

In case of snow and ice detection, the script is applicable on snowy and ice zones, except on high-altitude terrain.

The script works the best while no clouds are present. Nevertheless, higher waves and wider white-water zones could be detected with the presence of clouds.

### False detection problems

In cloudy conditions, script can falsely detect cloud as white-water. Also for river in area with snow and ice coverage, everything is defined as white-water.

In some cases, shallow coastal waters with bright colour bed can be falsely detected as white-water.

### How the script works

The script on white-water detection is based on a statistical analysis of 13 bands and different indices (NDSI, NDWI, NDVI, moisture) with manual calibration. The first level of detection are limits for indices/bands: NDSI (land/water), moisture index, NDVI (land/water, correction of false detection of white-water on land), B10 (cirrus, high-altitude), B11, B12. The second level for a higher probability of white-water zones is done with stricter limits on some already used indices/bands.

Additional explanation on benefits of white-water mapping and on how the script works is awailable in [supplementary material](supplementary_material.pdf).

## Author of the script

Mohor Gartner

## Description of representative images

1. Nazare (Portugal)

![Nazare (Portugal)](fig/01_nazare_mt.png)
NazarÈ (Portugal) is very well known for the highest wave ever surfed (well at least among surfers). With the script, the location was analyzed with multi-temporal mosaic from 1.7.2015 to 16.4.2019 (maximum 5% cloud coverage, mosaic order: Least cloud coverage). It is very clear, that north beach is exposed to higher waves as the white-water zone is very wide. Therefore, erosion potential is higher and waves are likely higher. It seems that port is well protected by waves, as no white-water was detected inside the port bay. In addition, we can see, that the location of the entrance port is also good as it is in the south part of the beach where the white-water zone is less wide. Away from the coastline, we can also see the detection of some white-water. This white-water is probably caused by high winds, which can cause wave breaking without the impact of the shallow sea bed. We can also conclude that habitat for plants and animals can be quite intensive in variable in the wide zone of the north beach.

2. Victoria Falls (Zimbabwe)

![Victoria Falls (Zimbabwe)](fig/02_victoria_falls_mt.png)
Victoria Falls (Zimbabwe) is one of the biggest waterfalls in the world. With the script, the location was analyzed with multi-temporal mosaic from 1.7.2015 to 16.4.2019 (maximum 10% cloud coverage, mosaic order: Least cloud coverage). We can clearly identify the location of the fall, as all area with white-water is detected for the highest recorded flow in the period with Sentinel data. In addition, downstream the waterfall, there are also other locations with white-water. Therefore, we identified locations on the river with the highest erosion potential and presumably highest inclination of the river bed for the observed area.

3. West of Hˆfn (Iceland)

![West of Hˆfn (Iceland)](fig/03_west_of_hofn_iceland.jpg)
Wider is west of Hˆfn (Iceland) was analyzed with the script for 23.3.2018. On the water, the script clearly detects white-water close zone to the coastline and a bit away from the coastline, which implies (submerged) reef. On the land, areas with snow/ice coverage are detected. Only areas in the shadow are not detected.

4. Fierry Cross Reef (South China Sea)

![Fierry Cross Reef (South China Sea)](fig/04_fiery_cross_reef_mt.png)
China had built artificial islands in the South China Sea. With the script, we can identify if the location of the artificial island is suitable regarding water hydrodynamic. Location was analyzed with multi-temporal mosaic from 12.9.2015 to 18.4.2019 (maximum 25% cloud coverage, mosaic order: Least cloud coverage). We can notice, that white-water zone has some offset from the coastline. Therefore we can assume that there is submerged reef (natural or artificial submerged breakwater). White-water zone is wider on the northwest and west side of the island. We can assume that swell/waves from that direction are higher. In addition, potential erosion and run-up of the waves are also higher than on the northeast, east and southeast part of the island. Selection of port entrance on the northeast side is therefore appropriate. In addition, the port is even more protected from high wave on the northwest side with a wider strip of land. In case that submerged reef is artificial, that changed habitat for plants and animals.
Also timelapse was tested for the area. It can be seen, that in some cases white-water zone is presented, but not detected by the script as cirrus clouds prevent that detection.

5. Limassol (Cyprus)

![Limassol (Cyprus)](fig/05_limassol_cyprus_timelapse.gif)
Bathymetric map from multi-temporal analysis of Sentinel-2 data (Evagorou et al., 2019) processed 12 satellite images one for each month from 4.4.2017 to 18.2.2018. With the script, time-lapse animation was done for the later period (cloud coverage under 57%) on the east side of the study site. For satellite image on 19.1.2018, custom script clearly detects white-water zone. The later image is a basis from one of twelve images for mapping bathymetry (Evagorou et al., 2019). Therefore, with custom script detection of white-water, the study could exclude the later image as it was identified that the quality of the bathymetry map could be affected by sea state (waves). In the mentioned period there are some other dates with white-water zone detection, which are not included in the study (14.4.2017, 6.9.2017, 25.12.2017, 4.1.2018). In addition, we can see that custom script is also applicable in case of low waves in the Mediterranean Sea.  

[Supplementary material (PDF)](supplementary_material.pdf) includes other examples of custom script analysis for individual images.

## References

Some theory/projects, which support usefulness of white-water custom script:
- Denny, M., 1995. Survival in the Surf Zone. [American Scientist, Vol. 83., No. 2, pp. 166-173](https://www.jstor.org/stable/29775404 ){:target="_blank"}
- Evagorou, E., Mettas, C., Agapiou, A., Themistocleous, K., Hadjimitsis, D., 2019. [Bathymetric maps from multi-temporal analysis of Sentinel-2 data: the case study of Limassol, Cyprus.](https://www.adv-geosci.net/45/397/2019/adgeo-45-397-2019.pdf){:target="_blank"} Department of Civil Engineering and Geomatics, School of Engineering and Technology, Cyprus University of Technology.
- ISEAN, 2019. [Wave breaking phenomena.](https://www.insean.cnr.it/content/wave-breaking-phenomena){:target="_blank"} Marine Technology Research Institute.
- SINERGISE, 2019. [Sentinel 2 EO products.](https://www.sentinel-hub.com/develop/documentation/eo_products/Sentinel2EOproducts){:target="_blank"}

## Credits

Template script to make multi-temporal processing was used from [NDVI script](https://github.com/sentinel-hub/custom-scripts/blob/master/sentinel-2/max_ndvi/script.js){:target="_blank"}.
