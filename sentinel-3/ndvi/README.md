---
title: 'Normalized Difference Vegetation Index, NDVI  '
parent: Sentinel-3
grand_parent: Sentinel
layout: script
permalink: /sentinel-3/ndvi/
nav_exclude: true
examples:
- zoom: '7'
  lat: '46.78423'
  lng: '0.21095'
  datasetId: S3OLCI
  fromTime: '2022-07-24T00:00:00.000Z'
  toTime: '2022-07-24T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMKCi8vIE5vcm1hbGl6ZWQgRGlmZmVyZW5jZSBWZWdldGF0aW9uIEluZGV4LCBORFZJCi8vIE5lZ2F0aXZlIHZhbHVlcyBvZiBORFZJICh2YWx1ZXMgYXBwcm9hY2hpbmcgLTEpIGNvcnJlc3BvbmQgdG8gd2F0ZXIuIAovLyBWYWx1ZXMgY2xvc2UgdG8gemVybyAoLTAuMSB0byAwLjEpIGdlbmVyYWxseSBjb3JyZXNwb25kIHRvIGJhcnJlbiBhcmVhcyBvZiByb2NrLCBzYW5kLCBvciBzbm93LiAKLy8gTG93LCBwb3NpdGl2ZSB2YWx1ZXMgcmVwcmVzZW50IHNocnViIGFuZCBncmFzc2xhbmQgKGFwcHJveGltYXRlbHkgMC4yIHRvIDAuNCkuCi8vIEhpZ2ggdmFsdWVzIGluZGljYXRlIHRlbXBlcmF0ZSBhbmQgdHJvcGljYWwgcmFpbmZvcmVzdHMgKHZhbHVlcyBhcHByb2FjaGluZyAxKS4KLy8gVGhyZXNob2xkcyBtYXkgYmUgYWRhcHRlZCBkZXBlbmRpbmcgb24gbG9jYWwgY29uZGl0aW9ucy4KZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbIkIxNyIsICJCMDgiXSwKICAgIG91dHB1dDogeyBiYW5kczogMyB9CiAgfTsKfQoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGUpIHsKCiAgLy8gQ2FsY3VsYXRlIE5EQkkKICB2YXIgTkRWSSA9IGluZGV4KHNhbXBsZS5CMTcsIHNhbXBsZS5CMDgpOwoKICAvLyBDb2xvciBkZXBlbmRpbmcgb24gY2xhc3MKICBpZiAoTkRWSTwtMS4xKSByZXR1cm4gWzAsMCwwXTsKICBlbHNlIGlmIChORFZJPC0wLjIpIHJldHVybiBbMC43NSwwLjc1LDAuNzVdOwogIGVsc2UgaWYgKE5EVkk8LTAuMSkgcmV0dXJuIFswLjg2LDAuODYsMC44Nl07CiAgZWxzZSBpZiAoTkRWSTwwKSByZXR1cm4gWzEsMSwwLjg4XTsKICBlbHNlIGlmIChORFZJPDAuMDI1KSByZXR1cm4gWzEsMC45OCwwLjhdOwogIGVsc2UgaWYgKE5EVkk8MC4wNSkgcmV0dXJuIFswLjkzLDAuOTEsMC43MV07CiAgZWxzZSBpZiAoTkRWSTwwLjA3NSkgcmV0dXJuIFswLjg3LDAuODUsMC42MV07CiAgZWxzZSBpZiAoTkRWSTwwLjEpIHJldHVybiBbMC44LDAuNzgsMC41MV07CiAgZWxzZSBpZiAoTkRWSTwwLjEyNSkgcmV0dXJuIFswLjc0LDAuNzIsMC40Ml07CiAgZWxzZSBpZiAoTkRWSTwwLjE1KSByZXR1cm4gWzAuNjksMC43NiwwLjM4XTsKICBlbHNlIGlmIChORFZJPDAuMTc1KSByZXR1cm4gWzAuNjQsMC44LDAuMzVdOwogIGVsc2UgaWYgKE5EVkk8MC4yKSByZXR1cm4gWzAuNTcsMC43NSwwLjMyXTsKICBlbHNlIGlmIChORFZJPDAuMjUpIHJldHVybiBbMC41LDAuNywwLjI4XTsKICBlbHNlIGlmIChORFZJPDAuMykgcmV0dXJuIFswLjQ0LDAuNjQsMC4yNV07CiAgZWxzZSBpZiAoTkRWSTwwLjM1KSByZXR1cm4gWzAuMzgsMC41OSwwLjIxXTsKICBlbHNlIGlmIChORFZJPDAuNCkgcmV0dXJuIFswLjMxLDAuNTQsMC4xOF07CiAgZWxzZSBpZiAoTkRWSTwwLjQ1KSByZXR1cm4gWzAuMjUsMC40OSwwLjE0XTsKICBlbHNlIGlmIChORFZJPDAuNSkgcmV0dXJuIFswLjE5LDAuNDMsMC4xMV07CiAgZWxzZSBpZiAoTkRWSTwwLjU1KSByZXR1cm4gWzAuMTMsMC4zOCwwLjA3XTsKICBlbHNlIGlmIChORFZJPDAuNikgcmV0dXJuIFswLjA2LDAuMzMsMC4wNF07CiAgZWxzZSByZXR1cm4gWzAsMC4yNywwXTsKfQ==
  additionalQueryParams:
  - - handlePositions
    - 0,1
  - - gradient
    - 0xffffff,0x005824
---

## General description of the script  

The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.

The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation; see [1] for details.

The normalized difference vegetation index, abbreviated NDVI, is calculated using near infrared and red wavelengths. 

**NDVI = (NIR - RED) / (NIR + RED)**

For Sentinel-3 OLCI, the NDVI is calculated using NIR band 17 and Red band 8: 

**NDVI = (B17 - B08) / (B17 + B08)**


## Description of representative images  

NDVI of France, acquired on 24 July 2022.  
![NDVI](fig/figure1.png)   
 
## References
 [1] Wikipedia, [Normalized Difference Vegetation Index
](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index). Accessed on October 4th 2017.

## Contributors:  
William Ray
