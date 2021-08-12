# Default EO Browser layers

Here you can find the list of all the scripts used in EO Browser, which are also on the repository. They are listed by EO Browser layer name and dashboard ID. 
See separate layers.json file for a JSON file of full URLs to the scripts. 

Legend: 
- `[<Layer ID>](<Link to the script>) - <Layer name in EOB>`

## Sentinel-2

### Sentinel-2 L1C

Configuration name: _EO_Browser-Sentinel-2-L1C API production_

- [1_TRUE_COLOR](/sentinel-2/true_color/) - True Color
- [2_FALSE_COLOR](/sentinel-2/false_color_infrared/) - False color
- [4-FALSE-COLOR-URBAN](/sentinel-2/false-color-urban-rgb/) - False color (urban)
- [6-SWIR](/sentinel-2/swir-rgb/) - SWIR
- [3_NDVI](/sentinel-2/ndvi/) - NDVI
- [7-NDWI](/sentinel-2/ndwi/) - NDWI
- [5-MOISTURE-INDEX1](/sentinel-2/ndmi/) - Moisture index
- [8-NDSI](/sentinel-2/ndsi-visualized/) - NDSI

### Sentinel-2 L2A

Configuration name: _EO_Browser-Sentinel-2-L2A API production_

- [1_TRUE_COLOR](/sentinel-2/true_color/) - True Color
- [2_FALSE_COLOR](/sentinel-2/false_color_infrared/) - False color
- [4-FALSE-COLOR-URBAN](/sentinel-2/false-color-urban-rgb/) - False color (urban)
- [6-SWIR](/sentinel-2/swir-rgb/) - SWIR
- [3_NDVI](/sentinel-2/ndvi/) - NDVI
- [7-NDWI](/sentinel-2/ndwi/) - NDWI
- [5-MOISTURE-INDEX1](/sentinel-2/ndmi/) - Moisture index
- [8-NDSI](/sentinel-2/ndsi-visualized/) - NDSI
- [SCENE-CLASSIFICATION](/sentinel-2/scene-classification/) - Scene classification map

## Sentinel-1 GRD

- [7_SAR-URBAN](https://custom-scripts.sentinel-hub.com/sentinel-1/urban_areas/) - SAR urban
- [ENHANCED-VISUALIZATION](https://custom-scripts.sentinel-hub.com/sentinel-1/sar_false_color_visualization-2/) - Enhanced visualization

## Sentinel-3 OLCI

- [1_TRUE_COLOR_ENHANCED](https://custom-scripts.sentinel-hub.com/sentinel-3/enhanced_true_color-2/#) - True color - enhanced
- [6_TRUE-COLOR-HIGLIGHT-OPTIMIZED](https://custom-scripts.sentinel-hub.com/sentinel-3/true_color_highlight_optimized/#) - True color - higlight optimized
- [2_OTCI](https://custom-scripts.sentinel-hub.com/sentinel-3/otci/) - OTCI
- [3_TRISTIMULUS](https://custom-scripts.sentinel-hub.com/sentinel-3/tristimulus/#) - Tristimulus

## Sentinel-3 SLSTR

- [FALSE_COLOR](https://custom-scripts.sentinel-hub.com/slstr/false-color-321/) - False Color based on bands S3, S2, and S1
- [F1_VISUALIZED](https://custom-scripts.sentinel-hub.com/slstr/f1-brightness-temperature/) - F1 Brightness Temperature

## Sentinel-5P

- [CO_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/carbon-monoxide/) - Carbon Monoxide
- [AER_AI_340_AND_380_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/aer-ai-340-380/) - AER AI 340 and 380
- [AER_AI_354_AND_388_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/aer-ai-354-388/) - AER AI 354 and 388
- [CH4_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/methane/) - Methane
- [HCHO_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/formaldehyde/) - Formaldehyde
- [NO2_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/nitrogen-dioxide/) - Nitrogen Dioxide
- [O3_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/ozone/) - Ozone
- [SO2_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/sulphur-dioxide/) - Sulfur Dioxide
- [CLOUD_BASE_HEIGHT_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/cloud-base-height/) - Base Height
- [CLOUD_BASE_PRESSURE_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/cloud-base-pressure/) - Base pressure
- [CLOUD_FRACTION_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/cloud-radiometric-fraction/) - Effective radiometric cloud fraction
- [CLOUD_OPTICAL_THICKNESS_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/cloud-optical-thickness/) - Optical thickness
- [CLOUD_TOP_HEIGHT_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/cloud-top-height/) - Top height
- [CLOUD_TOP_PRESSURE_VISUALIZED](https://custom-scripts.sentinel-hub.com/sentinel-5p/cloud-top-pressure/) - Top pressure

## Landsat 1-5 MSS

- [FALSE-COLOR-NEAR-INFRARED](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/false-color-nir/) - False Color Near Infrared
- [FALSE-COLOR-ULTRA-RED](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/false-color-ultrared/) - False Color Ultra Red
- [NDVI](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/ndvi/) - NDVI
- [NDWI](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/ndwi/) - NDWI

## Landsat 4-5 TM 

- [1_TRUE_COLOR](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/true-color/) - True color
- [3_FALSE_COLOR](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/false-color/) - False color
- [4_NDVI](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/ndvi/) - NDVI
- [5_NDWI](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/ndwi/) - NDWI
- [THERMAL](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/thermal/) - THERMAL

## Landsat 7 ETM+ 

- [1_TRUE_COLOR](https://custom-scripts.sentinel-hub.com/landsat-7-etm/true-color/) - True Color
- [FALSE-COLOR](https://custom-scripts.sentinel-hub.com/landsat-7-etm/false-color/) - False color
- [MOISTURE-INDEX](https://custom-scripts.sentinel-hub.com/landsat-7-etm/moisture-index/) - Moisture Index
- [NDVI](https://custom-scripts.sentinel-hub.com/landsat-7-etm/ndvi/) - NDVI
- [NDWI](https://custom-scripts.sentinel-hub.com/landsat-7-etm/ndwi/) - NDWI
- [SWIR](https://custom-scripts.sentinel-hub.com/landsat-7-etm/swir/) - SWIR
- [THERMAL](https://custom-scripts.sentinel-hub.com/landsat-7-etm/thermal/) - Thermal

## Landsat 8

- [1_TRUE_COLOR](https://custom-scripts.sentinel-hub.com/landsat-8/true-color/) - True color
- [2_TRUE_COLOR_PANSHARPENED](https://custom-scripts.sentinel-hub.com/landsat-8/true-color-pansharpened/) - True color - pansharpened
- [3_FALSE_COLOR](https://custom-scripts.sentinel-hub.com/landsat-8/false-color/) - False color
- [4-NDVI](https://custom-scripts.sentinel-hub.com/landsat-8/ndvi/) - NDVI
- [THERMAL](https://custom-scripts.sentinel-hub.com/landsat-8/thermal/) - Thermal

## MODIS

- [1-TRUE-COLOR](https://custom-scripts.sentinel-hub.com/modis/true-color/) - True color
- [2-FALSE-COLOR](https://custom-scripts.sentinel-hub.com/modis/false-color/) - False Color
- [3-NDVI](https://custom-scripts.sentinel-hub.com/modis/ndvi/) - NDVI
- [NDWI](https://custom-scripts.sentinel-hub.com/modis/ndwi/) - NDWI
- [SALINITY-INDEX](https://custom-scripts.sentinel-hub.com/modis/salinity-index/) - Normalized Difference Salinity Index

## DEM

Same for all 3 DEM collections

- [COLOR](https://custom-scripts.sentinel-hub.com/dem/dem-color/) - Color
- [GRAYSCALE](https://custom-scripts.sentinel-hub.com/dem/dem-grayscale/) - Grayscale
- [SEPIA](https://custom-scripts.sentinel-hub.com/dem/dem-sepia/) - Sepia

## Copernicus Services

### CORINE Land Cover

- [1_CORINE-LAND-COVER](https://custom-scripts.sentinel-hub.com/copernicus_services/corine_land_cover/) - Corine Land Cover

### Global Land Cover

- [DISCRETE-CLASSIFICATION-MAP](https://custom-scripts.sentinel-hub.com/copernicus_services/global_land_cover/) - Discrete Classification Map

### Global Surface Water

- [1_OCCURRENCE](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_occurrence/) - Global Surface Water Occurrence
- [2_CHANGE-INTENSITY](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_change/) - Global Surface Water Occurrence Change Intensity
- [3_SEASONALITY](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_seasonality/) - Global Surface Water Seasonality
- [4_RECURRENCE](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_recurrence/) - Global Surface Water Recurrence
- [5_TRANSITIONS](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_transitions/) - Global Surface Water Transitions
- [6_EXTENT](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_extent/) - Global Surface Water Extent

### Water Bodies

- [WATER-BODIES](https://custom-scripts.sentinel-hub.com/copernicus_services/water-bodies/) - Water Bodies
- [WATER-BODIES-OCCURENCE](https://custom-scripts.sentinel-hub.com/copernicus_services/water-bodies-occurence/) - Water Bodies Occurrence






 



