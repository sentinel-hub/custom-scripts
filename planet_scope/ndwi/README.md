---
title: NDWI Normalized Difference Water Index, PlanetScope
parent: PlanetScope
grand_parent: Planet
layout: script
permalink: /planet_scope/ndwi/
nav_exclude: true
scripts:
scripts:
    - [Visualization, script.js]
    - [EO Browser, eob.js]
---


## Evaluate and visualize

As PlanetScope is commercial data, brought into Sentinel Hub as Bring Your Own Data, direct EO Browser links are not possible due to the personalized data credentials. 

## General description of the script

The NDWI is useful for water body mapping, as water bodies strongly absorb light in visible to infrared electromagnetic spectrum. NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies.

$$NDWI = \frac{green-nir}{green+nir}.$$  

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

## Description of representative images

NDWI (for water content in leaves) of Rome. 

![NDWI of Rome](fig/fig1.jpg)

## References
Source: https://en.wikipedia.org/wiki/Normalized_difference_water_index
