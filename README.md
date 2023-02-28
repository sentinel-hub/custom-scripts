# Collection of custom scripts

## Custom Scripts Repository

This repository contains a collection of custom scripts for [Sentinel Hub](https://www.sentinel-hub.com/), which can be fed to the services via the URL.

Scripts are organised by sensors supported on Sentinel Hub:
  - [Sentinel-1](#sentinel-1)
  - [Sentinel-2](#sentinel-2)
  - [Sentinel-3](#sentinel-3)
  - [Sentinel-5P](#sentinel-5P)
  - [Harmonized Landsat Sentinel](#harmonized-landsat-sentinel)
  - [Landsat 5 and 7](#landsat-57)
  - [Landsat 1-5 MSS](#landsat-1-5-mss)
  - [Landsat 4-5 TM](#landsat-4-5-tm)
  - [Landsat 7 ETM+](#landsat-7-etm)
  - [Landsat-8](#landsat-8)
  - [MODIS](#modis)
  - [DEM](#dem)
  - [PlanetScope](#planet_scope)
  - [SkySat](#sky_sat)
  - [Airbus Pleiades](#airbus_pleiades)
  - [Airbus SPOT](#airbus_spot)
  - [Data fusion](#data-fusion)
  - [Copernicus services](#copernicus_services)
  - [Sentinel-2 L2A 120m Mosaic](#sentinel2-120m-mosaic)
  - [Other collections](#other_collections)

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
 - [True color](sentinel-2/true_color) - Simplistic true color image from red, green and blue bands.
 - [True color optimized L1C](sentinel-2/l1c_optimized) - Optimized L1C True Color image
 - [True color optimized L2A](sentinel-2/l2a_optimized) - Optimized L2A True Color image
 - [False color infrared](sentinel-2/false_color_infrared) - False Color Infrared RGB Composite
 - [SWIR](sentinel-2/swir-rgb) - Short Wave Infrared RGB Composite
 - [False Color Urban](sentinel-2/false-color-urban-rgb) - False Color Urban RGB Composite
 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})

#### Remote sensing indices
 - [NDVI](sentinel-2/ndvi) - normalized difference vegetation index
 - [NDVI uncertainty](sentinel-2/ndvi_uncertainty) - visualization of uncertainty of NDVI due to uncertainty in band values
 - [NDVI time series](sentinel-2/ndvi_time_series) - NDVI time series as a multi-band TIFF with a JSON containg a list of timestamps 
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
 - [Oil Spill Index](sentinel-2/oil-spill-index)

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
 - [NDSI Visualized](sentinel-2/ndsi-visualized) - Visualized normalized difference snow index 

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
 - [Oil Spill Index](sentinel-2/oil-spill-index)

#### Land use/cover classification algorithms
 - [False Color Composite](sentinel-2/false_color_composite)
 - [Barren soil](sentinel-2/barren_soil)
 - [Land Use Visualization for Sentinel-2 Using Linear Discriminant Analysis Script](sentinel-2/land_use_with_linear_discriminant_analysis)
 - [Bare soil detector](sentinel-2/bare_soil_detector)
 - [Scene Classification](sentinel-2/scene-classification)
 - [Built-up Area Classification](sentinel-2/built_up_classifier_mask)

#### Vegetation algorithms

 - [Normalized Difference Yellowness Index (NDYI)](sentinel-2/ndyi) - Visualisation of blooming in an Amazonian tree species and canola crops
 - [Deep GNDVI](sentinel-2/deep_gndvi)

#### Agriculture and forestry algorithms
 - [NDVI anomaly detection](sentinel-2/ndvi_anomaly_detection)
 - [Agricultural growth stage](sentinel-2/agriculture_growth_stage) - multitemporal NDVI
 - [Forest cut temporal detection](sentinel-2/forest_cut_temporal_detection)
 - [Pseudo forest canopy density (pseudo-FCD)](sentinel-2/pseudo_forest_canopy_density)
 - [Infrared agriculture display](sentinel-2/infrared_agriculture_display)

#### Marine and other water bodies environment algorithms
 - [Cyanobacteria chlorophyll-a from Sentinel-2](sentinel-2/cyanobacteria_chla_ndci_l1c)
 - [Maximum peak height bloom index](sentinel-2/maximum_peak_height_bloom_index)
 - [White-water detection](sentinel-2/white_water)
 - [Ocean plastic detector prototype](sentinel-2/ocean_plastic_detector)
 - [Ulyssys Water Quality Viewer](sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization
 - [Satellite Derived Bathymetry Mapping - SDBM](sentinel-2/satellite_derived_bathymetry_mapping-sdbm)
 - [Aquatic Plants and Algae Custom Script Detector (APA Script)](sentinel-2/apa_script)
 - [se2waq](sentinel-2/se2waq) - water quality for Sentinel-2
 - [Water In Wetlands Index (WIW)](sentinel-2/wiw_s2_script)
 - [Simple Water Bodies' Mapping - SWBM ](sentinel-2/simple_water_bodies_mapping-swbm)
 - [MAGO Water Quality Monitoring Tool](sentinel-2/mago_water_quality_monitoring_tool)

#### Urban planning algorithms
 - [Green city](sentinel-2/green_city)
 - [City highlights](sentinel-2/city_highlights)
 - [Urban land infrared color](sentinel-2/urban_land_infrared)
 - [Urban classified](sentinel-2/urban_classified)

#### Other multi-temporal scripts
 - [Monthly composite](sentinel-2/monthly_composite)
 - [Water Bodies Mapping - WBM](sentinel-2/water_bodies_mapping-wbm)
 - [Interpolated time-series](sentinel-2/interpolated_time_series)

#### Other scripts 
 - [Natural color](sentinel-2/natural_color) product computed correctly to match the color perceived by the human eye.
 - [Selective Enhancement based on Indices](sentinel-2/selective_enhancement_based_on_indices)
 - [Homage to Mondrian](sentinel-2/homage_to_mondrian) - artistic script
 - [Index visualisation](sentinel-2/index_visualization) - universal script for visualisation of indices
 - [NDVI on L2A Vegetation and natural Colours](sentinel-2/ndvi-on-vegetation-natural_colours)
 - [PUCK](sentinel-2/puck) - Perceptually-Uniform Color Map Kit
 - [MixLAI](sentinel-2/mixlai) - Mix Leaf Area Index
 - [Detection of evapotranspiration levels](sentinel-2/evapotranspiration_levels)
 - [Aesthetic Neon](sentinel-2/aesthetic-neon) - Aesthetic visualization for urban and dry (desert) areas
 - [Total Ozone Column over Antarctica snow](sentinel-2/ozone_column_over_snow)

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
 - [NDVI](sentinel-3/ndvi)- normalized difference vegetation index 
 - [NDWI](sentinel-3/ndwi)- normalized difference water index
 - [VMI3](sentinel-3/vegetation_monitoring_masks) - Vegetation and land monitoring with cloud mask
 - [OTCI](sentinel-3/otci) - Terrestrial chlorophyll index
 - [Ulyssys Water Quality Viewer](sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization
 - [NDBI](sentinel-3/ndbi) - Normalized Bare ice Index

### Sentinel-3 SLSTR

- [Active Fire Detection](slstr/active_fire_points_detection)
- [False color composite](slstr/false-color-321)
- [F1 brightness temperature](slstr/f1-brightness-temperature)

## <a name="sentinel-5P"></a>Sentinel-5P

Sentinel-5P provides atmospheric measurements, relating to air quality, climate forcing, ozone and UV radiation with high spatio-temporal resolution. Its data is used for monitoring of concentrations of carbon monoxide (CO), nitrogen dioxide (NO2) and ozone (O3) in air as well as for monitoring of UV aerosol index (AER_AI) and different geophysical parameters of clouds (CLOUD). EO Browser serves level 2 geophysical products. The TROPOspheric Monitoring Instrument (TROPOMI) on board of the satellite operates in the ultraviolet to shortwave infrared range with 7 different spectral bands: UV-1 (270-300nm), UV-2 (300-370nm), VIS (370-500nm), NIR-1 (685-710nm), NIR-2 (755-773nm), SWIR-1 (1590-1675nm) and SWIR-3 (2305-2385nm). Its spatial resolution is below 8km for wavelengths above 300nm and below 50km for wavelength below 300nm. It covers almost the whole globe (95 % coverage for latitudes in the interval [-7°, 7°]).

#### Available scripts

**Pollutants** 

 - [Nitrogen Dioxide tropospheric column](sentinel-5p/nitrogen_dioxide_tropospheric_column)
 - [Carbon monoxide - CO](sentinel-5p/carbon-monoxide)
 - [Methane - NH4](sentinel-5p/methane)
 - [Sulphur Dioxide - SO2](sentinel-5p/sulphur-dioxide)
 - [Ozone - O3](sentinel-5p/ozone)
 - [Formaldehyde - HCHO](sentinel-5p/formaldehyde)
 - [Nitrogen Dioxide - NO2](sentinel-5p/nitrogen-dioxide)
 - [Aerosol 340/380](sentinel-5p/aer-ai-340-380)
 - [Aerosol 354/388](sentinel-5p/aer-ai-354-388)
 
 **Cloud Products**
 
 - [Cloud Top Height](sentinel-5p/cloud-top-height)
 - [Cloud Base Height](sentinel-5p/cloud-base-height)
 - [Cloud Top Pressure](sentinel-5p/cloud-top-pressure)
 - [Cloud Base Pressure](sentinel-5p/cloud-base-pressure)
 - [Cloud Optical Thickness](sentinel-5p/cloud-optical-thickness)
 - [Cloud Effective Radiometric Fraction](sentinel-5p/cloud-radiometric-fraction)

## <a name="harmonized-landsat-sentinel"></a>Harmonized Landsat Sentinel

Harmonized Landsat Sentinel is a NASA initiative to produce a Virtual Constellation of surface reflectance (SR) data from the Operational Land Imager (OLI) and Multi-Spectral Instrument (MSI) aboard the Landsat 8-9 and Sentinel-2 remote sensing satellites, respectively. The combined measurement enables global observations of the land every 2–3 days. Input products are Landsat 8-9 Collection 2 Level 1 top-of-atmosphere reflectance and Sentinel-2 L1C top-of-atmosphere reflectance, which NASA radiometrically harmonizes to the maximum extent, resamples to common 30-meter resolution, and grids using the Sentinel-2 Military Grid Reference System (MGRS) UTM grid. Because of this, the products are different from Landsat 8-9 Collection 2 Level 2 surface reflectance and Sentinel-2 L2A surface reflectance. For more information about the available bands and data, check the [HLS documentation](https://docs.sentinel-hub.com/api/latest/data/hls/#available-bands-and-data).

#### Available scripts

- [True Color](hls/true_color)
- [False Color](hls/false_color)
- [SWIR](hls/swir)
- [NDVI](hls/ndvi)
- [NDMI](hls/ndmi)
- [NDWI](hls/ndwi)
- [Thermal](hls/thermal)

## <a name="landsat-8"></a>Landsat 8
The Landsat program is the longest running enterprise for acquisition of satellite imagery of Earth, running from 1972. The most recent, [Landsat 8](http://landsat.usgs.gov/landsat8.php){:target="_blank"}, was launched on February 11, 2013. Landsat-8 data has 11 spectral bands with spatial resolutions ranging from 15 to 60 meters. The names of the Landsat-8 bands at your disposal are *B01*, *B02*, *B03*, *B04*, *B05*, *B06*, *B07*, *B08*, *B09*, *B10* and *B11*.

 - [Landsat 8 bands](landsat-8/bands)
 - [Simple RGB composites](landsat-8/composites)
 - [True Color](landsat-8/true-color)
 - [False Color](landsat-8/false-color)
 - [SWIR](landsat-8/swir)

#### Remote sensing indices
  - [collection](landsat-8/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}
  - [Build-up index](landsat-8/built_up_index)
  - [NDVI](landsat-8/ndvi)
  - [NDMI](landsat-8/ndmi)
  - [NDWI](landsat-8/ndwi)

#### Other available scripts
  - [Land surface temperature (LST) mapping](landsat-8/land_surface_temperature_mapping)
  - [Land surface temperature (LST) comparison](landsat-8/land_surface_temperature_comparison)
  - [Water In Wetlands Index](landsat-8/wiw_L8_script)
  - [Clouds Segmentation](landsat-8/clouds_segmentation)
  - [Pansharpened true color](landsat-8/true-color-pansharpened)
  - [Thermal visualization](landsat-8/thermal)
  - [Band quality assessment band visualization](landsat-8/bqa)
  
## <a name="landsat-57"></a>Landsat 5 and 7 ESA Archive

Landsat 7 and the retired Landsat 5 orbit's are sun-synchronous, with near-polar orbits, flying at an altitude of 705 km (438 mi). Landsat 5 long outlived its original three-year design life. Developed by NASA and launched in 1984, Landsat 5 has orbited the planet over 150,000 times while transmitting over 2.5 million images land surface images around the world. The Landsat 7 satellite still orbits the the Earth in a sun-synchronous, near-polar orbit, at an altitude of 705 km (438 mi). The satellites are multispectra, providing visible, near infrared, mid infrared and thermal bands.

For more on Landsat 5, including its available bands, read [here](https://www.usgs.gov/land-resources/nli/landsat/landsat-5?qt-science_support_page_related_con=0#qt-science_support_page_related_con){:target="_blank"} and for Landsat 7, read [here.](https://www.usgs.gov/land-resources/nli/landsat/landsat-7?qt-science_support_page_related_con=0#qt-science_support_page_related_con){:target="_blank"}.

- [Landsat 5 and 7 bands](Landsat-57/bands)
- [Simple RGB composites](Landsat-57/composites)

## <a name="landsat-1-5-mss"></a>Landsat 1-5 MSS

Landsat 1-5 MSS (Multispectral Scanner System) collection includes archived data from Landsat missions 1 through 5. It has 4 available bands - green, red and two NIR bands, all in 60 m resolution. Data is available globally since 1972. Learn more about the collection [here](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-landsat-archives-landsat-1-5-multispectral-scanner-collection?qt-science_center_objects=0#qt-science_center_objects).

- [False Color NIR Composite](landsat-1-5-mss/false-color-nir)
- [False Color Ultra Red Composite](landsat-1-5-mss/false-color-ultrared)
- [NDVI](landsat-1-5-mss/ndvi)
- [NDWI](landsat-1-5-mss/ndwi)

## <a name="landsat-4-5-tm"></a>Landsat 4-5 TM

Landsat Thematic Mapper (TM) sensor was carried onboard Landsats 4 and 5. The collection provides 6 spectral bands and 1 thermal infrared band in 120 m resolution, resampled to 30 meters. Data is archived, available globally from July 1987 - December 1993 for Landsat 4 and from March 1984 - May 2012 for Landsat 5. Top of the atmosphere level-1, and surface reflectance level-2 products are provided. The collection is useful for monitoring of vegetation, ice and water resources, change detection and the creation of land use - land cover maps. Learn more about the collection [here](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-landsat-archives-landsat-4-5-thematic-mapper-collection-2?qt-science_center_objects=0#qt-science_center_objects). 

- [True Color](landsat-4-5-tm/true-color) 
- [False Color](landsat-4-5-tm/false-color) 
- [SWIR](landsat-4-5-tm/swir) 
- [NDVI](landsat-4-5-tm/ndvi) 
- [NDMI](landsat-4-5-tm/ndmi)
- [NDWI](landsat-4-5-tm/ndwi) 
- [Thermal](landsat-4-5-tm/thermal) 
- [Multi-temporal assessment of lake water level variations](landsat-4-5-tm/variations_water_level_lakes)

## <a name="landsat-7-etm"></a>Landsat 7 ETM+

Landsat Enhanced Thematic Mapper + (ETM+) is carried on top of Landsat 7 satellite. There are 8 optical and 1 thermal infrared bands available in 30 meter resolution (with panchromatic band in 15 meter resolution). Global data is available since April 1999, with a revisit time of 16 days. Top of the atmosphere level-1, and surface reflectance level-2 products are provided. The collection is useful for monitoring of vegetation, ice and water resources, change detection and the creation of land use - land cover maps. Note that there are data gaps for all images acquired since 2003-05-30 due to sensor failure. Learn more about the collection [here](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-7?qt-science_support_page_related_con=0#qt-science_support_page_related_con).

- [True color composite](landsat-7-etm/true-color)
- [False Color Composite](landsat-7-etm/false-color)
- [SWIR composite](landsat-7-etm/swir)
- [NDVI](landsat-7-etm/ndvi)
- [NDWI](landsat-7-etm/ndwi)
- [Moisture Index NDMI](landsat-7-etm/moisture-index)
- [Thermal visualization](landsat-7-etm/thermal)

## <a name="modis"></a>MODIS
The Moderate Resolution Imaging Spectroradiometer (MODIS) MCD43A4 version 6 on Sentinel Hub is hosted at Amazon Web Services (AWS). Dataset is updated daily and provides the 500 meter Nadir Bidirectional reflectance distribution function Adjusted Reflectance (NBAR) data of MODIS "land" bands 1-7: *B01*, *B02*, *B03*, *B04*, *B05*, *B06* and *B07*.

  - [MODIS bands](modis/bands)
  - [True Color](modis/true-color)
  - [False Color](modis/false-color)
  - [SWIR](modis/swir)

#### Remote sensing indices
  - [collection](modis/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}
  - [NDVI](modis/ndvi)
  - [NDMI](modis/ndmi)
  - [NDWI](modis/ndwi)
  - [Salinity Index](modis/salinity-index)

## <a name="dem"></a>DEM

DEM (digital elevation model) is a 3D representation of the terrain's surface created from terrain elevation data. It can be used for terrain analysis and orthorectification, which helps improve the accuracy of satellite imagery. With DEM, you are able to measure and analyze your area of interest or integrate data into a 3D application as a terrain data source. Sentinel Hub is using MapZen's DEM, available through Amazon Web Services (AWS) in US. This dataset is based on SRTM30 (30 m resolution) but is in several places improved with local datasets. It is static and does not depend on the date (the values are updating as MapZen is improving the dataset). Read the blog post on [how to explore the DEM dataset](https://medium.com/sentinel-hub/digital-elevation-model-dem-3c05141bb03d) and [see our API documentation for details](https://docs.sentinel-hub.com/api/latest/data/dem/).

  - [DEM color visualization](dem/dem-color)
  - [DEM grayscale visualization](dem/dem-grayscale)
  - [DEM sepia visualization](dem/dem-sepia)
  - [DEM topographic visualization](dem/dem-topographic)
  - [DEM contour lines](dem/contour-lines)
  - [DEM difference visualization](dem/dem-difference)

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
 - [UDM2 Cloud/Snow Classification](planet_scope/cloud_classification)

## <a name="sky_sat"></a>SkySat (Commercial)

<a href="https://www.planet.com/products/planet-imagery/">SkySat</a> satellite constellation consists of 21 satellites, which were launched between 2013 and 2020. The satellites are based on a CubeSat concept but are a bit bigger comparing to the PlanetScope's satellites. Because of its rapid revisit time, this data is suitable to monitor fast changes on earth's surface. However, note that the data acquisition must be tasked, data is not acquired systematically. For more information on SkySat, visit our <a href="https://docs.sentinel-hub.com/api/latest/data/planet/skysat/">documentation page</a>.

The spectral bands of SkySat data are the following:

*Blue - 450-515 nm, resolution 0.5m*

*Green - 515-595 nm, resolution 0.5m*

*Red - 605-695 nm, resolution 0.5m*

*NIR - 740-900 nm Near Infrared, resolution 0.5m*

*Pan - 450-900nm Panchromatic, resolution 0.5*

 - [True Color](skysat/true_color)
 - [Panchromatic](skysat/panchromatic)
 - [NDVI with visualization](skysat/ndvi)

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
 - [Detection of Lake Extent Changes with Landsat](data-fusion/lake-extent-changes)
 - [Mapping Soybean and Maize NDVI with Sentinel-1 and Sentinel-2](data-fusion/ndvi_s1_s2)
 - [Sentinel-2 with cloudy parts replaced by Sentinel-1](data-fusion/s2l1c_s1grd_cloud_replacement)
 - [Ship detection with Sentinel-1 and Sentinel-2](data-fusion/ship_detection_s1_s2)
 - [Built-up area detection with Sentinel-1 and Sentinel-2](data-fusion/urban_s1_s2)
 - [Sentinel-3 OLCI true color under Sentinel-5P products](data-fusion/olci_under_s5)
 - [DEM contour lines over true color Landsat 8](data-fusion/dem_contour_over_l8)
 - [Forest fire progression monitoring with Sentinel-2 and Sentinel-1](data-fusion/s2_s1_forest_fire_progression)
 - [S2L2A Enhancement using S3SLTR F2 For Wildfire Detection](data-fusion/s2_s3slstr_wildfire_detection)
 - [Historic NDVI changes with Landsat 4-5 TM and Landsat 8](data-fusion/historic-landsat-changes)
 - [Sand-Oriented Land Cover Classification with Sentinel-1 and Sentinel-2](data-fusion/sand-oriented_land_cover_classification_s1_s2)
 - [Thermal visualization and water in wetlands with Landsat 8 L1 & L2](data-fusion/thermal_visualization_and_water_in_wetlands)

## <a name="copernicus_services"></a>Copernicus services

### CORINE Land Cover  

In 1985 the 'Coordination of Information on the Environment' (CORINE) programme was initiated by the European Commission. It aimed at collecting environmental information on high priority topics for the European Union (air, water, soil, land cover, coastal erosion, biotopes, etc.). Since 1994, the established databases and programmes are managed by the [European Environment Agency (EEA)](https://www.eea.europa.eu/). The [CORINE Land Cover (CLC) inventory](https://land.copernicus.eu/pan-european/corine-land-cover) is a vector-based dataset that consists of 44 land cover and land use classes. There are altogether 5 mapping inventories implemented since 1986, producing five status layers (CLC1990, CLC2000, CLC2006, CLC2012, CLC2018), 4 CLC-Change (CLCC) layers for the corresponding periods (1990-2000, 2000-2006, 2006-2012, 2012-2018) and 4 CLC Accounting  Layers for 2000, 2006, 201, 2018.  
[CLC Accounting Layers](https://www.eea.europa.eu/data-and-maps/data/corine-land-cover-accounting-layers) are CLC status layers modified for the purpose of consistent statistical analysis in the land cover change accounting system at EEA.  
CORINE Land Cover data is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/corine/).

#### Available scripts
- [CORINE Land Cover visualisation script](copernicus_services/corine_land_cover)
- [CORINE Land Cover Accounting Layers visualisation script](copernicus_services/corine_land_cover_accounting_layer)

### Global Land Cover

Global Land Cover products at 100 m resolution are delivered annually by [ The Copernicus Global Land Service (CGLS)](https://land.copernicus.eu/global/products/lc). The most recent collection 3 (version 3.0.1) of 100 m Land Cover products for the years 2015 - 2019 were generated from the PROBA-V 100 m and 300 m satellite observations and several other ancillary datasets, with global coverage. Global Land Cover products are generated from 3 years input data in three modes: base reference, consolidated or near real time mode.  As from 2020, (2019-conso and 2020-nrt products) are planned to be generated from the combination of Sentinel-1 and Sentinel-2 satellite observations following end of PROBA-V operations. The  Global Land Cover data contains one main _land cover discrete classification map_ and several other additional layers. For more information on Global land cover products, see the [product User Manual](https://land.copernicus.eu/global/sites/cgls.vito.be/files/products/CGLOPS1_PUM_LC100m-V3_I3.3.pdf).

Global Land Cover data is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/global-land-cover/)

#### Available scripts

- [Global Land Cover discrete classification map visualisation script](copernicus_services/global_land_cover)

### Water Bodies 
The Global  Water Bodies product shows the surface extent covered by inland water on permanent, seasonal or occasional basis. The  product available here is the  [Water Bodies  100m Version 1](https://land.copernicus.eu/global/products/wb) collection which is derived from Sentinel-2 level 1C data, starting from October 2020 after the end of the PROBA-V mission and is delivered as a monthly composite product at 100m resolution. The Water Bodies product contains one main water Bodies detection layer (WB) and one Quality layer (QUAL) that provides information on the seasonal dynamics of the detected water bodies. Water Bodies detection layer (WB) shows water bodies  detected using the Modified Normalized Difference Water Index [(MNDWI)](https://en.wikipedia.org/wiki/Normalized_difference_water_index) derived from Sentinel-2 Level 1C data. The Quality layer (QUAL) is generated from water body occurrence statistics computed from previous monthly Water Bodies products.The occurrence statistics is ranked from low occurrence to permanent occurrence. More information about the data can be obtained from the [Water Bodies product](https://land.copernicus.eu/global/products/wb) page.

Water Bodies 100m data is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/water-bodies/)

#### Available scripts
- [Water Bodies visualisation script](copernicus_services/water-bodies)
- [Water Bodies Occurrence visualisation script](copernicus_services/water-bodies-occurence)  

### Vegetation Indices, daily
Vegetation Indices (VI) product is part of the Copernicus Land Monitoring Service (CLMS), pan-European High Resolution Vegetation Phenology and Productivity [(HR-VPP)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity) product suite. 
The product is comprised of 4 raw Vegetation Indices; (1) Normalized Difference Vegetation Index (NDVI), (2) Leaf Area Index (LAI), 
(3) Fraction of Absorbed Photosynthetically Active Radiation (FAPAR) and (4) Plant Phenology Index (PPI) generated near real-time (NRT) from Sentinel-2 satellite observations. 
The raw Vegetation Indices are provided on a daily basis at 10m resolution from October 2016 onwards. Therefore VI products are available over the EEA39 region for the respective observation day 
based on 5-day revisit period of Sentinel-2. The VIs are accompanied by  a related QFLAG2 band that flags clouds, shadows, snow, open water and other areas where the VI retrieval is less reliable. 
More information about raw vegetation indices is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/product-user-manual-of-vegetation-indices/)  
Vegetation Indices is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/phenology/).

- [LAI visualisation script](copernicus_services/vi-lai)
- [PPI visualisation script](copernicus_services/vi-ppi)
- [NDVI visualisation script](copernicus_services/vi-ndvi)
- [FAPAR visualisation script](copernicus_services/vi-fapar)

### Seasonal Trajectories, 10-daily
Seasonal Trajectories (ST) product is a filtered time series of [Plant Phenology Index(PPI)](https://www.nateko.lu.se/research/remote-sensing-and-earth-observation/lund-earth-observation-research-group/vegetation-phenology) provided yearly on a 10-daily basis at 10m resolution . 
It is part of the Copernicus Land Monitoring Service (CLMS), pan-European High Resolution Vegetation Phenology and Productivity [(HR-VPP)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity) product suite. 
The Seasonal Trajectories PPI is derived through fitting a smoothing and gap filling function to the yearly time-series raw PPI values generated from Sentinel-2 satellite observations. 
In addition to the PPI band, a  QFLAG band  indicating the quality of the smoothing process is included. 
The Seasonal Trajectories  provide the vegetation status for each pixel on a regular 10-day time step from January 1 2017 onwards over the  EEA39 region. 
More information about ST product is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/product-user-manual-of-seasonal-trajectories/)  
Seasonal Trajectories is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/phenology/).  

#### Available scripts
- [PPI visualisation script](copernicus_services/st-ppi)

### Vegetation Phenology and Productivity Parameters, yearly    
Vegetation Phenology and Productivity Parameters (VPP) product is part of the Copernicus Land Monitoring Service (CLMS), 
pan-European High Resolution Vegetation Phenology and Productivity [(HR-VPP)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity) product suite. 
The VPP product is comprised of 13 parameters that describe specific stages of the seasonal vegetation growth cycle. 
These parameters are extracted from Seasonal Trajectories of the [Plant Phenology Index(PPI)](https://www.nateko.lu.se/research/remote-sensing-and-earth-observation/lund-earth-observation-research-group/vegetation-phenology) 
derived from Sentinel-2 satellite observations at 10m resolution. Since growing seasons can traverse years, VPP parameters are provided for a maximum of two growing seasons per year. 
The  parameters include (1) start of season (date, PPI value and slope), (2) end of season (date, PPI value and slope), (3)length of season, (4) minimum of season, 
(4) peak of the season (date and PPI value), (5) amplitude, (6) small integrated value and (7) large integrated value. 
VPP parameters are generated over the EEA39 region on a yearly frequency from January 1 2017 onwards. 
Among other applications, the high-resolution phenology data provides a detailed assessment of the impacts of human or climate change on the ecosystem through monitoring of vegetation responses to disturbances, e.g. droughts, storms, insect infestations, and to human influence from global to local levels. 
More information about VPP product is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/product-user-manual-of-seasonal-trajectories/)  
Vegetation Phenology and Productivity Parameters is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/phenology/).


#### Available scripts
- [AMPL visualisation script](copernicus_services/vpp-amplitude-ampl)
- [MAXV visualisation script](copernicus_services/vpp-season-maximum-value-maxv)
- [MINV visualisation script](copernicus_services/vpp-season-minimum-value-minv)
- [SOSV visualisation script](copernicus_services/vpp-start-of-season-value-sosv)
- [EOSV visualisation script](copernicus_services/vpp-end-of-season-value-eosv)
- [RSLOPE visualisation script](copernicus_services/vpp-slope-of-senescent-period-rslope)
- [LSLOPE visualisation script](copernicus_services/vpp-slope-of-greening-up-period-lslope)
- [SPROD visualisation script](copernicus_services/vpp-seasonal-productivity-sprod)
- [TPROD visualisation script](copernicus_services/vpp-total-productivity-tprod)

### High-Resolution Snow & Ice Monitoring

The High-Resolution Snow & Ice Monitoring service ([HR-S&I](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring)) is part of the Copernicus Land Monitoring Service (CLMS). The snow aspect of the service provides products measuring Snow cover (FSC, FSTOC, FSCOG, GFSC), Snow state conditions (WDS, SWS) and persistent snow area (PSA). There are also ice products that measure ice cover (RLIE) and aggregated river and lake ice extent (ARLIE).

#### Fractional Snow Cover

The Fractional Snow Cover (FSC) product provides the snow fraction at the Top Of Canopy (FSCTOC) and On Ground (FSCOG). NDSI is also provided as part of this service.

##### Available scripts

- [FSC FSCOG visualisation script](copernicus_services/hrsi-fsc-on-ground-fsi)
- [FSC FSCOG quality visualisation script](copernicus_services/hrsi-fsc-on-ground-fsi-quality)
- [FSC FSTOC visualisation script](copernicus_services/hrsi-fsc-top-of-canopy-fsi)
- [FSC FSTOC quality visualisation script](copernicus_services/hrsi-fsc-top-of-canopy-fsi-quality)
- [FSC NDSI visualisation script](copernicus_services/hrsi-fsc-ndsi)

#### Daily cumulative Gap-filled Fractional Snow Cover

The daily cumulative Gap-filled Fractional Snow Cover (GFSC) product is a more complete version of the FSC product; gap-filled both at a spatial and temporal scale.

##### Available scripts

- [GFSC FSC visualisation script](copernicus_services/hrsi-gfsc-fsc)
- [GFSC FSC quality visualisation script](copernicus_services/hrsi-gfsc-fsc-quality)

#### SAR Wet Snow in high mountains

The SAR Wet Snow (SWS) product provides information on the wet snow extent in high-mountain areas. 

##### Available scripts

- [SWS WSM visualisation script](copernicus_services/hrsi-sws-wet-snow-classification-high-mountains)
- [SWS WSM quality visualisation script](copernicus_services/hrsi-sws-wet-snow-classification-high-mountains-quality)

#### Wet / Dry Snow - Snow state classification

The Wet/Dry Snow (WDS) product differentiates the snow state conditions within the snow mask defined by the FSCTOC information.

##### Available scripts

- [WDS SSC visualisation script](copernicus_services/hrsi-wds-ssc)
- [WDS SSC quality visualisation script](copernicus_services/hrsi-wds-ssc-quality)

#### Persistent Snow Area

The Persistent Snow Area (PSA) product is generated annually from FSC products and provides the extent of persistent snow cover for that year (the area where snow is present throughout the hydrological year).

##### Available scripts

- [PSA visualisation script](copernicus_services/hrsi-psa-psa)
- [PSA quality visualisation script](copernicus_services/hrsi-psa-psa-quality)

More information about the HR-S&I snow production workflows that highlights the dependencies between the diferent products and how they are derived can be found [here](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products).

## <a name="sentinel2-120m-mosaic"></a>Sentinel-2 L2A 120m Mosaic

Sentinel-2 L2A 120m mosaic is a derived product, offering a cloudless mosaic of the whole world for all 12 Sentinel-2 bands. It is thus possible to create Sentinel-2 visualizations on a global level. The resolution of the collection is 120 meters. The product contains best pixel values for 10-daily periods, modelled by removing the cloudy pixels and then performing interpolation among remaining values. As clouds can be missed and as there are some parts of the world which have lengthy cloudy periods, clouds might be remaining in some parts. The collection is available for 2019 (with 6 Sentinel-2 bands) and annually since 2020 (all 12 Sentinel-2 bands). The modelling script is available [here](https://sentinel-hub.github.io/custom-scripts/sentinel-2/interpolated_time_series/).


Find related resources and more information about the collection [here](https://collections.sentinel-hub.com/sentinel-s2-l2a-mosaic-120/).

- [True Color](sentinel2-120m-mosaic/true-color)
- [False Color](sentinel2-120m-mosaic/false-color)
- [Highlight Optimized Natural Color](sentinel2-120m-mosaic/highlight-optimized)
- [NDVI](sentinel2-120m-mosaic/ndvi)
- [NDMI](sentinel2-120m-mosaic/ndmi)
- [NDWI](sentinel2-120m-mosaic/ndwi)


## <a name="other_collections"></a>Other collections

### CNES Land cover map

The CNES Land Cover Map (Occupation des Sols, OSO) produces land classification for Metropolitan France at 10 m spatial resolution based on Sentinel-2 L2A data within the Theia Land Cover CES framework. 
Maps for 2020, 2019, and 2018 use a 23-categories nomenclature. For earlier maps in 2017 and 2016, a fully compatible 17-classes nomenclature is employed. 

#### Available scripts
- [CNES land cover classification visualisation script](other_collections/cnes_land_cover_classification)
- [CNES land cover classifier confidence visualisation script](other_collections/cnes_land_cover_confidence)
- [CNES land cover validity visualisation script](other_collections/cnes_land_cover_validity)

### Global Human Settlements Layer

The Global Human Settlement (GHS) framework produces global maps of built-up, population density and settlements to monitor human presence on Earth over time. The data are managed by the Joint Research Centre (JRC) and the DG for Regional and Urban Policy (DG REGIO) of the European Commission, together with the international partnership GEO Human Planet Initiative of the GEO Human Planet Initiative.

#### Available scripts
- [GHS-Built-S2 visualisation script](other_collections\global-human-settlement-layer-ghs-built-s2)

### Global Surface Water

The Global Surface Water dataset was developed by the European Commission's Joint Research Centre (JRC) within the framework of the Copernicus Programme. It is derived from Landsat 5, 7 and 8 imagery and shows various aspects of the spatio-temporal distribution of surface water between 1984 and 2020 (with annual revisions) at the global scale in six different layers.

1. Occurrence - *Intra- and inter-annual frequency of surface water presence in the entire time range.*
2. Occurrence Change Intensity - *Changes in water occurrence between two epochs, the first ranging from 1984 to 1999 and the second covering 2000 to 2020.*
3. Seasonality - *Intra-annual distribution of surface water in the selected review year.*
4. Recurrence - *Inter-annual variability of surface water presence in a defined water period within the entire time range.*
5. Transitions - *Visualises changes in the three surface water classes (1) not water, (2) seasonal water, and (3) permanent water between the first and last year in the entire time period.*
6. Extent - *Maximum extent of surface water bodies in the entire time range.*

Global Surface Water data is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/global-surface-water/).

Please check the official [Global Surface Water website](https://global-surface-water.appspot.com/) for more details. Detailed information on the processing methodology for the included layers can be found in the [Data Users Guide](https://global-surface-water.appspot.com/download) and [Pekel et al. (2016)](https://www.nature.com/articles/nature20584)  as the associated scientific publication.

#### Available scripts

- [Global Surface Water Occurrence visualisation script](other_collections/global_surface_water_occurrence)
- [Global Surface Water Occurrence Change Intensity visualisation script](other_collections/global_surface_water_change)
- [Global Surface Water Seasonality visualisation script](other_collections/global_surface_water_seasonality)
- [Global Surface Water Recurrence visualisation script](other_collections/global_surface_water_recurrence)
- [Global Surface Water Transitions visualisation script](other_collections/global_surface_water_transitions)
- [Global Surface Water Extent visualisation script](other_collections/global_surface_water_extent)

### WorldCover
  [WorldCover](https://esa-worldcover.org/en) is a global land cover map produced at 10m resolution based on combination of both Sentinel-1 and Sentinel-2 data. 
  In areas where Sentinel-2 images are covered by clouds for an extended period of time, Sentinel-1 data then provides complimentary information on the structural 
  characteristics of the observed land cover. Therefore, the combination of Sentinel-1 and Sentinel-2 data makes it possible to update the land cover map almost in real time. 
  WorldCover has been produced for 2020 with a global coverage. It provides valuable information for applications such as biodiversity, food security, carbon assessment and climate modelling.  
  WorldCover data is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/worldcover/).

#### Available scripts
- [WorldCover visualisation script](other_collections/worldcover)

### 10m Annual Land Use Land Cover (9-class)
  The [10m Annual Land Use Land Cover (LULC)](https://www.impactobservatory.com/global_maps/) map is collaboratively produced by Impact Observatory, Microsoft, and Esri.
  The data collection is available globally and derived from ESA Sentinel-2 imagery at 10m resolution, using Impact Ovservatory's state of the art deep learning AI land classification model which is trained by billions of human-labeled image pixels.
  There are 9 LULC classes generated by the algorithm, including Built, Crops, Trees, Water, Rangeland, Flooded Vegetation, Snow/Ice, Bare Ground, and Clouds.

#### Available scripts
  - [10m Annual Land Use Land Cover visualisation script](other_collections/impact-observatory-lulc)

# <a name="howto"></a>Adding new custom scripts
Have a look at the [template](example) and follow the procedure described there.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
