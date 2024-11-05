---
title: Land Surface Temperature Backward Average
grand_parent: Planetary Variables
parent: Land Surface Temperature
layout: script
nav_exclude: false
scripts:
    - [Visualization, script.js]
    - [Raw Values, raw.js]
examples:
- zoom: '11'
  lat: '44.8398'
  lng: '-0.5294'
  datasetId: '8d977093-cf9e-4351-8159-90f2522c29c1'
  fromTime: '2022-12-01T00:00:00.000Z'
  toTime: '2022-12-30T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planetary-variables/land-surface-temperature/land-surface-temperature-backward-average/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---
## General description
The Land Surface Temperature Backward Average is a method to reduce data gaps and measurement noise in the Land Surface Temperature (LST) data. Depending on the requirements, we can choose a lookback period, for example 20 days. The 20-day backward average of LST for day n is the average of LST over the 20 days preceding day n. We compute the backward average using all available measurements within this 20-day period, and therefore, we do have a valid value for every day, except in case of prolonged data unavailability, such as during long frost and snow periods.

## Why it is useful
The Land Surface Temperature Backward Average is suitable for applications where long-term temperatures are more relevant than daily fluctuations. The moving average operation reduces day-to-day variations and in the resulting time series, seasonal and longer-term changes can be easily detected. It can be used for monitoring drought risk, yield forecasting and analysis of climate change.

## Useful links
-   [Product specifications](https://planet.widen.net/s/tltwk6hnps)
-   [Data sheet](https://planet.widen.net/s/ttvp2rvwzd)
-   [Sentinel Hub documentation about Land Surface Temperature](https://docs.sentinel-hub.com/api/latest/data/planetary-variables/land-surface-temp/)
