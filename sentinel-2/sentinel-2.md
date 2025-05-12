---
layout: default
title: Sentinel-2
nav_order: 2
parent: Sentinel
permalink: /sentinel/sentinel-2/
---

# Sentinel-2
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

Dedicated to supplying data for [Copernicus services](https://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2), Sentinel-2 carries a multispectral imager with a swath of 290 km. The imager provides a versatile set of 13 spectral bands spanning from the visible and near infrared to the shortwave infrared, featuring four spectral bands at 10 m, six bands at 20 m and three bands at 60 m spatial resolution. As indices primarily deal with combining various band reflectances, the table of 13 bands is given here for reference (see [here](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/msi-instrument){:target="_blank"} for details). The names of the Sentinel-2 bands at your disposal are *B01*, *B02*, *B03*, *B04*, *B05*, *B06*, *B07*, *B08*, *B8A*, *B09*, *B10*, *B11* and  *B12*.

 - [Sentinel-2 bands](/sentinel-2/bands)
 - [Simple RGB composites](/sentinel-2/composites)

#### Popular RGB composites
 - [True color](/sentinel-2/true_color) - Simplistic true color image from red, green and blue bands.
 - [True color optimized L1C](/sentinel-2/l1c_optimized) - Optimized L1C True Color image
 - [True color optimized L2A](/sentinel-2/l2a_optimized) - Optimized L2A True Color image
 - [False color infrared](/sentinel-2/false_color_infrared) - False Color Infrared RGB Composite
 - [SWIR](/sentinel-2/swir-rgb) - Short Wave Infrared RGB Composite
 - [False Color Urban](/sentinel-2/false-color-urban-rgb) - False Color Urban RGB Composite
 - [Wildfire visualization](/sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})

#### Remote sensing indices
 - [NDVI](/sentinel-2/ndvi) - normalized difference vegetation index
 - [NDVI uncertainty](/sentinel-2/ndvi_uncertainty) - visualization of uncertainty of NDVI due to uncertainty in band values
 - [NDVI time series](/sentinel-2/ndvi_time_series) - NDVI time series as a multi-band TIFF with a JSON containg a list of timestamps
 - [NDVI difference](/sentinel-2/ndvi_difference) - NDVI difference between two acquisitions 
 - [collection](/sentinel-2/indexdb) of remote sensing indices from an extensive [Index database (IDB)](https://www.indexdatabase.de/){:target="_blank"}
 - [MAX NDVI](/sentinel-2/max_ndvi)
 - [ARI](/sentinel-2/ari) - anthocyanin reflectance index
 - [mARI](/sentinel-2/mari) - modified anthocyanin reflectance index
 - [ARVI](/sentinel-2/arvi) - atmospherically resistant vegetation index
 - [CHL_REDEDGE](/sentinel-2/chl_rededge) - chlorophyll red-edge
 - [REDEDGE_POSITION](/sentinel-2/red_edge_position) - red edge position index
 - [EVI](/sentinel-2/evi) - enhanced vegetation index
 - [EVI2](/sentinel-2/evi2) - enhanced vegetation index 2
 - [GNDVI](/sentinel-2/gndvi) - green normalized difference vegetation index
  - [kNDVI](/sentinel-2/kndvi) - new alternative to NDVI with more complex transfer function
 - [MCARI](/sentinel-2/mcari) - modified chlorophyll absorption in reflectance index
 - [MSI](/sentinel-2/msi) - moisture index
 - [NDMI](/sentinel-2/ndmi) - normalized difference moisture index
 - [NDWI](/sentinel-2/ndwi) - normalized difference water index
 - [NDMI STRESS](/sentinel-2/ndmi_special) - normalized difference moisture index for crop moisture stress
 - [NBR](/sentinel-2/nbr) - normalized burn ratio
 - [NDII](/sentinel-2/ndii) - normalized difference 819/1600 NDII
 - [NDCI](/sentinel-2/ndci) - normalized difference chlorophyll index
 - [NDSI](/sentinel-2/ndsi) - normalised difference snow index
 - [PSSRB1](/sentinel-2/pssrb1) - pigment specific simple ratio for chlorophyll b (800/650 )
 - [SAVI](/sentinel-2/savi) - soil adjusted vegetation index
 - [SIPI1](/sentinel-2/sipi1) - structure insensitive pigment index
 - [LAI](/sentinel-2/lai) - Leaf Area Index
 - [Leaf chlorophyll content](/sentinel-2/cab)
 - [Canopy chlorophyll content](/sentinel-2/ccc)
 - [FAPAR](/sentinel-2/fapar) - the fraction of absorbed photosynthetically active radiation
 - [FCOVER](/sentinel-2/fcover) - the fraction of green vegetation cover
 - [Color correction with Sentinel Hub](/sentinel-2/poor_mans_atcor)
 - [PSRI](/sentinel-2/psri) - plant senescence reflectance index
 - [Global mosaic best pixel selection script](/sentinel-2/s2gm)
 - [TOA Ratio B09-B8A ColorMap Blue-Red & Natural Colours Script](/sentinel-2/ratio_b09-b8a_colormap_blue_red_v0.1)
 - [Tonemapped Natural Color script](/sentinel-2/tonemapped_natural_color)
 - [Highlight Optimized Natural Color](/sentinel-2/highlight_optimized_natural_color)
 - [Vegetation condition index ](/sentinel-2/vegetation_condition_index)
 - [Vegetation productivity indicator](/sentinel-2/vegetation_productivity_indicator)
 - [Oil Spill Index](/sentinel-2/oil-spill-index)

#### Cloud detection algorithms
 - [Cohen-Braaten-Yang cloud detection](/sentinel-2/cby_cloud_detection/)
 - [Hollstein Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels detection](/sentinel-2/hollstein)
 - [Cloudless Mosaic](/sentinel-2/cloudless_mosaic)
 - [Cloud statistics](/sentinel-2/cloud_statistics)
 - [Observation outlier detection](/sentinel-2/obs_outlier_detector/)

#### Snow and glaciers algorithms
 - [Snow classifier](/sentinel-2/snow_classifier/)
 - [Monthly snow report](/sentinel-2/monthly_snow_report)
 - [Snow cover change detection](/sentinel-2/snow_cover_change)
 - [NDSI Visualized](/sentinel-2/ndsi) - Visualized normalized difference snow index 

#### Disaster management and prevention algorithms
 - [Detecting deep moist convection](/sentinel-2/deep_moist_convection)
 - [Fire boundary](/sentinel-2/fire_boundary)
 - [Burned area index for sentinel-2](/sentinel-2/bais2)
 - [Multitemporal burnt area analysis](/sentinel-2/burned_area)
 - [Wildfire visualization](/sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})
 - [Burned Area Visualization](/sentinel-2/burned_area_ms)
 - [Deep BAIS2 (Burned Area Index for Sentinel 2)](/sentinel-2/deep_bais2)
 - [Landslide detection for rapid Mapping](/sentinel-2/landslide_detection_rapid_mapping)
 - [Oil Spill Index](/sentinel-2/oil-spill-index)

#### Land use/cover classification algorithms
 - [False Color Composite](/sentinel-2/false_color_composite)
 - [Barren soil](/sentinel-2/barren_soil)
 - [Land Use Visualization for Sentinel-2 Using Linear Discriminant Analysis Script](/sentinel-2/land_use_with_linear_discriminant_analysis)
 - [Bare soil detector](/sentinel-2/bare_soil_detector)
 - [Scene Classification](/sentinel-2/scene-classification)
 - [Built-up Area Classification](/sentinel-2/built_up_classifier_mask)
 - [Forest Disturbance Classification](/sentinel-2/forest_disturbance_classification)

#### Vegetation algorithms

 - [Normalized Difference Yellowness Index (NDYI)](/sentinel-2/ndyi) - Visualisation of blooming in an Amazonian tree species and canola crops
 - [Deep GNDVI](/sentinel-2/deep_gndvi)

#### Agriculture and forestry algorithms
 - [NDVI anomaly detection](/sentinel-2/ndvi_anomaly_detection)
 - [Agricultural growth stage](/sentinel-2/agriculture_growth_stage) - multitemporal NDVI
 - [Forest cut temporal detection](/sentinel-2/forest_cut_temporal_detection)
 - [Pseudo forest canopy density (pseudo-FCD)](/sentinel-2/pseudo_forest_canopy_density)
 - [Infrared agriculture display](/sentinel-2/infrared_agriculture_display)
 - [Forest Disturbance Classification](/sentinel-2/forest_disturbance_classification)

#### Marine and other water bodies environment algorithms
 - [Cyanobacteria chlorophyll-a from Sentinel-2](/sentinel-2/cyanobacteria_chla_ndci_l1c)
 - [Maximum peak height bloom index](/sentinel-2/maximum_peak_height_bloom_index)
 - [White-water detection](/sentinel-2/white_water)
 - [Ocean plastic detector prototype](/sentinel-2/ocean_plastic_detector)
 - [Ulyssys Water Quality Viewer](/sentinel-2/ulyssys_water_quality_viewer) - chlorophyll and suspended sediment for water quality visualization
 - [Satellite Derived Bathymetry Mapping - SDBM](/sentinel-2/satellite_derived_bathymetry_mapping-sdbm)
 - [Aquatic Plants and Algae Custom Script Detector (APA Script)](/sentinel-2/apa_script)
 - [se2waq](/sentinel-2/se2waq) - water quality for Sentinel-2
 - [Water In Wetlands Index (WIW)](/sentinel-2/wiw_s2_script)
 - [Simple Water Bodies' Mapping - SWBM ](/sentinel-2/simple_water_bodies_mapping-swbm)
 - [MAGO Water Quality Monitoring Tool](/sentinel-2/mago_water_quality_monitoring_tool)

#### Urban planning algorithms
 - [Green city](/sentinel-2/green_city)
 - [City highlights](/sentinel-2/city_highlights)
 - [Urban land infrared color](/sentinel-2/urban_land_infrared)
 - [Urban classified](/sentinel-2/urban_classified)

#### Other multi-temporal scripts
 - [Monthly composite](/sentinel-2/monthly_composite)
 - [Water Bodies Mapping - WBM](/sentinel-2/water_bodies_mapping-wbm)
 - [Interpolated time-series](/sentinel-2/interpolated_time_series)

#### Other scripts 
 - [Natural color](/sentinel-2/natural_color) product computed correctly to match the color perceived by the human eye.
 - [Selective Enhancement based on Indices](/sentinel-2/selective_enhancement_based_on_indices)
 - [Homage to Mondrian](/sentinel-2/homage_to_mondrian) - artistic script
 - [Index visualisation](/sentinel-2/index_visualization) - universal script for visualisation of indices
 - [NDVI on L2A Vegetation and natural Colours](/sentinel-2/ndvi-on-vegetation-natural_colours)
 - [PUCK](/sentinel-2/puck) - Perceptually-Uniform Color Map Kit
 - [MixLAI](/sentinel-2/mixlai) - Mix Leaf Area Index
 - [Detection of evapotranspiration levels](/sentinel-2/evapotranspiration_levels)
 - [Aesthetic Neon](/sentinel-2/aesthetic-neon) - Aesthetic visualization for urban and dry (desert) areas
 - [Total Ozone Column over Antarctica snow](/sentinel-2/ozone_column_over_snow)
 - [BRDF normalisation](/sentinel-2/brdf)
 - [Simple Panchromatic](/sentinel-2/simple_panchromatic) - Create a simple greyscale visualization by averaging the 10m true color and NIR bands
 - [Magic Eyes](/sentinel-2/magic_eyes) - A composite optimized for visual interpretation of land cover

#### Scripts including machine learning techniques (eo-learn)

 - [Deep GNDVI](/sentinel-2/deep_gndvi)
 - [Deep BAIS2 (Burned Area Index for Sentinel 2)](/sentinel-2/deep_bais2)
 
