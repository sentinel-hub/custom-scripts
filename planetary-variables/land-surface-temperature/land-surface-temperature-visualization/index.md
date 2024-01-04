---
title: Land Surface Temperature
grand_parent: Planetary Variables
parent: Land Surface Temperature
layout: script
nav_exclude: false
scripts:
    - [Visualization, script.js]
    - [EO Browser, eob.js]
    - [Raw Values, raw.js]
---

## Evaluate and visualize

As Land Surface Temperature is commercial data, brought into Sentinel Hub as Bring Your Own Data, direct EO Browser and Sentinel Playground links are not possible due to the personalized data credentials.

## General description

Land Surface Temperature (LST) is the thermodynamic temperature of Earth’s surface. LST is a key variable controlling energy, and water fluxes over the land surface and atmosphere interface. In view of increasing extreme temperature events and a growing population exposed to these events, LST is increasingly relevant to sustainably manage food and water systems and urban living conditions.

Planet's LST product provides near real-time measurements twice a day at 1:30 and 13:30 solar local time and at spatial resolutions of 100 m and 1000 m. It is unhindered by clouds and has a long and consistent data record of more than 20 years. Please check [here](https://docs.sentinel-hub.com/api/latest/data/planet/land-surface-temp/#available-bands) for a list of available bands.

{: .note}

The different times in the day can be selected in the evalscript by changing the variable `sensing_time`. `const sensing_time = "0130";` will return the LST at nighttime and `const sensing_time = "1330";` will return LST at midday.

## Description of representative images

Land Surface Temperature (100 m) on Oct 8, 2023 at 13:30 near Hanover, Germany.

![Land Surface Temperature example](fig/lst.jpg)

## References

-   [Product specifications](https://planet.widen.net/s/tltwk6hnps)
-   [Data sheet](https://planet.widen.net/s/ttvp2rvwzd)
-   [Sentinel Hub documentation about Land Surface Temperature](https://docs.sentinel-hub.com/api/latest/data/planet/land-surface-temp/)
