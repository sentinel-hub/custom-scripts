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
  - [DEM](#dem)
  - [PlanetScope](#planet_scope)
  - [Airbus Pleiades](#airbus_pleiades)
  - [Airbus SPOT](#airbus_spot)
  - [Data fusion](#data-fusion)
  - [Copernicus services](#copernicus_services)

You are invited to publish your own scripts - see [howto](#howto).

## Relevant reading
* [Multi-temporal Processing](https://medium.com/sentinel-hub/multi-temporal-processing-6a80e5c84188)
* [Color Correction with JavaScript](https://medium.com/sentinel-hub/color-correction-with-javascript-d721e12a919) (by Miha Kadunc)
* [Multi-year time series of multi-spectral data viewed and analyzed in Sentinel Hub](https://medium.com/sentinel-hub/multi-year-time-series-of-multi-spectral-data-viewed-and-analyzed-in-sentinel-hub-5628ec4fad9c) (by Grega Milcinski)
* [The Use of Satellite Imagery in Crisis Management after Flooding](https://medium.com/sentinel-hub/the-use-of-satellite-imagery-in-crisis-management-after-flooding-382be517224f)
* [How to Create Cloudless Mosaics](https://medium.com/sentinel-hub/how-to-create-cloudless-mosaics-37910a2b8fa8)
* [Educational Role of EO Browser and New Features](https://medium.com/sentinel-hub/educational-role-of-eo-browser-and-new-features-5bc6ea8d8143) (by Sabina Dolenc)
* [Environmental Monitoring of Conflicts using Sentinel-2 data](https://medium.com/sentinel-hub/environmental-monitoring-of-conflicts-using-sentinel-2-61f07d76e27b) (by Wim Zwijnenburg)
* [Why Newsrooms need People with Expertise in Remote Sensing](https://medium.com/sentinel-hub/why-newsrooms-need-people-with-expertise-in-remote-sensing-a8e83cedda0a) (by Pierre Markuse)
* [Active Volcanoes as Seen from Space](https://medium.com/sentinel-hub/active-volcanoes-as-seen-from-space-9d1de0133733) (by Sabina Dolenc)
* [Get Creative and Solve a Remote Sensing Problem at Home from your PC and Win!](https://medium.com/sentinel-hub/get-creative-and-solve-a-remote-sensing-problem-at-home-from-your-pc-and-win-9353938d5fff) (by Grega Milcinski)
* [Measuring Air Pollution from Space](https://medium.com/sentinel-hub/measuring-air-pollution-from-space-7492f5dad7bc) (by Sabina Dolenc)
* [Mapping deforestation with Sentinel Hub](https://medium.com/sentinel-hub/mapping-deforestation-from-sentinel-hub-de6aae67f817) (by Nicolas Karasiak)
* [Why join the next Sentinel Hub Custom Script Contest](https://medium.com/sentinel-hub/why-to-join-the-next-sentinel-hub-custom-script-contest-f3adb6c8e92c) (by Sabina Dolenc)
* [Learning Custom Scripts to make Useful and Beautiful Satellite images](https://medium.com/sentinel-hub/create-useful-and-beautiful-satellite-images-with-custom-scripts-8ef0e6a474c6) (by Monja Šebela)
* [It’s a faaaake… — Or not?](https://medium.com/sentinel-hub/its-a-faaaake-or-not-bace4f0c01ec) (by Pierre Markuse)
* [Custom scripts: faster, cheaper, better!](https://medium.com/sentinel-hub/custom-scripts-faster-cheaper-better-83f73894658a) (by Monja Šebela)
* [Water Quality Information for Everyone](https://medium.com/sentinel-hub/water-quality-information-for-everyone-a81faab8ff5e)
* [New Themes, Multi-Temporal Scripting and Other Improvements in EO Browser](https://medium.com/sentinel-hub/new-themes-multi-temporal-scripting-and-other-improvements-in-eo-browser-725267d09f2f) (by Monja Šebela)

## <a name="sentinel-1"></a>Sentinel-1
The Sentinel-1 imagery is provided by two polar-orbiting satellites, operating day and night performing C-band synthetic aperture radar imaging, enabling them to acquire imagery regardless of the weather. Main applications are for monitoring sea ice, oil spills, marine winds, waves & currents, land-use change, land deformation among others, and to respond to emergencies such as floods and earthquakes. The identical satellites orbit Earth 180° apart and at an altitude of almost 700 km, offering a global revisit time of 6-12 days depending on the area (check observation scenario). Sentinel-1’s radar can operate in four modes. The spatial resolution depends on the mode: approx. 5 m x 20 m for IW mode and approx. 20 m x 40 m for EW mode. See [Copernicus services](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-1/) for more details.

#### Vegetation in agriculture algorithms
 - [Tracking radar vegetation index](sentinel-1/sar_rvi_temporal_analysis)
 - [Agricultural crop monitoring from space](sentinel-1/crop_monitoring)
 - [SAR for deforestation detection](sentinel-1/sar_deforestation_detection)
 - [Radar vegetation index for Sentinel-1 - RVI4S1 script](sentinel-1/radar_vegetation_index)
 - [Radar vegetation index code for dual polarimetric](sentinel-1/radar_vegetation_index_code_dual_polarimetric)

#### Disaster management and prevention algorithms
 - [Seldom and regular water surface detection](sentinel-1/seldom_and_regular_water_surface_detection)
 - [Forest Hurricane](sentinel-1/forest_hurricane)
 - [Flood mapping](sentinel-1/flood_mapping)

#### Urban planning algorithm
 - [Urban areas](sentinel-1/urban_areas)

#### Marine and other water bodies environment algorithms
 - [Water surface roughness visualization](sentinel-1/water_surface_roughness_visualization)
 - [SAR-Ice: A Sea Ice RGB Composite](sentinel-1/sar-ice)
 - [Oil Slicks and Red Tide Monitoring](sentinel-1/orm_index)

#### Other available scripts
 - [SAR false color visualization](sentinel-1/sar_false_color_visualization)
 - [SAR false color visualization 2](sentinel-1/sar_false_color_visualization-2)

#### Other multi-temporal scripts
  - [SAR multi-temporal backscatter coefficient composite](sentinel-1/sar_multi-temporal_backscatter_coefficient_composite)
  - [Soil Moisture Estimation](sentinel-1/soil_moisture_estimation)
  - [Reactiv - HSV based temporal change detection](sentinel-1/reactiv)


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
 - [FCOVER](sentinel-2/fcover) - the fraction of green vegetation cover
 - [Color correction with Sentinel Hub](sentinel-2/poor_mans_atcor)
 - [PSRI](sentinel-2/psri) - plant senescence reflectance index
 - [Global mosaic best pixel selection script](sentinel-2/s2gm)
 - [TOA Ratio B09-B8A ColorMap Blue-Red & Natural Colours Script](sentinel-2/ratio_b09-b8a_colormap_blue_red_v0.1)
 - [Tonemapped Natural Color script](sentinel-2/tonemapped_natural_color)
 - [Highlight Optimized Natural Color](sentinel-2/highlight_optimized_natural_color)
 - [Vegetation condition index ](sentinel-2/vegetation_condition_index)
 - [Vegetation productivity indicator](sentinel-2/vegetation_productivity_indicator)

#### Cloud detection algorithms
 - [Cohen-Braaten-Yang cloud detection](sentinel-2/cby_cloud_detection/)
 - [Hollstein Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels detection](sentinel-2/hollstein)
 - [Cloudless Mosaic](sentinel-2/cloudless_mosaic)
 - [Cloud statistics](sentinel-2/cloud_statistics)
 - [Observation outlier detection](sentinel-2/obs_outlier_detector/v2)

#### Snow and glaciers algorithms
 - [Snow classifier](sentinel-2/snow_classifier/)
 - [Monthly snow report](sentinel-2/monthly_snow_report)
 - [Snow cover change detection](sentinel-2/snow_cover_change)

#### Disaster management and prevention algorithms
 - [Detecting deep moist convection](sentinel-2/deep_moist_convection)
 - [Fire boundary](sentinel-2/fire_boundary)
 - [Burned area index for sentinel-2](sentinel-2/bais2)
 - [Multitemporal burnt area analysis](sentinel-2/burned_area)
 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})
 - [Burned Area Visualization](sentinel-2/burned_area_ms)
 - [Active Fire Detection](sentinel-2/active_fire_detection)
 - [Deep BAIS2 (Burned Area Index for Sentinel 2)](sentinel-2/deep_bais2)
 - [Landslide detection for rapid Mapping](sentinel-2/landslide_detection_rapid_mapping)

#### Land use/cover classification algorithms
 - [False Color Composite](sentinel-2/false_color_composite)
 - [Barren soil](sentinel-2/barren_soil)
 - [Land Use Visualization for Sentinel-2 Using Linear Discriminant Analysis Script](sentinel-2/land_use_with_linear_discriminant_analysis)
 - [Bare soil detector](sentinel-2/bare_soil_detector)

#### Vegetation algorithms

 - [Deep GNDVI](sentinel-2/deep_gndvi)

#### Agriculture and forestry algorithms
 - [NDVI anomaly detection](sentinel-2/ndvi_anomaly_detection)
 - [Agricultural growth stage](sentinel-2/agriculture_growth_stage) - multitemporal NDVI
 - [Forest cut temporal detection](sentinel-2/forest_cut_temporal_detection)
 - [Pseudo forest canopy density (pseudo-FCD)](sentinel-2/pseudo_forest_canopy_density)
 - [Infrared agriculture display](sentinel-2/infrared_agriculture_display)

#### Marine and other water bodies environment algorithms
 - [White-water detection](sentinel-2/white_water)
 - [Ocean plastic detector prototype](sentinel-2/ocean_plastic_detector)
 - [Ulyssys Water Quality Viewer](sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization
 - [Satellite Derived Bathymetry Mapping - SDBM](sentinel-2/satellite_derived_bathymetry_mapping-sdbm)
 - [Aquatic Plants and Algae Custom Script Detector (APA Script)](sentinel-2/apa_script)
 - [se2waq](sentinel-2/se2waq) - water quality for Sentinel-2
 - [Water In Wetlands Index (WIW)](sentinel-2/wiw_s2_script)

#### Urban planning algorithms
 - [Green city](sentinel-2/green_city)
 - [City highlights](sentinel-2/city_highlights)
 - [Urban land infrared color](sentinel-2/urban_land_infrared)
 - [Urban classified](sentinel-2/urban_classified)

#### Other multi-temporal scripts
 - [Monthly composite](sentinel-2/monthly_composite)
 - [Water Bodies Mapping - WBM](sentinel-2/water_bodies_mapping-wbm)
 - [Interpolated time-series](sentinel-2/interpolated_time_series)

#### Other available scripts and indices
 - [Selective Enhancement based on Indices](sentinel-2/selective_enhancement_based_on_indices)
 - [Homage to Mondrian](sentinel-2/homage_to_mondrian) - artistic script
 - [Index visualisation](sentinel-2/index_visualization) - universal script for visualisation of indices
 - [NDVI on L2A Vegetation and natural Colours](sentinel-2/ndvi-on-vegetation-natural_colours)
 - [PUCK](sentinel-2/puck) - Perceptually-Uniform Color Map Kit
 - [MixLAI](sentinel-2/mixlai) - Mix Leaf Area Index
 - [Detection of evapotranspiration levels](sentinel-2/evapotranspiration_levels)

#### Scripts including machine learning techniques (eo-learn)

 - [Deep GNDVI](sentinel-2/deep_gndvi)
 - [Deep BAIS2 (Burned Area Index for Sentinel 2)](sentinel-2/deep_bais2)

## <a name="sentinel-3"></a>Sentinel-3

Sentinel-3 is a low Earth-orbit moderate size satellite compatible with small launchers including VEGA and ROCKOT. The main objective of the mission is to measure sea surface topography, sea and land surface temperature, and ocean and land surface color with high accuracy and reliability to support ocean forecasting systems, environmental monitoring and climate monitoring. Ocean and Land Colour Instrument (OLCI) provides a set of 21 bands ranging from the visible to the near infrared light (400 nm < λ< 1 020 nm). The Sentinel-3 provides imagery in 300 m spatial resolution. Sentinel-3 OLCI instrument ensures continuity of the ENVISAT MERIS.

### Sentinel-3 OLCI

 - [Sentinel-3 OLCI bands](sentinel-3/bands)
 - [Simple RGB composites](sentinel-3/composites)

#### Enhanced true color scripts

 - [Enhanced true color](sentinel-3/enhanced_true_color)
 - [Enhanced true color-2](sentinel-3/enhanced_true_color-2)
 - [OLCI Natural Colours with Sigmoid](sentinel-3/natural_colors_sigmoid)
 - [Highlight optimized true color](sentinel-3/true_color_highlight_optimized)
 - [Tristimulus](sentinel-3/tristimulus)

#### Remote sensing indices
 - [VMI3](sentinel-3/vegetation_monitoring_masks) - Vegetation and land monitoring with cloud mask
 - [OTCI](sentinel-3/otci) - Terrestrial chlorophyll index
 - [Ulyssys Water Quality Viewer](sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization
 - [NDBI](sentinel-3/ndbi) - Normalized Bare ice Index

### Sentinel-3 SLSTR

- [Active Fire Detection](slstr/active_fire_points_detection)

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
  - [Water In Wetlands Index](landsat-8/wiw_L8_script)
  - [Clouds Segmentation](landsat-8/clouds_segmentation)

## <a name="landsat-57"></a>Landsat 5 and 7

Landsat 7 and the retired Landsat 5 orbit's are sun-synchronous, with near-polar orbits, flying at an altitude of 705 km (438 mi). Landsat 5 long outlived its original three-year design life. Developed by NASA and launched in 1984, Landsat 5 has orbited the planet over 150,000 times while transmitting over 2.5 million images land surface images around the world. The Landsat 7 satellite still orbits the the Earth in a sun-synchronous, near-polar orbit, at an altitude of 705 km (438 mi). The satellites are multispectra, providing visible, near infrared, mid infrared and thermal bands.

For more on Landsat 5, including its available bands, read [here](https://www.usgs.gov/land-resources/nli/landsat/landsat-5?qt-science_support_page_related_con=0#qt-science_support_page_related_con){:target="_blank"} and for Landsat 7, read [here.](https://www.usgs.gov/land-resources/nli/landsat/landsat-7?qt-science_support_page_related_con=0#qt-science_support_page_related_con){:target="_blank"}.

- [Landsat 5 and 7 bands](Landsat-57/bands)
- [Simple RGB composites](Landsat-57/composites)

## <a name="modis"></a>MODIS
The Moderate Resolution Imaging Spectroradiometer (MODIS) MCD43A4 version 6 on Sentinel Hub is hosted at Amazon Web Services (AWS). Dataset is updated daily and provides the 500 meter Nadir Bidirectional reflectance distribution function Adjusted Reflectance (NBAR) data of MODIS "land" bands 1-7: *B01*, *B02*, *B03*, *B04*, *B05*, *B06* and *B07*.

  - [MODIS bands](modis/bands)

#### Remote sensing indices
  - [collection](modis/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}

## <a name="dem"></a>DEM

DEM (digital elevation model) is a 3D representation of the terrain's surface created from terrain elevation data. It can be used for terrain analysis and orthorectification, which helps improve the accuracy of satellite imagery. With DEM, you are able to measure and analyze your area of interest or integrate data into a 3D application as a terrain data source. Sentinel Hub is using MapZen's DEM, available through Amazon Web Services (AWS) in US. This dataset is based on SRTM30 (30 m resolution) but is in several places improved with local datasets. It is static and does not depend on the date (the values are updating as MapZen is improving the dataset). Read the blog post on [how to explore the DEM dataset](https://medium.com/sentinel-hub/digital-elevation-model-dem-3c05141bb03d) and [see our API documentation for details](https://docs.sentinel-hub.com/api/latest/data/dem/).

  - [DEM color visualization](dem/dem-color)
  - [DEM grayscale visualization](dem/dem-grayscale)
  - [DEM sepia visualization](dem/dem-sepia)
  - [DEM contour lines](dem/contour-lines)

## <a name="planet_scope"></a>PlanetScope (Commercial)

<a href="https://www.planet.com/products/monitoring/">PlanetScope</a> satellite constellation consists of more than 130 small satellites called Doves. The satellites are launched in groups, which constantly improves mission's characteristics such as revisit times, spatial and spectral resolutions. PlanetScope data complements Sentinel-2 with better spatial resolution (3m) and almost global daily coverage. It is an excellent source for vegetation monitoring. For more information on PlanetScope, visit our <a href="https://docs.sentinel-hub.com/api/latest/#/data/PlanetScope">documentation page</a>.

The spectral bands of PlanetScope data are the following:

*B1 - Blue, resolution 3m*

*B2 - Green, resolution 3m*

*B3 - Red, resolution 3m*

*B4 - Near Infrared, resolution 3m*

 - [True Color](planet_scope/true_color)
 - [False Color](planet_scope/false_color)
 - [NDVI](planet_scope/ndvi)
 - [NDWI](planet_scope/ndwi)
 - [Green City](planet_scope/green_city)

## <a name="airbus_pleiades"></a>Airbus Pleiades (Commercial)

<a href="https://www.intelligence-airbusds.com/en/8692-pleiades">Pléiades</a> constelation is composed of two twin satellites orbiting the Earth 180° apart. The satellites deliver the incredible global 0.5 m spectral resolution imagery. Pleiades' satellites share the orbit with SPOT satellites, which makes it possible to combine the data form both sources.
The Pléiades data with its high spatial resolution is suitable for a wide range of remote sensing applications such as vegetation monitoring, precise mapping, as well as risk and disaster management. To learn more about Pleiades, visit our <a href="https://docs.sentinel-hub.com/api/latest/#/data/Airbus-Pleiades"> documentation page.</a>

The spectral bands of Pleiades data are the following:

*B0 - Blue (430-550 nm,	resolution 2m)*

*B1 - Green (490-610 nm, resolution	2m)*

*B2 - Red (600-720 nm), resolution 2m*

*B3 - Near Infrared (750-950 nm), resolution 2m*

*PAN	- Panchromatic (480-830 nm), resolution 0.5m*

Pleiades's RGB bands are in 2 meter spatial resolution. To take advantage of the 0.5 m PAN band, the pansharpening process is required.

 - [True Color](airbus_pleiades/true_color)
 - [Pansharpened True Color](airbus_pleiades/true_color_pansharpened)
 - [False Color](airbus_pleiades/false_color)
 - [NDVI](airbus_pleiades/ndvi)
 - [NDWI](airbus_pleiades/ndwi)
 - [Green City](airbus_pleiades/green_city)
 - [Pansharpened Green City](airbus_pleiades/green_city_pansharpened)

## <a name="airbus_spot"></a>Airbus SPOT (Commercial)

<a href="https://www.intelligence-airbusds.com/en/8693-spot-67">SPOT 6/7</a> is a satellite constellation providing very high-resolution optical imagery and is owned by Airbus. It is composed of two twin satellites orbiting the Earth 180° apart. The satellites deliver 1.5 m optical imagery and offer a daily revisit capability to any point on the globe. SPOT 6/7 data with its high spatial resolution is suitable for a range of remote sensing applications such as vegetation monitoring, precise mapping, risk and disaster management. To learn more about SPOT, visit our <a href="https://docs.sentinel-hub.com/api/latest/data/airbus/spot/"> documentation page.</a>

The spectral bands of SPOT data are the following:

*B0 - Blue (454-519 nm,	resolution 6m)*

*B1 - Green (527-587 nm, resolution	6m)*

*B2 - Red (624-694 nm), resolution 6m*

*B3 - Near Infrared (756-880 nm), resolution 6m*

*PAN - Panchromatic (455-744 nm), resolution 1.5m*

SPOT's RGB bands are in 6 meter spatial resolution. To take advantage of the 1.5 m PAN band, the pansharpening process is required.

 - [True Color](airbus_spot/true_color)
 - [Pansharpened True Color](airbus_spot/true_color_pansharpened)
 - [False Color](airbus_spot/false_color)
 - [NDVI](airbus_spot/ndvi)
 - [NDWI](airbus_spot/ndwi)
 - [Green City](airbus_spot/green_city)
 - [Pansharpened Green City](airbus_spot/green_city_pansharpened)

_Note: Because Pleiades and SPOT bands are very similar in wavelengths, the same custom scripts are used for both constellations._

## <a name="data-fusion"></a>Data fusion

The combination of multiple remote sensing data sources can provide invaluable information that would not be obtained with a single sensor alone. Observation-level or pixel-based fusion combines pixels from different sources to form an image containing new information ([more information](https://ieeexplore.ieee.org/document/7740215)). Two widely used examples of pixel-based fusion are pan-sharpening and the fusion of radar and multispectral optical images. On the one hand, pan-sharpening consists of blending a high-resolution panchromatic image with a lower resolution multispectral image to obtain a high-resolution multispectral image. On the other hand, the combination of radar and optical imagery provides images with increased spectral resolution that can mitigate the drawbacks of each product (such as cloud cover for optical images), but also provide increased temporal resolution with more frequent overpasses.

#### Available scripts
 - [Mapping Soybean and Maize NDVI with Sentinel-1 and Sentinel-2](data-fusion/ndvi_s1_s2)
 - [Sentinel-2 with cloudy parts replaced by Sentinel-1](data-fusion/s2l1c_s1grd_cloud_replacement)
 - [Ship detection with Sentinel-1 and Sentinel-2](data-fusion/ship_detection_s1_s2)
 - [Built-up area detection with Sentinel-1 and Sentinel-2](data-fusion/urban_s1_s2)
 - [Sentinel-3 OLCI true color under Sentinel-5P products](data-fusion/olci_under_s5)
 - [DEM contour lines over true color Landsat 8](data-fusion/dem_contour_over_l8)
 - [Forest fire progression monitoring with Sentinel-2 and Sentinel-1](data-fusion/s2_s1_forest_fire_progression)

## <a name="copernicus_services"></a>Copernicus services

### CORINE Land Cover  

In 1985 the 'Coordination of Information on the Environment' (CORINE) programme was initiated by the European Commission. It aimed at collecting environmental information on high priority topics for the European Union (air, water, soil, land cover, coastal erosion, biotopes, etc.). Since 1994, the established databases and programmes are managed by the [European Environment Agency (EEA)](https://www.eea.europa.eu/). The [CORINE Land Cover (CLC) inventory](https://land.copernicus.eu/pan-european/corine-land-cover) is a vector-based dataset that consists of 44 land cover and land use classes.  

CORINE Land Cover data is available in our [public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/corine-land-cover).

#### Available scripts
- [CORINE Land Cover visualisation script](copernicus_services/corine_land_cover)

### Global Land Cover

Global Land Cover products at 100 m resolution are delivered annually by [ The Copernicus Global Land Service (CGLS)](https://land.copernicus.eu/global/products/lc). The most recent collection 3 (version 3.0.1) of 100 m Land Cover products for the years 2015 - 2019 were generated from the PROBA-V 100 m and 300 m satellite observations and several other ancillary datasets, with global coverage. Global Land Cover products are generated from 3 years input data in three modes: base reference, consolidated or near real time mode.  As from 2020, (2019-conso and 2020-nrt products) are planned to be generated from the combination of Sentinel-1 and Sentinel-2 satellite observations following end of PROBA-V operations. The  Global Land Cover data contains one main _land cover discrete classification map_ and several other additional layers. For more information on Global land cover products, see the [product User Manual](https://land.copernicus.eu/global/sites/cgls.vito.be/files/products/CGLOPS1_PUM_LC100m-V3_I3.3.pdf).

Global Land Cover data is available in our [public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/global-land-cover)

#### Available scripts

- [Global Land Cover discrete classification map visualisation script](copernicus_services/global_land_cover)

### Global Surface Water

The Global Surface Water dataset was developed by the European Commission's Joint Research Centre (JRC) within the framework of the Copernicus Programme. It is derived from Landsat 5, 7 and 8 imagery and shows various aspects of the spatio-temporal distribution of surface water between 1984 and 2019 at the global scale in six different layers.

1. Occurrence - *Intra- and inter-annual frequency of surface water presence in the time range between 1984 and 2019.*
2. Occurrence Change Intensity - *Changes in water occurrence between two epochs, the first ranging from 1984 to 1999 and the second covering 2000 to 2019.*
3. Seasonality - *Intra-annual distribution of surface water in 2019.*
4. Recurrence - *Inter-annual variability of surface water presence in a defined water period within the entire time range from 1984 to 2019.*
5. Transitions - *Visualises changes in the three surface water classes (1) not water, (2) seasonal water, and (3) permanent water between the first and last year in the 36-year time period.*
6. Extent - *Maximum extent of surface water bodies in the 36-year time range.*

Global Surface Water data is available in our [public collections](https://collections.sentinel-hub.com/global-surface-water/).

Please check the official [Global Surface Water website](https://global-surface-water.appspot.com/) for more details. Detailed information on the processing methodology for the included layers can be found in the [Data Users Guide](https://global-surface-water.appspot.com/download) and [Pekel et al. (2016)](https://www.nature.com/articles/nature20584)  as the associated scientific publication.

#### Available scripts

- [Global Surface Water Occurrence visualisation script](copernicus_services/global_surface_water_occurrence)
- [Global Surface Water Occurrence Change Intensity visualisation script](copernicus_services/global_surface_water_change)
- [Global Surface Water Seasonality visualisation script](copernicus_services/global_surface_water_seasonality)
- [Global Surface Water Recurrence visualisation script](copernicus_services/global_surface_water_recurrence)
- [Global Surface Water Transitions visualisation script](copernicus_services/global_surface_water_transitions)
- [Global Surface Water Extent visualisation script](copernicus_services/global_surface_water_extent)

### Water Bodies 
The Global  Water Bodies product shows the surface extent covered by inland water on permanent, seasonal or occasional basis. The  product available here is the  [Water Bodies  100m Version 1](https://land.copernicus.eu/global/products/wb) collection which is derived from Sentinel-2 level 1C data, starting from October 2020 after the end of the PROBA-V mission and is delivered as a monthly composite product at 100m resolution. The Water Bodies product contains one main water Bodies detection layer (WB) and one Quality layer (QUAL) that provides information on the seasonal dynamics of the detected water bodies. Water Bodies detection layer (WB) shows water bodies  detected using the Modified Normalized Difference Water Index [(MNDWI)](https://en.wikipedia.org/wiki/Normalized_difference_water_index) derived from Sentinel-2 Level 1C data. The Quality layer (QUAL) is generated from water body occurrence statistics computed from previous monthly Water Bodies products.The occurrence statistics is ranked from low occurrence to permanent occurrence. More information about the data can be obtained from the [Water Bodies product](https://land.copernicus.eu/global/products/wb) page.

Water Bodies 100m data is available in our [public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/water-bodies)

#### Available scripts
- [Water Bodies visualisation script](copernicus_services/water-bodies)
- [Water Bodies Occurrence visualisation script](copernicus_services/water-bodies-occurence)

# <a name="howto"></a>Adding new custom scripts
Have a look at the [template](example) and follow the procedure described there.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
