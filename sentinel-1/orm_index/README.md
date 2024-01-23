---
title: Oil Slicks and Red Tide Monitoring
parent: Sentinel-1
grand_parent: Sentinel
layout: script
permalink: /sentinel-1/orm_index/
nav_exclude: true
examples:
- zoom: '10'
  lat: '21.2049'
  lng: '38.19809'
  datasetId: S1_AWS_IW_VVVH
  fromTime: '2019-10-13T00:00:00.000Z'
  toTime: '2019-10-13T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9PaWwgc2xpY2tzIGFuZCBSZWQgdGlkZSBtb25pdG9yaW5nICAKLy9CeSBUSVpORUdBUiBTdGFydHVwIENvLCB3d3cudGl6bmVnYXIuY29tCi8vRGF0YXNldDpTZW50aW5lbC0xIEFXUy1JVy1WVlZICgp2YXIgT1JNID0gTWF0aC5sb2coMC4wMS8oMC4wMStWVioyKSk7IAoKaWYgKE9STSA8IFsgMF0gJiYgIFZWPCBbIDAuMDE4XSYmICBWSDwgWyAwLjAwMTI2XSkgeyAKICAgIAogICByZXR1cm4gY29sb3JCbGVuZCAgIAogICAgKE9STSwJICAgICAgICAgICAgCiAgICAgICAgIFstMS42LCAtMS40LCAtMS4yLCAtMSwgLS44LCAtLjYsIC0uNCwgLS4yLCAwXSwgCiAgICAgICAgWyAgICAgCiAgIAogICAgIFswLDAsLjEgXSwKICAgICBbMCwwLC40IF0sCiAgICAgWzAsMCwuOF0sCiAgICAgWzEsMCwuNV0sCiAgICAgWzEsMCwwXSwKICAgICBbMSwuNSwuMl0sCiAgICAgWzEsLjgsLjJdLAogICAgIFsxLDEsLjRdLAogICAgIFsuNSwuOCwuM10sCiAgICAgICAgICAgCgogICAgICBdKTsKfQplbHNlIHsKIHJldHVybiBbMi41KlZWLDIuNSpWViwyLjUqVlZdCn0K
---

## Author of the script
By TIZNEGAR Startup Co, 
[www.tiznegar.com](https://www.tiznegar.com/){:target="_blank"}

## General description
This script is capable of detecting oil slicks and [red tides (harmful algal blooms)](https://oceanservice.noaa.gov/facts/redtide.html) at sea. In this script we use the ORM (Oil slicks and Red tide monitoring) index, calculated as: 

**ORM = Math.log(0.01/(0.01+VV*2))**

The pixels where both ORM index values are lower than zero, and VV and VH values are low, are visualized with a continuous color visualization. Other areas are returned as grayscale VV visualization. 
Differences in color of ORM values below 0 correspond to changes in water roughness, making it posible to detect oil pollution (which is characterized by a very shiny surface), and red tides (characterized by rough surface changes). Aside from oil spills and red ocean tides, the script can also be used to monitor water quality of wetlands and rivers connected to the sea, by detecting pollution caused by industrial pollutants, municipal sewage, algae density and mud. Increased water pollution is indicated by bright yellow, orange and red colors in the script. 

Dense clouds and severe storms negatively affect the accuracy of this indicator.

## Description of representative images

**Example 1**

Oil slick caused by the collision of a Sabiti tanker 108 km from the Saudi port of Jeddah in the Red Sea. 

![A1](fig/fig1.jpg)
[Show in EO Browser.](https://sentinelshare.page.link/5vH6){:target="_blank"}

**Example 2**

Changes in quality of incoming waters due to algae density change in the Persian Gulf. 

![A2](fig/fig2.jpg)
[Show in EO Browser.](https://sentinelshare.page.link/d2c1){:target="_blank"}

**Example 3**

River waters enter into the Caspian Sea, bringing a higher concentration of algae, industrial pollutants and mud. 

![A3](fig/fig3.jpg)
[Show in EO Browser.](https://sentinelshare.page.link/vpVp){:target="_blank"}


