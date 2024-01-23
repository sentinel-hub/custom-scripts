---
title: Urban Land Infrared Color Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/urban_land_infrared/
nav_exclude: true
examples:
- zoom: '11'
  lat: '-34.11436278751124'
  lng: '18.665428161621094'
  datasetId: S2L2A
  fromTime: '2019-04-06T00:00:00.000Z'
  toTime: '2019-04-06T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: LyoKQXV0aG9yIG9mIHRoZSBzY3JpcHQ6IExlbyBUb2xhcmkKKi8KCnJldHVybiBbQjA4KjAuMyArIEIwNCoyLjUgKyAoQjA0KjEuMCtCMTIqMC4zKSwKICAgICAgICAgIEIwOCowLjMgKyBCMDMqMi41ICsgKEIwMyoxLjArQjEyKjAuMyksCiAgICAgICAgICBCMDgqMC4zICsgQjAyKjIuNSArIChCMDIqMS4wK0IxMiowLjMpXTsK
  additionalQueryParams:
  - - maxcc
    - '100'
---

## General description of the script

This script works on urban areas and lands giving a similar view to the near-infrared but looking for some true color.

## Author of the script

Leo Tolari

## Description of representative images

This script wants to be a view with true colors exploiting near infrared and long infrared.

![Urban Land Infrared Color script example](fig/2019-04-06_S2B_urban_land_infrared.jpg)

![Urban Land Infrared Color script example](fig/2019-03-07_urban_land_infrared.jpg)

![Urban Land Infrared Color script example](fig/2019-04-06_urban_land_infrared.jpg)

![Urban Land Infrared Color script example](fig/2019-04-16_urban_land_infrared.jpg)
