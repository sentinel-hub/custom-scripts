---
title: Observation outlier detector
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/obs_outlier_detector/
nav_exclude: true
examples:
- zoom: '13'
  lat: '45.958906975029585'
  lng: '15.492095947265625'
  datasetId: S2L1C
  fromTime: '2020-09-02'
  toTime: '2020-09-03'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://raw.githubusercontent.com/sentinel-hub/custom-scripts/master/sentinel-2/obs_outlier_detector/v2/script.js
---

## General description of the script

Once the cloudy observations have been filtered out, what is left is a mixture of valid observations and a set of undetected anomalous observations.
These are mostly caused by:
* cloud shadows
* snow
* haze
  
The goal of the observation outlier detection algorithm is to identify anomalous observations.
In this script the results of two masking algorithms is shown using two different colors:

* red: pixels detected as clouds by the cloud detector (s2cloudless).
* blue: pixels detected as outliers by the outlier detector, setting a detection threshold of 0.5.

More information about the approach in the [blog post](https://medium.com/sentinel-hub/area-monitoring-observation-outlier-detection-34f86b7cc63)

## Description of representative images

Outlier detection over Slovenia. Acquired on 2020-09-02.

![OUT of Slovenia](fig/krsko_02_09_2020.png)
