---
title: Home
layout: home
nav_order: 1
---

# Collection of custom scripts

## Custom Scripts Repository

This repository contains a collection of custom scripts for [Sentinel Hub](https://www.sentinel-hub.com/), which can be fed to the services via the URL.

Scripts are organised by sensors supported on Sentinel Hub:
  - [Sentinel](#sentinel-1)
    - [Sentinel-1](#sentinel-1)
    - [Sentinel-2](#sentinel-2)
    - [Sentinel-3](#sentinel-3)
    - [Sentinel-5P](#sentinel-5p)
  - [Landsat](#landsat-1-5-mss)
    - [Landsat 1-5 MSS](#landsat-1-5-mss)
    - [Landsat 4-5 TM](#landsat-4-5-tm)
    - [Landsat 5 and 7](#landsat-57)
    - [Landsat 7 ETM+](#landsat-7-etm)
    - [Landsat-8](#landsat-8)
  - [Harmonized Landsat Sentinel](#harmonized-landsat-sentinel)
  - [Sentinel-2 L2A 120m Mosaic](#sentinel2-120m-mosaic)
  - [MODIS](#modis)
  - [DEM](#dem)
  - [Planet Labs](#planet_scope)
    - [PlanetScope](#planet_scope)
    - [SkySat](#sky_sat)
  - [Airbus](#airbus_pleiades)
    - [Airbus Pleiades](#airbus_pleiades)
    - [Airbus SPOT](#airbus_spot)
  - [Data fusion](#data-fusion)
  - [Copernicus services](#copernicus_services)
    - [CORINE Land Cover](#CLC)
    - [Global Land Cover](#GLC)
    - [Water Bodies](#water_bodies)
    - [High Resolution Vegetation Phenology and Productivity](#HRVPP)
    - [High Resolution Snow and Ice](#HRSI)
  - [Other collections](#other_collections)
    - [CNES Land cover map](#cnes)
    - [Global Human Settlements Layer](#ghsl)
    - [Global Surface Water](#surface_water)
    - [WorldCover](#worldcover)
    - [10m Annual Land Use Land Cover (9-class)](#impact_observatory)

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