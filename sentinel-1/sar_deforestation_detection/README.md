---
title: SAR for Deforestation Detection Script
parent: Sentinel-1
grand_parent: Sentinel
layout: script
permalink: /sentinel-1/sar_deforestation_detection/
nav_exclude: true
examples:
- zoom: '10'
  lat: '-3.1254'
  lng: '113.6286'
  datasetId: S1_AWS_IW_VVVH
  fromTime: '2019-11-08T00:00:00.000Z'
  toTime: '2019-11-08T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKLy8KLy8gU0FSIGZvciBkZWZvcmVzdGF0aW9uIGRldGVjdGlvbgovLyAtLS0tLS0tLS0tLS0KLy8gMjAxOSAtIEFudG9uaW8gQ2FybG9uIFBhcmVkZXMKLy8gTGljZW5zZTogQ0MgQlkgNC4wCi8vIGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvCi8vCmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogW3sKICAgICAgYmFuZHM6IFsKICAgICAgICAgICJWViIsCiAgICAgICAgICAiVkgiCiAgICAgIF0KICAgIH1dLAogICAgb3V0cHV0OiB7IGJhbmRzOiAzIH0KICB9Cn0KCgpjb25zdCBHQUlOID0gMi41Owpjb25zdCBXQVRFUl9MSU1JVCA9IDAuMTsKY29uc3QgRk9SRVNUX0xJTUlUID0gMC4yOwpjb25zdCBJTlZFUlNFX0ZBQ1RPUiA9IDI1OwoKY29uc3QgR1JFRU5fR1JBRElFTlQgPSBbCiAgICBbMS4wMDAsIDB4ODBGMzAwXSwKICAgIFswLjUwMCwgMHg0MDY2MDBdLAogICAgWzAuMDAwLCAweDAwMzMwMF0KXQoKY29uc3QgUkVEX0dSQURJRU5UID0gWwogICAgWzEuMDAwLCAweEZGRkZGRl0sCiAgICBbMC41MjUsIDB4RkY4NjAwXSwKICAgIFswLjMwMCwgMHhGRjZFMDBdLAogICAgWzAuMjUwLCAweEFFMDAwMF0sCiAgICBbMC4wMDAsIDB4MDAwMDAwXQpdOwoKY29uc3QgR1JFRU5fVklaID0gbmV3IENvbG9yR3JhZGllbnRWaXN1YWxpemVyKEdSRUVOX0dSQURJRU5ULCAwLCAxKTsKY29uc3QgUkVEX1ZJWiA9IG5ldyBDb2xvckdyYWRpZW50VmlzdWFsaXplcihSRURfR1JBRElFTlQsIDAsIDEpOwoKY29uc3QgZXZhbHVhdGVQaXhlbCA9IGZ1bmN0aW9uIChzYW1wbGVzLCBzY2VuZXMpIHsKCWxldCB2diA9IHNhbXBsZXMuVlY7CglsZXQgdmggPSBzYW1wbGVzLlZIOwoKICAgIGxldCBhcmVhID0gdnYgKiB2aDsKCWxldCB2X2xlbiA9IE1hdGguc3FydCh2diAqIHZ2ICsgdmggKiB2aCk7CiAgCWxldCB2X2FuZ2xlX3dlaWdodGVkID0gMDsKCWlmICh2diA+IDApIHsKCQl2X2FuZ2xlX3dlaWdodGVkID0gTWF0aC5hdGFuKHZoL3Z2KSAvIChNYXRoLlBJIC8gMik7Cgl9CglsZXQgdl9sZW5faW52ZXJzZSA9IDA7CiAgCWlmICh2X2xlbiA+IDApIHsKCQl2X2xlbl9pbnZlcnNlID0gMSAvIChJTlZFUlNFX0ZBQ1RPUiAqIHZfbGVuKTsKICAgIH0KCiAgCWlmICh2X2xlbiA8IFdBVEVSX0xJTUlUKSB7CiAgICAJcmV0dXJuIFswXTsKICAgIH0gZWxzZSBpZiAodl9sZW4gPiBGT1JFU1RfTElNSVQpIHsKICAgICAgCWxldCBpbmRleCA9IEdBSU4gKiB2X2xlbiAtIHZfYW5nbGVfd2VpZ2h0ZWQ7CiAgICAgICAgcmV0dXJuIEdSRUVOX1ZJWi5wcm9jZXNzKGluZGV4KTsKICAgIH0gZWxzZSB7CiAgICAgICAgbGV0IGluZGV4ID0gR0FJTiAqIHZfbGVuX2ludmVyc2UgKyB2X2FuZ2xlX3dlaWdodGVkOwogICAgICAgIHJldHVybiBSRURfVklaLnByb2Nlc3MoaW5kZXgpOwogICAgfQp9Ow==
---

## General description of the script

The script uses the VV and VH bands of the Sentinel-1 and transforms the cartesian space of VV and VH to polar coordinates computing the length and angle of the resulting vector and also the area of the square defined by VV and VH. Then it uses the length of the vector as a classifier to discriminate between water, forest and soil.

The script paints in black the water and bare soil areas, and uses both the length and the angle to draw a scale for the forest (green) and soil (red), drawing a stronger green where more forest has been classified and a stronger red or black where more soil has been found.

## Details of the script

The script only uses the VV and VH bands of the Sentinel 1, so it will identify bare soil as water (black) and is intended to be used in forest area, returning strange results when used in populated areas.

## Author of the script

Antonio Carlón Paredes

## Description of representative images

The images show several zones of Borneo, in areas affected by palm oil deforestation.

![The script example 1](fig/image1.png)

![The script example 2](fig/image2.png)

![The script example 3](fig/image3.png)
