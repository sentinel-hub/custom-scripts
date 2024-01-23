---
title: TOA Ratio B09-B8A ColorMap Blue-Red & Natural Colours Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ratio_b09-b8a_colormap_blue_red_v0.1/
nav_exclude: true
examples:
- zoom: '10'
  lat: '-30.81145'
  lng: '124.35974'
  datasetId: S2L1C
  fromTime: '2019-11-06'
  toTime: '2019-11-07'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ratio_b09-b8a_colormap_blue_red_v0.1/script.js
---

## General description of the script

This script is inspired by Custom script repository. It represents the ratio of (B09 / B8A) with a RED-BLUE colour table on CLEAR land pixels. Other pixels like clouds, snow, water, shadow are visualized in "natural" colours.

The ratio of TOA reflectance band B09 at 945 nm and band B8A at 865 nm is a proxy for water vapour transmittance as band B09 is located in the water vapour absorption region and band B8A is located very close but just outside.

A blue colour indicates a dry atmosphere like in desert area or high mountainous regions whereas red colour indicates a very wet atmosphere like in Amazonian forest, summer in Japan, India during monsoon.

The two attached pictures illustrate those different conditions, the first one at continental scale showing the difference of atmosphere above Australia from the wet shores to the dry desert central areas and the other picture show the high contrast region of Himalaya that creates a sharp boundary between wet Northern India and very dry Tibetan plateau.

## Details of the script

The RED-BLUE color table is inspired by [NDMI](https://custom-scripts.sentinel-hub.com/sentinel-2/ndmi/){:target="_blank"} with different breakpoints.

[The Hollstein cloud detection](https://custom-scripts.sentinel-hub.com/sentinel-2/hollstein/){:target="_blank"} is used to identify CLEAR land pixels. Band B8A is used for (B09 / B8A) ratio computation as B8A spectral response is narrower than band B08 and therefore closest to band B09.
This visualization script works on L1C data.
The naturalColour combination B04, B03, B02 with a gain adapted to L1C TOA reflectance.

## Author of the script

Jérôme LOUIS

## Description of representative images

A blue colour indicates a dry atmosphere like in desert area or high mountainous regions whereas red colour indicates a very wet atmosphere like in Amazonian forest, summer in Japan, India during monsoon.

The two attached pictures illustrate those different conditions, the first one at continental scale showing the difference of atmosphere above Australia from the wet shores to the dry desert central areas and the other picture show the high contrast region of Himalaya that creates a sharp boundary between wet Northern India and very dry Tibetan plateau.

1) Ratio B09-B8A ColorMap Legend

![The script example 1](fig/Ratio-B09-B8A-ColorMap-Legend.jpg)

2) Australia
![The script example 2](fig/Australia-Sentinel-2_L1C_from_2019-11-06.jpg)

3) Himalaya
![The script example 3](fig/Himalaya-Sentinel-2_L1C_from_2019-11-06.jpg)

## Credits

[1] The RED-BLUE color table is inspired by [NDMI](https://custom-scripts.sentinel-hub.com/sentinel-2/ndmi/){:target="_blank"} with different breakpoints.

[2] [The Hollstein cloud detection](https://custom-scripts.sentinel-hub.com/sentinel-2/hollstein/){:target="_blank"} is used to identify CLEAR land pixels.