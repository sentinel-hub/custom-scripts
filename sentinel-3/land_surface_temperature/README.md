---
title: Sentinel-3 Land Surface Temperature Mapping
parent: Sentinel-3

layout: script
permalink: /sentinel-3/land_surface_temperature/
nav_exclude: true
---



| Timelapse (2023) of Land Surface Temperature in Sicily during the 2023 heatwave |
| :----------------------------------------------------------------------------------: |
|  !['Timelapse of 2023'](img/S3OLCI-1511248905868594-timelapse_sicily_heatwave.gif)  |


## Evaluate and visualize 

Note that these links include a shortened version of the script with most of the comments removed - otherwise URLs can not be shared.

Sicily, Italy
 - [EO Browser](https://sentinelshare.page.link/gXdV){:target="_blank"} 

Paris, France
 - [Copernicus Browser](https://sentinelshare.page.link/csxC)  

## General description of the script

This script shows Land Surface Temperature by using SLSTR data from Sentinel-3. The SLSTR visualization in EO Browser or Copernicus Browser shows Brightness Temperatures in Kelvin based on the reflectance values of the thermal infrared bands. However, these have to be adjusted based on the estimated emissivity of the surface to calculate local Land Surface Temperature.
The Custom Script Repository already contains a popular script for [Land Surface Temperature visualization based on Landsat-8 OLI and TIRS data](https://custom-scripts.sentinel-hub.com/landsat-8/land_surface_temperature_mapping/), performing the correction of the thermal infrared brightness temperatures using NDVI calculated from the same image. Luckily, Sentinel-3 also allows calculation of thermal infrared brightness temperature based on SLSTR and NDVI based on OLI bands. Additionally, Sentinel-3 has spectral bands that correspond relatively closely to the Landsat-8 bands used by the Land Surface Temperature Script

| Landsat Band | Landsat Band centre | Sentinel-3 Band | Sentinel-3 Band centre | colour or region |
|----------------------|-----------------------------|-------------------------|----------------------|-----------------------|
| TIRS B10 | 10895 nm | SLSTR S08 | 10854 nm | Thermal Infrared |
| OLI B03 | 561.5 nm | OLCI B06 | 560 nm | Green |
| OLI B04 | 654.5 nm | OLCI B08 | 665 nm | Red |
| OLI B05 | 865 nm | OLCI B17 | 865 nm | Near Infrared |

**How to use the script**

1. In Sentinel Hub EO Browser or Copernicus Browser, select "Sentinel-3" as your data source and browse to your date and location of interest. At this step, it doesn't matter whether you select SLSTR or OLCI.
2. On the "visualize" tab, choose "Custom", and "Custom Script"
3. On the "Custom Script" tab, select "use additional datasets (advanced)". The primary dataset will automatically be the one you selected in step 1. You can keep the default alias.
4. From the "additional datasets" dropdown menu, select the other Sentinel-3 dataset (SLSTR or OLCI) and click the **+** sign. Keep the default alias
5. Paste the code of this script into the code window.
6. Click the "Refresh Evalscript" button

7. In the script window, you can choose with the "option" parameter whether to output average (option = 0) or maximum (option = 1) land surface temperature. Standard deviation (option = 2) is currently not functional. If you are looking at a single image, choose 0. If you want to look at a timespan, click "Timespan" at the top right of the panel beside the date selector, and set start and end times. Take care to use a timespan with relatively low cloud cover (<5%>).
8. Set minimum and maximum temperatures for the colour ramp. This will decide what temperature you see as white (hot) and black (cold).
9. If you want, you can also adjust the NDVI value limits for bare soil and vegetation (NDVIs and NDVIv), currently the script uses global values and the emissivity and surface values for various land covers. These were set based on local case studies in the literature.

**Limitations and typical problems:**
-  The script does not contain any cloud detection -  please use the True Colour visualization to check for clouds. Clouds will turn up as colder (darker) pixels in the image.
- Standard deviation calculation for land surface temperature is currently not functional, there is still a bug somewhere. Only options 0 and 1 work.
- These Land Surface Temperature values are not calibrated or tested in any way. The emissivity figures for the individual land cover classes would probably benefit from fine tuning.  

## Description of representative images

| Land Surface Temperatures in Western Hungary under heatwave conditions on 16 August 2022 |
| :----------------------------------------------------------------------------------: |
|  !['Land Surface Temperatures in Western Hungary during August 16 2022'](img\2022-08-16-00_heatwave_hungary.jpg)  |

On this image, the colour scale is stretched between 15 and 40 °C. Sentinel-3 overpasses are typically around 10:00, so not the hottest time of the day, yet already temperatures around 40°C can be observed especially in the lowland agricultural areas. Forests and especially lakes and rivers are substantially cooler. The coldest spots are small clouds - in these cases the sensor images the temperature of the cloud and not the land surface.

## References
 - [Land Surface Temperature Mapping Script for Landsat 8, by Mohor Gartner](https://custom-scripts.sentinel-hub.com/landsat-8/land_surface_temperature_mapping/) - For technical/scientific references, please see the bibliography of this script.
