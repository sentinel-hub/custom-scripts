# Collection of custom scripts

## Custom Scripts Repository

This repository contains a collection of custom scripts for [Sentinel Hub](https://www.sentinel-hub.com/), which can be fed to the services via the URL.

Scripts are organised by sensors supported on Sentinel Hub:
  - [Sentinel-1](#sentinel-1)
  - [Sentinel-2](#sentinel-2)
  - [Sentinel-3](#sentinel-3)
  - [Sentinel-5P](#sentinel-5P)
  - [Landsat 5 and 7](#landsat-57)
  - [Landsat-8](#landsat-8)
  - [MODIS](#modis)

You are invited to publish your own scripts - see [howto](#howto).


## <a name="sentinel-1"></a>Sentinel-1
The Sentinel-1 imagery is provided by two polar-orbiting satellites, operating day and night performing C-band synthetic aperture radar imaging, enabling them to acquire imagery regardless of the weather. Main applications are for monitoring sea ice, oil spills, marine winds, waves & currents, land-use change, land deformation among others, and to respond to emergencies such as floods and earthquakes. The identical satellites orbit Earth 180° apart and at an altitude of almost 700 km, offering a global revisit time of 6-12 days depending on the area (check observation scenario). Sentinel-1’s radar can operate in four modes. The spatial resolution depends on the mode: approx. 5 m x 20 m for IW mode and approx. 20 m x 40 m for EW mode. See [Copernicus services](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-1/) for more details.

#### Agriculture and forestry algorithms 
 - [SAR for deforestation](sentinel-1/sar_for_deforestation)

#### Disaster management and prevention algorithms
 - [Seldom and regular water surface detection](sentinel-1/seldom_and_regular_water_surface_detection)
 - [Forest Hurricane](sentinel-1/forest_hurricane)

#### Urban planning algorithm
 - [Urban areas](sentinel-1/urban_areas)

#### Marine environment algorithm
 - [Water surface roughness visualization](sentinel-1/water_surface_roughness_visualization)

#### Other available scripts
 - [SAR false color visualization](sentinel-1/sar_false_color_visualization)
 - [SAR false color visualization 2](sentinel-1/sar_false_color_visualization-2)
 - [SAR multi-temporal backscatter coefficient composite](sentinel-1/sar_multi-temporal_backscatter_coefficient_composite)
 

## <a name="sentinel-2"></a>Sentinel-2
Dedicated to supplying data for [Copernicus services](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2), Sentinel-2 carries a multispectral imager with a swath of 290 km. The imager provides a versatile set of 13 spectral bands spanning from the visible and near infrared to the shortwave infrared, featuring four spectral bands at 10 m, six bands at 20 m and three bands at 60 m spatial resolution. As indices primarily deal with combining various band reflectances, the table of 13 bands is given here for reference (see [here](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/msi-instrument){:target="_blank"} for details). The names of the Sentinel-2 bands at your disposal are *B01*, *B02*, *B03*, *B04*, *B05*, *B06*, *B07*, *B08*, *B8A*, *B09*, *B10*, *B11* and  *B12*. 

 - [Sentinel-2 bands](sentinel-2/bands)
 - [Simple RGB composites](sentinel-2/composites)

#### Popular RGB composites
 - [Natural color](sentinel-2/natural_color) product computed correctly to match the color perceived by the human eye.
 - [True color](sentinel-2/true_color) simplistic true color image from red, green and blue bands.
 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})

#### Remote sensing indices
 - [False color infrared](sentinel-2/false_color_infrared)
 - [NDVI](sentinel-2/ndvi) - normalized difference vegetation index
 - [NDVI uncertainty](sentinel-2/ndvi_uncertainty) - visualization of uncertainty of NDVI due to uncertainty in band values
 - [collection](sentinel-2/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}
 - [MAX NDVI](sentinel-2/max_ndvi)
 - [ARI](sentinel-2/ari) - anthocyanin reflectance index
 - [mARI](sentinel-2/mari) - modified anthocyanin reflectance index
 - [ARVI](sentinel-2/arvi) - atmospherically resistant vegetation index 
 - [CHL_REDEDGE](sentinel-2/chl_rededge) - chlorophyll red-edge
 - [REDEDGE_POSITION](sentinel-2/red_edge_position) - red edge position index
 - [EVI](sentinel-2/evi) - enhanced vegetation index
 - [EVI2](sentinel-2/evi2) - enhanced vegetation index 2
 - [GNDVI](sentinel-2/gndvi) - green normalized difference vegetation index
 - [MCARI](sentinel-2/mcari) - modified chlorophyll absorption in reflectance index
 - [MSI](sentinel-2/msi) - moisture index
 - [NDMI](sentinel-2/ndmi) - normalized difference moisture index
 - [NDWI](sentinel-2/ndwi) - normalized difference water index
 - [NDMI STRESS](sentinel-2/ndmi_special) - normalized difference moisture index for crop moisture stress
 - [NBR](sentinel-2/nbr) - normalized burn ratio  
 - [NDII](sentinel-2/ndii) - normalized difference 819/1600 NDII
 - [NDCI](sentinel-2/ndci) - normalized difference chlorophyll index
 - [NDSI](sentinel-2/ndsi) - normalised difference snow index  
 - [PSSRB1](sentinel-2/pssrb1) - pigment specific simple ratio for chlorophyll b (800/650 )
 - [SAVI](sentinel-2/savi) - soil adjusted vegetation index  
 - [SIPI1](sentinel-2/sipi1) - structure insensitive pigment index
 - [LAI](sentinel-2/lai) - Leaf Area Index
 - [Leaf chlorophyll content](sentinel-2/cab)
 - [Canopy chlorophyll content](sentinel-2/ccc)
 - [FAPAR](sentinel-2/fapar) - the fraction of absorbed photosynthetically active radiation
 - [Color correction with Sentinel Hub](sentinel-2/poor_mans_atcor)
 - [PSRI](sentinel-2/psri) - plant senescence reflectance index
 - [Global mosaic best pixel selection script](sentinel-2/s2gm)
 - [Vegetation condition index ](sentinel-2/vegetation_condition_index)
 - [Ulyssys Water Quality Viewer](sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization
 
#### Cloud detection algorithms
 - [Cohen-Braaten-Yang cloud detection](sentinel-2/cby_cloud_detection/)
 - [Hollstein Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels detection](sentinel-2/hollstein)
 - [Cloudless Mosaic](sentinel-2/cloudless_mosaic)

#### Snow and glaciers algorithms
 - [Snow classifier](sentinel-2/snow_classifier/)
 - [Monthly snow report](sentinel-2/monthly_snow_report)
 - [Snow cover change detection](sentinel-2/snow_cover_change)

#### Disaster management and prevention algorithms
 - [Detecting deep moist convection](sentinel-2/deep_moist_convection)
 - [Fire boundary](sentinel-2/fire_boundary)
 - [burned area index for sentinel-2](sentinel-2/bais2)
 - [Multitemporal burnt area analysis](sentinel-2/burned_area)
 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})
 - [Burned Area Visualization](sentinel-2/burned_area_ms)
 
#### Land use/cover classification algorithms
 - [False Color Composite](sentinel-2/false_color_composite)
 - [Barren soil](sentinel-2/barren_soil)

#### Agriculture and forestry algorithms
 - [NDVI anomaly detection](sentinel-2/ndvi_anomaly_detection)
 - [Agricultural growth stage](sentinel-2/agriculture_growth_stage) - multitemporal NDVI 
 - [Forest cut temporal detection](sentinel-2/forest_cut_temporal_detection)
 - [Pseudo forest canopy density (pseudo-FCD)](sentinel-2/pseudo_forest_canopy_density)
 - [Infrared agriculture display](sentinel-2/infrared_agriculture_display)

#### Marine environment algorithms
 - [White-water detection](sentinel-2/white_water)
 - [Ocean plastic detector prototype](sentinel-2/ocean_plastic_detector)
 - [Ulyssys Water Quality Viewer](sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization

#### Urban planning algorithms
 - [Green city](sentinel-2/green_city)
 - [City highlights](sentinel-2/city_highlights)
 - [Urban land infrared color](sentinel-2/urban_land_infrared)
 - [Urban classified](sentinel-2/urban_classified)
 
#### Other multi-temporal scripts
 - [Monthly composite](sentinel-2/monthly_composite)

## <a name="sentinel-3"></a>Sentinel-3 OLCI

Sentinel-3 is a low Earth-orbit moderate size satellite compatible with small launchers including VEGA and ROCKOT. The main objective of the mission is to measure sea surface topography, sea and land surface temperature, and ocean and land surface color with high accuracy and reliability to support ocean forecasting systems, environmental monitoring and climate monitoring. Ocean and Land Colour Instrument (OLCI) provides a set of 21 bands ranging from the visible to the near infrared light (400 nm < λ< 1 020 nm). The Sentinel-3 provides imagery in 300 m spatial resolution. Sentinel-3 OLCI instrument ensures continuity of the ENVISAT MERIS.

 - [Sentinel-3 OLCI bands](sentinel-3/bands)
 - [Simple RGB composites](sentinel-3/composites)

#### Enhanced true color scripts
 - [Enhanced true color](sentinel-3/enhanced_true_color)
 - [Enhanced true color-2](sentinel-3/enhanced_true_color-2)
 - [Tristimulus](sentinel-3/tristimulus)
 
#### Remote sensing indices
 - [OTCI](sentinel-3/otci) - Terrestrial chlorophyll index
 - [Ulyssys Water Quality Viewer](sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization

## <a name="sentinel-5P"></a>Sentinel-5P

Sentinel-5P provides atmospheric measurements, relating to air quality, climate forcing, ozone and UV radiation with high spatio-temporal resolution. Its data is used for monitoring of concentrations of carbon monoxide (CO), nitrogen dioxide (NO2) and ozone (O3) in air as well as for monitoring of UV aerosol index (AER_AI) and different geophysical parameters of clouds (CLOUD). EO Browser serves level 2 geophysical products. The TROPOspheric Monitoring Instrument (TROPOMI) on board of the satellite operates in the ultraviolet to shortwave infrared range with 7 different spectral bands: UV-1 (270-300nm), UV-2 (300-370nm), VIS (370-500nm), NIR-1 (685-710nm), NIR-2 (755-773nm), SWIR-1 (1590-1675nm) and SWIR-3 (2305-2385nm). Its spatial resolution is below 8km for wavelengths above 300nm and below 50km for wavelength below 300nm. It covers almost the whole globe (95 % coverage for latitudes in the interval [-7°, 7°]).

#### Available scripts
 - [Nitrogen Dioxide tropospheric column](sentinel-5p/nitrogen_dioxide_tropospheric_column)

## <a name="landsat-8"></a>Landsat 8
The Landsat program is the longest running enterprise for acquisition of satellite imagery of Earth, running from 1972. The most recent, [Landsat 8](http://landsat.usgs.gov/landsat8.php){:target="_blank"}, was launched on February 11, 2013. Landsat-8 data has 11 spectral bands with spatial resolutions ranging from 15 to 60 meters. The names of the Landsat-8 bands at your disposal are *B01*, *B02*, *B03*, *B04*, *B05*, *B06*, *B07*, *B08*, *B09*, *B10* and *B11*.

 - [Landsat 8 bands](landsat-8/bands)
 - [Simple RGB composites](landsat-8/composites)

#### Remote sensing indices
  - [collection](landsat-8/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}
  - [Build-up index](landsat-8/built_up_index)
  - [NDVI](landsat-8/ndvi)

#### Other available scripts
  - [Land surface temperature (LST) mapping](landsat-8/land_surface_temperature_mapping)

## <a name="landsat-57"></a>Landsat 5 and 7

Landsat 7 and the retired Landsat 5 orbit's are sun-synchronous, with near-polar orbits, flying at an altitude of 705 km (438 mi). Landsat 5 long outlived its original three-year design life. Developed by NASA and launched in 1984, Landsat 5 has orbited the planet over 150,000 times while transmitting over 2.5 million images land surface images around the world. The Landsat 7 satellite still orbits the the Earth in a sun-synchronous, near-polar orbit, at an altitude of 705 km (438 mi). The satellites are multispectra, providing visible, near infrared, mid infrared and thermal bands. 

For more on Landsat 5, including its available bands, read [here](https://www.usgs.gov/land-resources/nli/landsat/landsat-5?qt-science_support_page_related_con=0#qt-science_support_page_related_con){:target="_blank"} and for Landsat 7, read [here.](https://www.usgs.gov/land-resources/nli/landsat/landsat-7?qt-science_support_page_related_con=0#qt-science_support_page_related_con){:target="_blank"}. 

 - [Landsat 5 and 7 bands](landsat-57/bands)
 - [Simple RGB composites](landsat-57/composites)
 
## <a name="modis"></a>MODIS
The Moderate Resolution Imaging Spectroradiometer (MODIS) MCD43A4 version 6 on Sentinel Hub is hosted at Amazon Web Services (AWS). Dataset is updated daily and provides the 500 meter Nadir Bidirectional reflectance distribution function Adjusted Reflectance (NBAR) data of MODIS "land" bands 1-7: *B01*, *B02*, *B03*, *B04*, *B05*, *B06* and *B07*.

  - [MODIS bands](modis/bands)

#### Remote sensing indices
  - [collection](modis/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}

# <a name="howto"></a>Adding new custom scripts
Have a look at the [template](example) and follow the procedure described there.  

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
