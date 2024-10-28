---
title: Soil Water Content Backward Average 
grand_parent: Planetary Variables
parent: Soil Water Content
layout: script
nav_exclude: false
scripts:
    - [Visualization, script.js]
    - [Raw Values, raw.js]
examples:
- zoom: '11'
  lat: '41.1921'
  lng: '-93.845'
  datasetId: '65f7e4fb-a27a-4fae-8d79-06a59d7e6ede'
  fromTime: '2022-05-01T00:00:00.000Z'
  toTime: '2022-05-26T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planetary-variables/soil-water-content/soil-water-content-backward-average/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---
## General description
The Soil Water Content Backward Average is a method to reduce data gaps and measurement noise in the Soil Water Content (SWC) data. Depending on the requirements, we can choose a lookback period, for example 20 days. The 20-day backward average of SWC for day n is the average of SWC over the 20 days preceding day n. We compute the backward average using all available measurements within this 20-day period, and therefore, we do have a valid value for every day, except in case of prolonged data unavailability, such as during long frost and snow periods. 

## Why it is useful
Our [Soil Water Content](https://custom-scripts.sentinel-hub.com/planetary-variables/soil-water-content/soil-water-content-visualization/) provides a great reflection of the immediate soil conditions. However, daily measurements often exhibit short-term fluctuations due to for example rainfall events and evaporation. The Soil Water Content Backward Average is suitable for applications where long-term soil moisture conditions are more relevant than daily fluctuations. The moving average operation reduces day-to-day variations and in the resulting time series, seasonal and longer-term changes can be easily detected. It can be used for monitoring drought risk, yield forecasting and analysis of climate change.


## Useful links
-   [SWC Technical specifications](https://developers.planet.com/docs/planetary-variables/soil-water-content-technical-specification/)
-   [SWC Data sheet](https://planet.widen.net/s/cv7bfjhhd5)
-   [Sentinel Hub documentation about Soil Water Content](https://docs.sentinel-hub.com/api/latest/data/planetary-variables/soil-water-content/)