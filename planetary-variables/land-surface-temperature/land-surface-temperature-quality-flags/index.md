---
title: Land Surface Temperature Quality Flags
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
  fromTime: '2022-04-26T00:00:00.000Z'
  toTime: '2022-04-26T23:59:59.999Z'
  platform:
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/planetary-variables/land-surface-temperature/land-surface-temperature-quality-flags/script.js
  additionalQueryParams: 
  - - themeId
    - PLANET_SANDBOX
---
## General description
Land Surface Temperature (LST) products include [quality flag assets](https://developers.planet.com/docs/planetary-variables/land-surface-temperature-technical-specification/#quality-flags) that provide quality metadata for each pixel using a bitwise flag system. These flags help identify the reliability of the LST values for each pixel. Here we show how these quality flags can be easily displayed using custom scripts. For a complete list of all possible quality flags and their corresponding bits, please refer to [these tables](https://developers.planet.com/docs/planetary-variables/land-surface-temperature-technical-specification/#quality-flags).

## Notes on usage
Users can customize the script by adding the bit numbers corresponding to the quality flag(s) of interest to the `bits_to_check` list within the script. By default, the provided scripts are set to check all critical flags (indicating unreliable data, with corresponding LST pixels set to the no data value), but this can be updated to include or exclude specific flags as needed.

Planet’s LST product provides near real-time measurements twice a day at 1:30 and 13:30 solar local time. The `sensing_time` variable in the scripts can be used to select the sensing time of interest

The provided Visualization script highlights pixels for which specific quality flags of interest are set. This allows users to visually inspect areas of concern or interest.

The Raw Values script retrieves a binary raster where:

- `1` indicates pixels for which the quality flag(s) of interest are set  
- `0` indicates pixels where the quality flag(s) of interest are not set

## Description of representative images
The 'Open water' (bit 15\) quality flag in Flevoland, The Netherlands, on 2022-12-31.

![The water quality flag](fig/qf_lst_100m_water_netherlands_2022-12-31.png)

## Useful links
-   [Product specifications](https://planet.widen.net/s/tltwk6hnps)
-   [Data sheet](https://planet.widen.net/s/ttvp2rvwzd)
-   [Sentinel Hub documentation about Land Surface Temperature](https://docs.sentinel-hub.com/api/latest/data/planetary-variables/land-surface-temp/)