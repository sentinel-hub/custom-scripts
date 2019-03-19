# Collection of custom scripts
## Sentinel Hub Custom Script Contest
<a href="https://www.sentinel-hub.com/contest"><img alt="Sentinel Hub Custom Script Contest" style="border-width:0" src="https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/Sentinel_Hub_Custom_Script_Contest_2019.jpg" /></a>


## Custom Scripts Repository

This repository contains a collection of custom scripts for [Sentinel-Hub](https://www.sentinel-hub.com/), which can be fed to the services via the URL.

Scripts are organised by sensors supported on Sentinel-Hub:
  - [Sentinel-2](#sentinel-2)
  - [Landsat-8](#landsat-8)
  - [MODIS](#modis)

You are invited to publish your own scripts - see [howto](#howto).

## <a name="sentinel-2"></a>Sentinel-2
Dedicated to supplying data for [Copernicus services](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2), Sentinel-2 carries a multispectral imager with a swath of 290 km. The imager provides a versatile set of 13 spectral bands spanning from the visible and near infrared to the shortwave infrared, featuring four spectral bands at 10 m, six bands at 20 m and three bands at 60 m spatial resolution. As indices primarily deal with combining various band reflectances, the table of 13 bands is given here for reference (see [here](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/msi-instrument){:target="_blank"} for details). The names of the Sentinel-2 bands at your disposal are *B01*, *B02*, *B03*, *B04*, *B05*, *B06*, *B07*, *B08*, *B8A*, *B09*, *B10*, *B11* and  *B12*.


#### Popular RGB composites
 - [Natural color](sentinel-2/natural_color) product computed correctly to match the color perceived by the human eye.
 - [True color](sentinel-2/true_color) simplistic true color image from red, green and blue bands.
 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})

#### Remote sensing indices
 - [False color infrared](sentinel-2/false_color_infrared)
 - [NDVI](sentinel-2/ndvi) - normalized difference vegetation index
 - [NDVI uncertainty](sentinel-2/ndvi_uncertainty) - visualization of uncertainty of NDVI due to uncertainty in band values
 - [collection](sentinel-2/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}
 - [ARI](sentinel-2/ari) - anthocyanin reflectance index
 - [ARVI](sentinel-2/arvi) - atmospherically resistant vegetation index 
 - [CHL_REDEDGE](sentinel-2/chl_rededge) - chlorophyll red-edge
 - [EVI](sentinel-2/evi) - enhanced vegetation index
 - [EVI2](sentinel-2/evi2) - enhanced vegetation index 2
 - [GNDVI](sentinel-2/gndvi) - green normalized difference vegetation index
 - [MCARI](sentinel-2/mcari) - modified chlorophyll absorption in reflectance index
 - [MSI](sentinel-2/msi) - moisture stress index
 - [NBR](sentinel-2/nbr) - normalized burn ratio  
 - [NDII](sentinel-2/ndii) - normalized difference 819/1600 NDII
 - [NDSI](sentinel-2/ndsi) - normalised difference snow index  
 - [NDWI](sentinel-2/ndwi) - normalized difference water index  
 - [PSSRB1](sentinel-2/pssrb1) - simple ratio 800/650 pigment specific simple ratio B1  
 - [SAVI](sentinel-2/savi) - soil adjusted vegetation index  
 - [SIPI1](sentinel-2/sipi1) - structure insensitive pigment index
 
 
 


#### Cloud detection algorithms
 - [Cohen-Braaten-Yang cloud detection](sentinel-2/cby_cloud_detection/)
 - [Hollstein Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels detection](sentinel-2/hollstein)


#### Snow detection algorithms
- [Snow classifier](sentinel-2/snow_classifier/)

## <a name="landsat-8"></a>Landsat-8
The Landsat program is the longest running enterprise for acquisition of satellite imagery of Earth, running from 1972. The most recent, [Landsat 8](http://landsat.usgs.gov/landsat8.php){:target="_blank"}, was launched on February 11, 2013. Landsat-8 data has 11 spectral bands with spatial resolutions ranging from 15 to 60 meters. The names of the Landsat-8 bands at your disposal are *B01*, *B02*, *B03*, *B04*, *B05*, *B06*, *B07*, *B08*, *B09*, *B10* and *B11*.

#### Remote sensing indices
  - [collection](landsat-8/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}


## <a name="modis"></a>MODIS
The Moderate Resolution Imaging Spectroradiometer (MODIS) MCD43A4 version 6 on Sentinel Hub is hosted at Amazon Web Services (AWS). Dataset is updated daily and provides the 500 meter Nadir Bidirectional reflectance distribution function Adjusted Reflectance (NBAR) data of MODIS "land" bands 1-7: *B01*, *B02*, *B03*, *B04*, *B05*, *B06* and *B07*.

#### Remote sensing indices
  - [collection](modis/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}

# <a name="howto"></a>Adding new custom scripts
Have a look at the [template](example) and follow the procedure described there.  


<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
