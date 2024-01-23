---
title: Vegetation and Land Monitoring with Cloud Mask
parent: Sentinel-3
grand_parent: Sentinel
layout: script
permalink: /sentinel-3/vegetation_monitoring_masks/
nav_exclude: true
examples:
- zoom: '8'
  lat: '37.45306'
  lng: '48.8562'
  datasetId: S3OLCI
  fromTime: '2020-06-18T00:00:00.000Z'
  toTime: '2020-06-18T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly8gU2VudGluZWwtMyBPTENJIC0gVmVnZXRhdGlvbiBtb25pdG9yaW5nCi8vYnkgVElaTkVHQVIgc3RhcnR1cCBjbwovL3d3dy50aXpuZWdhci5jb20KCi8vVmVnZXRhdGlvbiBtb25pdG9yaW5nIGluZGV4IGZvciBPTENJIFNlbnRpbmVsIDMgT0xDSShWTUkzKQoKdmFyIFZNSTMgPSAoQjE3IC0gQjA4KSAvIChCMTcgKyBCMDgpOwoKLy9DbG91ZCBtYXNrCgp2YXIgTkdEUiA9IGluZGV4KEIwNCwgQjA2KTsKdmFyIENNICA9IChCMDQgLSAwLjIpIC8gKDAuNSAtIDAuMik7CmlmIChDTSA+IDAuOCkgeyAKICAgIHJldHVybiBbMTAgKiBCMDMsIDEwICogQjAyLCAxMCAqIEIwMSBdOwp9CgppZiAoQ00gPiAwICYmIE5HRFI+LjE1KSB7IAogICAgcmV0dXJuIFsxMCAqIEIwMyAgLCAxMCAqIEIwMiwgMTAgKiBCMDFdOwp9CgoKLy9Zb3UgY2FuIHNlZSBvbmx5IHRoZSBjaGFuZ2VzIGluIHRoZSB2ZWdldGF0aW9uIHlvdSB3YW50IGJ5IGNoYW5naW5nIHRoZSBpbnRlcnZhbCBiZWxvdwoKCmlmIChWTUkzID4gWyAtMSBdICYmIFZNSTM8IFsgMSBdKSB7IAogICAgcmV0dXJuIGNvbG9yQmxlbmQgICAKICAgIChWTUkzLAkgICAgICAgICAgICAKICAgICAgICBbIC0uOCwgLS4xLCAtLjAyLCAwLCAwLjAxLCAuMDYsIC4xLCAuMiwgLjMsIC40LCAuNSwgLjYsIC43LCAuOCwgLjldLCAKICAgICAgICBbICAgICAKICAgICAgICAgICAgWzAsIC4yLCAuNV0sCiAgICAgICAgICAgIFswLCAuNiwgLjhdLAogICAgICAgICAgICBbLjgsIC44LCAuOF0sCiAgICAgICAgICAgIFsuOSwgLjksIC45XSwKICAgICAgICAgICAgWzEsIDEsIDFdLAogICAgICAgICAgICBbLjUsLjMsLjJdLAogICAgICAgICAgICBbLjYzLC4zMiwuMThdLAogICAgICAgICAgICBbMSwuNDUsLjA1XSwKICAgICAgICAgICAgWy45LCAxLCAwXSwKICAgICAgICAgICAgWzAsIC44LDBdLAogICAgICAgICAgICBbMCwgLjUsIDBdLAogICAgICAgICAgICBbMCwgLjQsIDBdLAogICAgICAgICAgICBbMCwgLjMsIDBdLAogICAgICAgICAgICBbMCwgLjIsIDBdLAogICAgICAgICAgICBbMCwgLjEsIDBdLAoKICAgICAgXSk7Cn0KZWxzZSB7CiByZXR1cm4gWzIuNSpCMDgsMi41KkIwNiwyLjUqQjA0XQp9
---

## Author of the script
By TIZNEGAR Startup Co, 
[www.tiznegar.com](https://www.tiznegar.com/){:target="_blank"}

## General description
Vegetation monitoring index for Sentinel 3 OLCI (VMI3) has the same functionality as NDVI, using NIR* and RED wavelengths in a normalized difference index. The script displays the vegetation index with a continuous colour scale and uses cloud mask to display clouds and snow in white. It also provides a preprepared conditional statement for land classification, by only changing the visualized range. 

The index is calculated as:

**VMI3 = (B17 - B08) / (B17 + B08)**

The range of the index is between -1 and 1: 

**-1 ≤ VMI3 ≤ 1**

The index shows a very good separation of vegetation, that can be used to monitor changes in periodic studies. Dense, high growing or good quality vegetation is displayed in bold green colors, while thin, low growing or low quality vegetation is displayed in pale green colors. Gray areas indicate high salinity or a desert, white areas are usually clouds or snow, and blue areas indicate water.

*_As the Sentinel-2 NIR equivalent with a central wavelength 832.8 nm is not available for Senitnel-3 OLCI, band 17, with a central wavelength of 865 nm, was used for the NIR part of the equation. Band 17 belongs into narrow near infrared range, similar to B8A in Sentinel-2._

## Description of representative images

![A1](fig/fig1.jpg)
[Show VMI3 index of Iran and show Gilan province and Urmia lake](https://sentinelshare.page.link/xRUA){:target="_blank"}

**The range of VMI3 index display can be changed by the user. For example:**

- `if (VMI3 > [ 0.4 ] && VMI3< [ 1 ])`

![A2](fig/fig2.jpg)
In this case, only the areas with the VMI3 index in range of 0.4 to 1 are visualized in a continuous color scale, highlighting Hyrcanian forests in Gilan and agricultural areas around Lake Urmia with green colors. Other areas are returned in true color, with cloud mask in white. [Show in EO Browser.](https://sentinelshare.page.link/9crw){:target="_blank"}

- `if (VMI3 > [ -1 ] && VMI3< [ 0 ])`

![A3](fig/fig3.jpg)
In this image, only areas with the VMI3 index range of -1 to 0 are visualized in a continuous color scale, displaying water areas in blue colors. The water levels of Lake Urmia and Sefidrud Dam in Gilan province are well visible. Other areas are returned in true color, with cloud mask in white. [Show in EO Browser.](https://sentinelshare.page.link/Hbcn){:target="_blank"}


