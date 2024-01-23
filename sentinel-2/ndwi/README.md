---
title: NDWI Normalized Difference Water Index
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndwi/
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - EO Browser
  - eob.js
- - Raw Values
  - raw.js
examples:
- zoom: '11'
  lat: '44.94637'
  lng: '12.10183'
  datasetId: S2L2A
  fromTime: '2020-08-01T00:00:00.000Z'
  toTime: '2020-08-01T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKLy9UaGlzIHNjcmlwdCB3YXMgY29udmVydGVkIGZyb20gdjEgdG8gdjMgdXNpbmcgdGhlIGNvbnZlcnRlciBBUEkKCi8vbmR3aQp2YXIgY29sb3JSYW1wMSA9IFsKICAJWzAsIDB4RkZGRkZGXSwKICAJWzEsIDB4MDA4MDAwXQogIF07CnZhciBjb2xvclJhbXAyID0gWwogIAlbMCwgMHhGRkZGRkZdLAogIAlbMSwgMHgwMDAwQ0NdCiAgXTsKCmxldCB2aXoxID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIoY29sb3JSYW1wMSk7CmxldCB2aXoyID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIoY29sb3JSYW1wMik7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICB2YXIgdmFsID0gaW5kZXgoc2FtcGxlcy5CMDMsIHNhbXBsZXMuQjA4KTsKCiAgaWYgKHZhbCA8IC0wKSB7CiAgICByZXR1cm4gdml6MS5wcm9jZXNzKC12YWwpOwogIH0gZWxzZSB7CiAgICByZXR1cm4gdml6Mi5wcm9jZXNzKE1hdGguc3FydChNYXRoLnNxcnQodmFsKSkpOwogIH0KfQoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICJCMDMiLAogICAgICAgICJCMDgiCiAgICAgIF0KICAgIH1dLAogICAgb3V0cHV0OiB7CiAgICAgIGJhbmRzOiAzCiAgICB9CiAgfQp9
---
## General description of the script

The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum,  NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies. The index was proposed by McFeeters, 1996.

- Sentinel-2 NDWI = **(B03 - B08) / (B03 + B08)**
- [Landsat 1-5 MSS NDWI](https://custom-scripts.sentinel-hub.com/landsat-1-5-mss/ndwi/) = **(B01 - B04) / (B01 + B04)**
- [Landsat 4-5 TM NDWI](https://custom-scripts.sentinel-hub.com/landsat-4-5-tm/ndwi/) = **(B03 - B05) / (B03 + B05)**
- [Landsat 7 ETM+ NDWI](https://custom-scripts.sentinel-hub.com/landsat-7-etm/ndwi/) = **(B02 - B04) / (B02 + B04)**
- [Landsat 8 NDWI](https://custom-scripts.sentinel-hub.com/landsat-8/ndwi/) = **(B03 - B05) / (B03 + B05)**
- [MODIS NDWI](https://custom-scripts.sentinel-hub.com/modis/ndwi/) = **(B04 - B02) / (B04 + B02)**

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

_Note: NDWI index is often used synonymously with the NDMI index, often using NIR-SWIR combination as one of the two options. NDMI seems to be consistently described using NIR-SWIR combination. As the indices with these two combinations work very differently, with NIR-SWIR highlighting differences in water content of leaves, and GREEN-NIR highlighting differences in water content of water bodies, we have decided to separate the indices on our repository as NDMI using NIR-SWIR, and NDWI using GREEN-NIR._

## Description of representative images

NDWI of Italy. Acquired on 2020-08-01.

![NDWI of Italy](fig/fig1.jpg)

NDWI of Canadian lakes. Acquired on 2020-08-05.

![NDWI of Canada](fig/fig2.jpg)

## References
Source: https://en.wikipedia.org/wiki/Normalized_difference_water_index
