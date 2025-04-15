---
title: Satellite Derived Bathymetry Mapping - SDBM Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/satellite_derived_bathymetry_mapping-sdbm/
nav_exclude: true
examples:
- zoom: '11'
  lat: '45.62796439558515'
  lng: '13.311309814453125'
  datasetId: S2L2A
  fromTime: '2017-03-28'
  toTime: '2019-11-21'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/satellite_derived_bathymetry_mapping-sdbm/script.js
---

## General description of the script

Bathymetry data is needed for research in global processes in water (heat, salt, nutrients, pollutants transfer), undersea seismic events, navigation, commerce, marine habitats, disasters prevention and management (modelling tsunami, wave height estimation), risk assessment [11]. There are various methods to obtain bathymetry, from high-cost sonar measurements, special LIDAR which penetrates water column, time consuming in-situ measurements, to cost-effective and relatively fast Satellite Derived Bathymetry (SDB). Latter of course might not produce as accurate results as methods with sonar. Nevertheless, it provides effective evaluation of bathymetry in shallow waters. SDB is usually effective up to 20 meters, sometimes even 25 meters. There was already extensive research on topic of Satellite Derived Bathymetry [1,2,6,7,10,11]. Satellite Derived Bathymetry (SDB) method is therefore implemented in this script.

The main goal of the script is to identify shallow water depths (up to 18 meters) for selected area and specific scene. Sentinel Hub services provide cost-effective and fast evaluation of shallow bathymetry compared to extensive sonar or in-situ measurements of depth. Nevertheless, if input parameters scale (m1) and offset (m0) for calculation of Satellite Derived Bathymetry (SDB) are unknown, at least 5-10 calibration points with known depth [1] and minor work of the platform are needed. For some locations, bathymetry data can be found online or one could make in-situ measurements.

It should be noted that in general, script is simplified compared to the usual scientific approach on Satellite Derived Bathymetry as script does not include pre-processing of the scene (atmospheric correction, water reflectance, tide offset).

To detect water surface, simplified version of the existing custom script Water Bodiesí Mapping (WBM) is used [3]. Applicable filters can be used, to correct false detections of water surface. Water Bodies` Mapping is done on the basis of 6 bands (red, green, blue, NIR, SWIR1, SWIR2) and various indices used for water bodiesí detection (NDVI, MNDWI, NDWI, AWEISH, AWEINSH).

For detected water surfaces, Satellite Derived Bathymetry processing is done using band ratio calculation [1]. Procedure is based on ratio of two bands: blue/green or blue/red. Former ratio is better suited for depths between 5 to 18 meters and latter is better for depths lower than 5 meters. Ratio model uses a ratio of log-transformed water reflectance of bands.

On the basis of bands ratio, pseudo Satellite Derived Bathymetry (pSDB) is calculated. In addition, with tunable constants scale and offset (m1 and m0), Satellite Derived Bathymetry can be calculated with equation:
SDB = m1 * pSDB - m0

If m1 and m0 are known in advance (from articles etc.), pre-analysis and tuning of m1 and m0 is not needed. Result of the SDB equation are clamped with appropriate color mapping. Three different styles of bathymetry color mapping are available: blue ramp, blue blend and blue-black blend.

Nevertheless, if m1 and m0 are unknown, pre-analysis is needed to appropriately tune m1 and m0. Pre-analysis includes depth data for at least 5 to 10 points and minor work off the Sentinel Hub platform to correlate depth data and calculated pSDB for mentioned points. Example of off the Sentinel Hub platform procedure is described in Supplementary material document.

If the goal of the mapping is only visual presentation of bathymetry variability, already known values of m1 and m0 for similar scenes or location could be enough without any pre-analysis procedure.

There is also an option to use the script in multi-temporal analysis. As Satellite Derived Bathymetry procedure needs scenes with good and relatively constant conditions (no clouds, no/low turbidity, waves, wind),  therefore scenes for multi-temporal analysis must be selected by dates. 

Primarily, script is developed for Sentinel-2 L1C data source. Nevertheless, it can be used also for Landsat 8 and Sentinel-2 L2A. Latter data source images usually have less reflectance than L1C. Therefore, thresholds for water bodies mapping (MNDWI, NDWI) usually have to be adjusted.

Example of multi-temporal analysis on a basis of Sentinel-2 L2A for 5 scenes is in a VISUALIZATION shared link. Constants m1 and m0 were evaluated on the basis of linear regression pSDB and depth values for 168 locations. Thresholds for water bodies` mapping MNDWI and NDWI had to be adjusted to values 0.2.

## Details of the script

**APPLICABILITY OF THE SCRIPT:**

Script is in globally applicable in the coastal zones of reservoirs, ponds, lakes, seas and oceans.  It is recommended to use scenes with higher illumination and no or low presence of cloud coverage (<10%), shadow areas, turbidity, waves, wind. Uniform type of the sea bed or lake bottom is recommended for individual scene analysis.


**FALSE DETECTION PROBLEMS AND LIMITATIONS:**

There could be false detection of water surface as urban, bare soil, clouds, snow/ice and shadow areas. That could be mitigated with 2 filters in the script. Nevertheless, filters are only necessary for better visual representation.

For non-uniform scenes with low (black seaweed, dark bottom, shadow area) or high (high turbidity, shallow waters with bright bottom) reflectance of the bottom, script might not be applicable. That can result in over or under estimation of the depth.
SDB method is usually effective up to 20 meters, sometimes even 25 meters.

Script has simplified procedure for Satellite Derived Bathymetry method compared to usual research, as it does not include: water level difference between measured depths and water level at the time of satellite image acquisition (tide, storm surge, etc.), pre-processing of the scene (reflectance correction etc.) and validation procedure. Limitation of the script is also in case of unknown m1 and m0 as bathymetry data is needed and minor off the platform work.

Nevertheless, the script can serve perfectly as a tool for fast evaluation of shallow bathymetry.

In case of false or no detection of bathymetry depth, script could also serve to identify sediment transport, higher turbidity areas, white-water areas, bigger ships anchoring locations (illegal), or even ships movement direction by visible wake at the movement of the acquisition.

**HOW THE SCRIPT WORKS:**

1. In case of multi-temporal use, user has to select scenes dates using the date selection tool in Copernicus Browser, or the time_interval parameter of the API request;

2. In case default values of MNDWI and NDWI thresholds do not work as expected, values should be adjusted. 

3. In case of needed filtering of false water surface detection, user can try to turn on/off two filters: filter_UABS and var filter_SSI. Former is recommended and latter is recommended only in multi-temporal analysis. 

4. SDB can be calculated on the basis of two different band ratios: blue/green or blue/red. Therefore, user must set SDBgreen=true for former and SDBgreen=false for latter.
var SDBgreen=true;

5. There is an option (cs) for different visualization schemes for final SDB: 0-blue ramp, 1-blue blend, 2-blue-black blend (legends in Supplementary material - colour ramps are typically between 0 and 18 m).

6. The most important step is to define, if m1 and m0 are already known. If they are, final calculation of SDB follows. If that is the case, user most set
var preAnalysis=false;
and known values of m1 and m0. In this case output of the script should already be appropriate.
But if m1 and m0 are unknown, pre-analysis with tuning m1 and m0 is needed.  Therefore, user sets
var preAnalysis=true;

THIS SECTION IS KEPT FROM ORIGINAL SDBM CUSTOM SCRIPT README - BUT ESTIMATION RUNS DIFFERENTLY, SEE BELOW In this case user needs to have available depths for 5 to 10 points. It is recommended that this points are part of bathymetry cross section with variable depths (e.g. from 0 to 18 meters). For latter points calculated pSDB values are needed from pre-analysis. This can be obtained from green or red channel values of pre-analysis output. One has to be aware that red and green channels outputs adjusted pSDB values (multiplied or clamped). Therefore, that values must be first adjusted back to "true" pSDB value. Then, latter values with known depths are used in linear regression to obtain m1 and m0. Finally, preAnalyis=false and obtained m1 and m0 are set for final SDB analysis.

Pre-analysis with the new version of the script: if the parameter preAnalysis is set to `true`, the algorithm outputs the pSDB - preliminary satellite derived bathymetry value. This is a product of the band ratio calculation, without the linear scaling parameters m0 and m1 applied. The user can then find locations where depth is known, create small area of interest polygons, calculate the histogram of pSDB within these, and set the linear scaling parameters m0 and m1 to output correct depth as sdbAvg.

THIS IS NOW OUTDATED: In [supplementary material](supplementary_material.pdf), you can find detailed explanation of pre-analysis, tutorial on how to obtain multiplied pSDB values in green channel output and how to make linear regression. 

On the basis of the settings above, rest of the script gets executed. Firstly, values for setInputComponents is set on the basis of selected data source in Copernicus Browser. As Band 12 does not exist for Landsat 8, script automatically knows which data source is it analysing (Sentinel-2 or Landsat 8). On this basis, appropriate bands for NIR, SWIR1 and SWIR2 are taken.

Scene(s) are analysed for water surface. According to settings, pixels are filtered or not for false detection of water surface. Both is done on the basis of thresholds for different indices. This part of the script is actually simplified version of Water Bodies` Mapping script.

Next, if m1 and m0 are known and pre-analysis is not needed, pSDB and SDB values are calculated. On the basis of SDB values and appropriate definition of color scheme for output, script returns Satellite Derived Bathymetry map. Script is adjusted to show depths from 0 to 18 meters.

## Author of the script

Mohor Gartner

The script has been adapted to Copernicus Browser multi-temporal scene handling and index, eoBrowserStats and dataMask variables added by András Zlinszky - aided by GitHub Copilot.

## Description of representative images

1) The Gulf of Trieste, Northern Adriatic Sea, Sentinel-2 L1C, 2018-08-09

Input parameters:  MNDWI_thr=0.42, NDWI_thr=0.4, filter_UABS=true, filter_SSI=false, SDBgreen=true, m1=184.362, m0=190.037, nConst=1000

Image is analysed on the basis of Sentinel-2 data source from 9.8.2018. Pre-analysis procedure to obtain m1 and m0 values are described in Supplementary materials. General identification of water surface appropriate. Bathymetry depth is shown with blue ramp color scheme: from bright blue for depths from 0 to 1 meter to dark blue for depths more than 18 meters. Former can be observed more on the north and latter can be observed on the south part of the analysed area. Compared to bathymetry model, more of the open waters should have dark blue color as depth is deeper than 18 meters. Difference can be accounted to definition of m1 and m0 on linear regression of one cross section with 9 locations. As it can be seen for multi-temporal example in VISUALIZATION shared link, open waters have more appropriate color scheme. 

Nevertheless, near shore areas properly show higher bottom inclination in the east part of the coast (Croatian coast, Slovene coast, Italian coast from Trieste to Soca/Isonzo river mouth) and lower inclination on the north and west side of the coastline. Marano Lagoon has nicely show dynamic depths. Nevertheless, that could be also an effect of different sediment color. In addition, Secovlje Salina Nature Park in Slovenia realistically shows lower depths. 

Mostly it does not seem there would be any high active sediment transportation or water pollution at the time of the scene. Only exception is south part of an image where we can see bright trail in the open waters. Nearby we can also see some reflectance difference in direction north-south, which is probably result of satellite image acquisition.

Some brighter spots can be seen in the water, which are most probably ships. North west from Savudrija there is also visible ships` wake. In addition, detached breakwaters of the Port of Trieste are also visible.
![The Gulf of Trieste, Northern Adriatic Sea](fig/ex1_TheGulfOfTrieste_2018-08-09_S2_custom_script+legend.jpg)

2) West Palm Beach, USA, Sentinel L2A, 2019-12-07

Input parameters:  MNDWI_thr=0.42, NDWI_thr=0.4, filter_UABS=false, filter_SSI=false, SDBgreen=true/false, m1=59.9/6.5, m0=59.1/7, nConst=1000

Image is composed of two scenes. On the top is scene with blue/green ratio and on the bottom is the scene with blue/red ratio. Former is better for depths between 5 to 18 meters and latter is better suited for depths between 0 and 5 meters. Tunable constants m1 and m0 are result of research in an article [1]. Sentinel Hub does not have access to Sentinel L2A data for the scenes on which constants were obtained in the article (7.12.2017). Therefore scene from 7.12.2019 is used in this case. 

In both scenes water surface identification is mostly appropriate. Only some smaller inland water bodies are not identified. Nevertheless, latter are not important for bathymetry analysis. Inside the lagoon depth identification is not appropriate as contants (m1, m0) were not tuned to bathymetry there, but in the open east coast.

In the top scene (blue/green) bright blue identification is probably too wide. As already said, blue/green ratio is more appropriate for depths between 5 to 18 meters. So that is expected. Open waters on the east of the scene are more appropriately identified as depths at least 18 meters or more. Identified depths between 4 to 18 meters have expected transition. Parallel to the coast there are 3 ìlines from north to southî, which are in brighter color and identified as lower depth as surrounding bathymetry. On that location there is aggregated reef in surrounding sand bottom according to the Unified Reef Map [10].

In bottom scene (blue/red) there is better depth transition from 0 to 6 meters, closer to the coastline as expected. On more east side, depths are than falsely identified.

Both scenes have some image noise.
![West Palm Beach, USA](fig/ex2_WestPalmBeach-Florida-USA_2019-12-07_Sentinel-2B_L2A_SDBgreen_vs_SDBred+legend.jpg)

3) Tampa Bay, USA, Landsat 8, 2015-02-20

Input parameters:  MNDWI_thr=0.42, NDWI_thr=0.4, filter_UABS=true, filter_SSI=false, SDBgreen=true, m1=-66.05, m0=-65.89, nConst=1

Scene is analysed on a basis of constants m1 and m0 from article [6]. Also image (2015-02-20) is the same, but this script has no pre-processing to correct the image (atmospheric correction-DOS, water reflectance). Nevertheless, bathymetry identification is satisfactory for depths between 5 to 12 meters. Most probably depths identified as from 0 to 1 meter are too low because of blue/green ratio band.
![Tampa Bay, USA](fig/ex3_TampaBay-USA_2015-02-20_Landsat8_USGS_Custom_script+legend.jpg)

4) Mobile Bay, USA, Sentinel L1C, 2019-11-19

Input parameters:  MNDWI_thr=0.42, NDWI_thr=0.4, filter_UABS=true, filter_SSI=false, SDBgreen=true, m1=87.722, m0=86.63, nConst=1000

Constants m1 and m0 are based on linear regression analysis for 55 locations on selected cross sections with calculated pSDB from script pre-analysis and online bathymetry [7]. Scene is in the area of Mobile bay in front of Fort Morgan. Even though blue/green ratio is used, shallower depths (0-5 meters) are appropriately identified. Less appropriate is identified depths in more open waters on south, which are underestimated. Parallel to the shoreline there is identified strip from west to east, which it seems is underwater sandbar.
![Mobile Bay, USA](fig/ex4_MobileBay_USA_Sentinel-2_L1C_from_2019-11-19+legend.jpg)

5) San Luis Obispo Bay, USA, Sentinel L1C, 2018-02-16

Input parameters:  MNDWI_thr=0.42, NDWI_thr=0.4, filter_UABS=true, filter_SSI=false, SDBgreen=true, m1=242.06, m0=253.02, nConst=1000

Constants m1 and m0 are based on linear regression analysis for 170 locations on selected cross sections with calculated pSDB from script pre-analysis and online bathymetry [7].

Bathymetry in the bay is appropriately identified for shallow (0-5 meters) as for deeper water (5-18 meters). In addition, even open waters are appropriately identified as at least 18 meters depths.
In the bay, brighter dots are result of anchored smaller boats. 
![San Luis Obispo Bay, USA](fig/ex5_SanLuisObispoBay_USA_2018-02-16_Sentinel-2B_L1C+legend.jpg)

## Credits

[1] Caballero, I. and Stumpf, R.P. 2019. [Retrieval of nearshore bathymetry from Sentinel-2A and 2B satellites in South Florida coastal waters.](https://bit.ly/35px3mI){:target="_blank"}  

[2] Stumpf, R.P, Holderied, K., Sinclair, M.[Determination of water depth with high-resolution satellite imagery over variable bottom types.](https://bit.ly/2TXZRAF){:target="_blank"}

[3] Gartner, M. Water Bodies` Mapping Custom Script for Sentinel Hub

[4] Du, Y., Zhang Y., Ling, F., Wang, Q., Li, W., Li, X. 2016.[Water Bodiesí Mapping from Sentinel-2 Imagery with Modified Normalized Difference Water Index at 10-m Spatial Resolution Produced by Sharpening the SWIR Band.](https://bit.ly/2ZOjvA6){:target="_blank"}

[5] Feyisa, G.L., Fensholt R., Proud S. 2014. [Automated Water Extraction Index: A New Technique for Surface Water Mapping Using Landsat Imagery.](https://bit.ly/2ZTvCft){:target="_blank"}

## References

[6] Yunus, A.P., Dou, J., Song, X., Avtar, R. 2019. [High Resolution Sentinel-2 Images for Improved Bathymetric Mapping of Coastal and Lake Environments.](https://bit.ly/36ADynp){:target="_blank"}

[7] U. S. Geological Survey. [Topobathymetric Models. CoNED Applications Project TBDEM Data and Metadata Download.](https://bit.ly/36GEGWP){:target="_blank"}

[8] Trobec, A., Busetti, M., Zgur, F., Baradello, L., Babich, A., Cova, A., Gordini, E., Romeo, R., Tomini, I., Poglajen, S., Diviacco, P., Vrabec, M. 2018. [Thickness of marine Holocene sediment in the Gulf of Trieste (northern Adriatic Sea). University of Ljubljana, OGS ñ Instituto di Ocenografia e di Geofisica Sperimantale, Universita di Trieste, Harpha Sea d.o.o. Earth System Science Data.](https://bit.ly/30ZEH70){:target="_blank"}

[9] Trobec, A. and Busetti, M. (2017): [Models of the bathymetry, of the base and of the thickness of Holocene marine sediment in the Gulf of Trieste (Northern Adriatic Sea). OGS SNAP System.](https://bit.ly/2Rtni3){:target="_blank"}

[10] Florida Fish and Wildlife Conservation Commision. [Florida's Unified Reef Map.](https://bit.ly/2RHgNdb){:target="_blank"}

[11] Traganos, D. 2018. [Estimating Satellite-Derived Bathymetry (SDB) with the Google Earth Engine and Sentinel-2.](https://bit.ly/2GlD0qR){:target="_blank"}
