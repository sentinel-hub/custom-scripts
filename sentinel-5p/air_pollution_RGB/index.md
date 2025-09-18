---
title: Air Pollution RGB
parent: Sentinel-5P
grand_parent: Sentinel
layout: script
permalink: /sentinel-5p/air_pollution_RGB/
layout: script
nav_exclude: true
examples:
- zoom: '6'
  lat: '42.008'
  lng: '16.620'
  datasetId: S5PL2
  fromTime: '2025-08-01T00:00:00.000Z'
  toTime: '2025-08-31T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-5p/air_pollution_RGB/script.js
---


## General description of the script

This script creates an RGB visualization of key air pollutants NO<sub>2</sub>, SO<sub>2</sub> and HCHO, based on their mean values within a studied interval.
It "tricks" Copernicus Browser into creating a data fusion with all three datasets coming from the same source, Sentinel-5PL2. This is necessary because otherwise Sentinel-5P is not configured to return multiple bands.

Red: NO<sub>2</sub> is mainly releasd by internal combustion engines. It represents a public health hazard, worsening asthma and lung conditions such as chronic bronchitis. It is also used as a generic proxy of emissions from industry and traffic. High seas shipping is a particularly important source of this gas.

Green: SO<sub>2</sub> is released by combustion of fossil fuels, especially coal, and by volcanoes. Sulfur dioxide also leads to airway narrowing and thus worsens asthma and bronchitis, but additionally, it is highly irritating to the eyes, nose, throat and lungs.

Blue: Formaldehyde (HCHO) is also released during biomass burning, vehicle exhausts, and to some extend from vegetation and seawater. It is also a secondary product of the photo-oxidation of other volatile organic compounds in the atmosphere. Exposure to HCHO affects the central nervous system, can produce eye and skin irritation and irritation of the respiratory tract.

## How to use

- Open Copernicus Browser, navigate to your area of interest
- Select Sentinel-5P and a time range - typically a few weeks to a month
- Select NO<sub>2</sub>, click the </> icon to edit the code
- Select "use additional datasets (advanced)
- Add S5PL2 twice
- Rename the new data sources to S5PL2_1 and S5PL2_2, respectively (change the dash to an underscore)
- Paste in the script and wait for the data to load. It will take a while, since Sentinel-5P provides daily datasets
- Tune the min and max values

## Example image

This image shows the Middle East, with the Air Pollution RGB overlain on the panchromatic version of the Sentinel-2 Quarterly Cloudless Mosaic.

![Air Pollution RGB Middle East](fig/air_pollution_rgb_middle_east.jpg)

Direct link to image: https://link.dataspace.copernicus.eu/38fr 


