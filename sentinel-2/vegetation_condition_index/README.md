---
title: 'Vegetation Condition Index '
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/vegetation_condition_index/
nav_exclude: true
examples:
- zoom: '12'
  lat: '37.99495'
  lng: '-100.16888'
  datasetId: S2L1C
  fromTime: '2015-05-30T00:00:00.000Z'
  toTime: '2020-05-30T23:59:59.000Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/vegetation_condition_index/script.js
---

## General description of the script

The vegetation condition index [1] compares the NDVI at current (observed) time to historical values, i.e. to NDVI at similar dates in previous years: 

VCI = (NDVI_observed - NDVI_hist_min) / (NDVI_hist_max - NDVI_hist_min)

Please note that in case of Sentinel 2, only a few years of history are available.

The script takes the newest (latest) available scene as the observed one. Then, for each previous year the script finds all values within `toleranceDays` of the most recent date.

The actual scenes (dates) used can be returned as meta-data with an API requests by replacing the ```responses``` part of the request with:

```json
  "responses":  [{
    "identifier": "userdata",
    "format": { "type": "application/json" }
  }]
```

Example response:

```json
{
  "historical": [
    "2018-09-08T00:00:00.000Z",
    "2016-09-13T00:00:00.000Z",
    "2015-09-09T00:00:00.000Z"
  ],
  "observed": "2019-09-13T00:00:00.000Z"
}
```

## Description of representative images

Vegetation condition index near Dodge City, Kansas, USA. Acquired on 30.05.2020.

![Vegetation condition index near Dodge City, Kansas, USA](fig/fig1.jpg)

## References

[1] https://www.indexdatabase.de/db/i-single.php?id=249

