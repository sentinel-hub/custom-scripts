---
layout: default
title: Airbus SPOT
nav_order: 2
parent: Airbus
permalink: /airbus/spot/
---

# Airbus SPOT (Commercial)

<a href="https://www.intelligence-airbusds.com/en/8693-spot-67">SPOT 6/7</a> is a satellite constellation providing very high-resolution optical imagery and is owned by Airbus. It is composed of two twin satellites orbiting the Earth 180° apart. The satellites deliver 1.5 m optical imagery and offer a daily revisit capability to any point on the globe. SPOT 6/7 data with its high spatial resolution is suitable for a range of remote sensing applications such as vegetation monitoring, precise mapping, risk and disaster management. To learn more about SPOT, visit our <a href="https://docs.sentinel-hub.com/api/latest/data/airbus/spot/"> documentation page.</a>

The spectral bands of SPOT data are the following:

*B0 - Blue (454-519 nm,	resolution 6m)*

*B1 - Green (527-587 nm, resolution	6m)*

*B2 - Red (624-694 nm), resolution 6m*

*B3 - Near Infrared (756-880 nm), resolution 6m*

*PAN - Panchromatic (455-744 nm), resolution 1.5m*

SPOT's RGB bands are in 6 meter spatial resolution. To take advantage of the 1.5 m PAN band, the pansharpening process is required.

 - [True Color](/airbus_spot/true_color)
 - [Pansharpened True Color](/airbus_spot/true_color_pansharpened)
 - [False Color](/airbus_spot/false_color)
 - [NDVI](/airbus_spot/ndvi)
 - [NDWI](/airbus_spot/ndwi)
 - [Green City](/airbus_spot/green_city)
 - [Pansharpened Green City](/airbus_spot/green_city_pansharpened)

_Note: Because Pleiades and SPOT bands are very similar in wavelengths, the same custom scripts are used for both constellations._