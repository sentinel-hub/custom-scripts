---
title: DEM colormap for Central Europe
parent: dem
layout: script
nav_exclude: true
examples:
- zoom: '7'
  lat: '47.2233'
  lng: '21.57715'
  datasetId: DEM
  fromTime: '2020-07-12T00:00:00.000Z'
  toTime: '2020-07-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/dem/dem-central-europe/script.js
---

This color ramp is defined to make interpreting topography on the Copernicus 30 DEM in Central Europe easy. Therefore, it runs between -200 and 3500 m above sea level. It uses classical colours typical for elevation maps: brown and white for high mountains and greens for lowland areas. Note that since the Copernicus 30 DEM does not include a seafloor model, the elevations below 0 m ASL are not used.

## Example location

The example is a site near Kosice, Slovakia, showing an elevation gradient between the Zemplín mountains and the Ondava river floodplain

```yaml
examples:
- zoom: '11'
  lat: '48.81432'
  lng: '21.52702'
  datasetId: DEM
  fromTime: '2020-07-12T00:00:00.000Z'
  toTime: '2020-07-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/dem/dem-central-europe/script.js
```


## General description of the script



## Color Table

<table>
  <tr>
    <th>Value</th>
    <th>Color Code</th>
    <th>Color Patch</th>
  </tr>
  <tr>
    <td>3500</td>
    <td>#f7eafd</td>
    <td style="background-color: #f7eafd;"></td>
  </tr>
  <tr>
    <td>3000</td>
    <td>#ebebeb</td>
    <td style="background-color: #ebebeb;"></td>
  </tr>
  <tr>
    <td>1000</td>
    <td>#a76b18</td>
    <td style="background-color: #a76b18;"></td>
  </tr>
  <tr>
    <td>500</td>
    <td>#dca620</td>
    <td style="background-color: #dca620;"></td>
  </tr>
  <tr>
    <td>200</td>
    <td>#A2AE32</td>
    <td style="background-color: #A2AE32;"></td>
  </tr>
  <tr>
    <td>100</td>
    <td>#18a722</td>
    <td style="background-color: #18a722;"></td>
  </tr>
  <tr>
    <td>50</td>
    <td>#018643</td>
    <td style="background-color: #018643;"></td>
  </tr>
  <tr>
    <td>30</td>
    <td>#015965</td>
    <td style="background-color: #015965;"></td>
  </tr>
  <tr>
    <td>10</td>
    <td>#01471c</td>
    <td style="background-color: #01471c;"></td>
  </tr>
  <tr>
    <td>0</td>
    <td>#bbbcbc</td>
    <td style="background-color: #bbbcbc;"></td>
  </tr>
  <tr>
    <td>-10</td>
    <td>#2754de</td>
    <td style="background-color: #2754de;"></td>
  </tr>
  <tr>
    <td>-20</td>
    <td>#0d027e</td>
    <td style="background-color: #0d027e;"></td>
  </tr>
  <tr>
    <td>-50</td>
    <td>#08014c</td>
    <td style="background-color: #08014c;"></td>
  </tr>
  <tr>
    <td>-200</td>
    <td>#4a4a4a</td>
    <td style="background-color: #4a4a4a;"></td>
  </tr>
</table>

## Author of the script

András Zlinszky, Sinergise