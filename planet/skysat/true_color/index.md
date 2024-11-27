---
title: True color product, SkySat
parent: SkySat
grand_parent: Planet
layout: script
nav_exclude: true
examples:
- zoom: '16'
  lat: '-32.10671'
  lng: '116.00704'
  datasetId: 'fc704520-fc81-439f-9016-5e162c32e736'
  fromTime: '2022-10-19T00:00:00.000Z'
  toTime: '2022-10-19T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planet/skysat/true_color/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---

The example data is using Planet Sandox data. This data is restricted to Sentinel Hub users with active paid plans. If you are already a Planet Customer, see [here](https://community.planet.com/sentinel-hub-81/access-new-tools-for-analyzing-your-planet-data-on-sentinel-hub-732) on how to get access.


## Evaluate and visualize

As SkySat is commercial data, brought into Sentinel Hub as Bring Your Own Data, direct EO Browser links are not possible due to the personalized data credentials.   

## General description

The true color product combines Skysat band values `red`, `blue`, and `green` to create a true color image.

## Description of representative images

True color visualisation over Rome, Italy, acquired on 2018/08/28.

![Small true color image, on 8.10.2017.](fig/skysat_true_color.jpeg)


## References
 - Wikipedia, [True color](https://en.wikipedia.org/wiki/False_color#True_color). Accessed October 10th 2017.
