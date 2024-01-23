---
title: Tonemapped Natural Color Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/tonemapped_natural_color/
nav_exclude: true
examples:
- zoom: '11'
  lat: '41.4875'
  lng: '15.9494'
  datasetId: S2L1C
  fromTime: '2019-12-14'
  toTime: '2019-12-15'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/tonemapped_natural_color/script.js
  additionalQueryParams:
  - - preset
    - CUSTOM
  - - layers
    - B01,B02,B03
---

## General description of the script

This script is meant to produce beautiful natural color images. It uses global tonemapping to pack very bright values into the upper part of the spectrum.
Resulted images should never have clipped values on bright objects like clouds or snow, while keeping other surfaces like soil or vegetation properly exposed, achieving a photographic look, because most modern cameras do this type of processing.I took inspiration and my experience from real-time 3d graphics in modern video games, as most of them now use High dynamic range for lighting calculations.

## Details of the script

The script is perfect for complex scenes with vastly varying surfaces like volcanoes with dark volcanic soils, sunlit icecap slopes and smoke clouds. Even allowing creation of multi-seasonal time lapse with changing snow cover without adjusting parameters along the way. Cumulus clouds will look so tasty, you'll want to leave them on your image.

Several tonemapping functions are provided:

0 - Simple Reinhard. C/(1+C) formula applied to each of the channels. May cause slight desaturation.

1 - Luma based Reinhard, applied to luminance only. More accurate representation of colors.

2 - Unhcarted 2 Filmic tonemapping. It's curve has a kind of an S-shape, producing darker shadows. Trying to mimic analog film behavior.

3,4 - tonemapping in ACES color space (Academy Color Encoding System). 

Because different channels have vastly different luminance (blue color being darkest, and green - brightest), they also overflow at different rate, when with growing luminance one channel reached its maximum before others distortions in hue and luminance may occur. Applying tonemapping in ACES color space fixes it by preserving luminance and desaturating very bright values. It is probably an overkill, as changes are subtle, visible only on very bright and saturated colors.

Improved luma based saturation function is also provided.

**Parameters:**

* tonemapMethod (0-4) - Choose one of tonemapping methods described above
* debug (true/false) - Paint pixels blue if one of the channels becomes negative after atmospheric correction. Paint pixels red if all three channels are brighter than 1.0 after tonemapping.
* adjForSunColor (true/false) apply solar irradiance correction.
* Atmosphere (0 - ~0.032) - amount of atmosphere to correct. Lower it if you see red shadows.
* gain - change overall brightness
* saturation - apply saturation enhancement.
* White - brightest value to map as 1.0 during tonemapping.

Author took the atmosphere correction from *Color correction with Sentinel Hub* script and Solar irradiance indexes from *Natural color* script. He tried to make it applicable to different scenes without too much of manual adjustments, but it is not always the case. Deserts, for example,  may look too yellowish and ugly. He recommends in that case disabling atmospheric and solar corrections and switching to L2A. Unfortunately L2A for some reason have lower dynamic range, and sunlit snowy slopes and some clouds are clipped, and may show no detail anyway (along with some other artifacts).

## Author of the script

Gregory Ivanov

## Description of representative images

1) Shiveluch volcano eruption. Smoke plume lit with low sun.
![The script example 1](fig/2019-01-03_Sentinel-2A_L1C_Shiveluch_volcano_fallout_and_smoke_plume.png)

2) Uda river delta in April. Patches of green land are seen while Baikal lake is still covered with ice.
![The script example 2](fig/2019-04-23_Sentinel-2A_L1C_Uda_river_delta_lake_Baikal.png)

3) Florida keys and beautiful cumulus clouds.
![The script example 3](fig/2019-12-12_Sentinel-2A_L1C_Tasty_cumulus_clouds_over_Florida_Keys.png)

4) Sun beams and beautiful weather patterns near southern Ireland shore. Date is very close to winter solstice, making sun beams particularly long.
![The script example 4](fig/2019-12-20_Sentinel-2A_L1C_Sun_beams_near_southern_Ireland.png)

5) Eastern Bosphorus strait Vladivostok year-around time-lapse.
![The script example 5](fig/Sentinel-2_L1C_Vladivostok_year-around.gif)

## References

[1] [John Hable, Uncharted 2: HDR Lighting, GDC talk](https://www.gdcvault.com/play/1012351/Uncharted-2-HDR){:target="_blank"} 

[2] [John Hableís followup blog post](https://filmicworlds.com/blog/filmic-tonemapping-operators/){:target="_blank"} 

[3] [Tom Madams, Why Reinhard desaturates my blacks](https://imdoingitwrong.wordpress.com/2010/08/19/why-reinhard-desaturates-my-blacks-3/){:target="_blank"} 

[4] [Erik  Reinhard, Photographic tone reproduction for digital images](https://www.cmap.polytechnique.fr/~peyre/cours/x2005signal/hdr_photographic.pdf){:target="_blank"} 

[5] [ACES color space tonemapping Unreal Engine user manual](https://docs.unrealengine.com/en-US/Engine/Rendering/PostProcessEffects/ColorGrading/index.html){:target="_blank"} 

## Credits

[1] [Poor Man's Atmospheric Adjustment by Miha Kadunc](https://custom-scripts.sentinel-hub.com/sentinel-2/poor_mans_atcor/){:target="_blank"} 

[2] [Natural color script, Sovdat et al.](https://custom-scripts.sentinel-hub.com/sentinel-2/natural_color/){:target="_blank"}