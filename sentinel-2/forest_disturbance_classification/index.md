---
title: Forest Disturbance Classification
parent: Sentinel-2
grand_parent: Sentinel
layout: script
nav_exclude: true
scripts:
- - Visualization
  - script.js
- - Raw Values
  - raw.js
- - Raw Class Probabilities
  - raw_prob.js
examples:
- zoom: '16'
  lat: '52.67571'
  lng: '23.59823'
  datasetId: S2L2A
  fromTime: '2019-06-04T00:00:00.000Z'
  toTime: '2019-06-04T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/forest_disturbance_classification/script.js
---

## General description of the script

This script provides a LightGBM classification which classifies pixels into different forest disturbance classes.

The following classes can be discerned:

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Color</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color: #ab6820;"></td>
      <td>0 - Bark Beetle</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color: #b8b6b4;"></td>
      <td>1 - Clear Cut</td>
    </tr>
    <tr>
      <td>2</td>
      <td style="background-color: #215728;"></td>
      <td>2 - Healthy</td>
    </tr>
    <tr>
      <td>3</td>
      <td style="background-color: #b8b6b4;"></td>
      <td>3 - Salvage logged (low confidence)</td>
    </tr>
    <tr>
      <td>4</td>
      <td style="background-color: #7a2e01;"></td>
      <td>4 - Wildfire</td>
    </tr>
    <tr>
      <td>5</td>
      <td style="background-color: #4c77ed;"></td>
      <td>5 - Windthrow</td>
    </tr>
  </tbody>
</table>

The classification was trained on ground truth samples in Europe. Namely Germany, Sweden and Spain. For only taking in spectral features as input and not taking disturbance objects into account during the classification, the classification works reasonably well in European areas. One class separation which does not work well is between salvage logged areas and clear cut areas. Because of this in the visualization we have used the same color for both classes.

In general the classification works best in recently disturbed areas.

Also keep in mind that this script is run on all pixels, irrespective of if the pixel was at one point forest or not. The classification however was only trained and is only valid on forest pixels. So if the classification results are used, please make sure to apply a baseline forest mask.

The classification works best on large scale disturbances. 

{: .note}

Although the full model did perform reasonably well in accuracy testing (Macro F1 Score of 0.83), it has to be expected that there are major classification errors. This is especially true in areas outside Europe. Use at own caution and always validate results.

### Types of scripts

There are three scripts available. One for visualization, this can be used when streaming the data in application using a WMS or similar.
The visualization script has some optimizations for quicker visualization (e.g. early stopping once the majority class is detected). By default the visualization script also only shows disturbed areas and returns transparent pixels for everything it classifies as healthy forest.

For analytic use there are two other scripts available (Raw and Raw Probabilities). One just returns the classified majority class, the other returns the probabilities of each class from 0-100. 

## Description of representative images

| !['Clear cut'](fig/logging-b.png) | !['Clear cut classified'](fig/logging-a.png)  | 
| :----------------------------------: | :----------: |
| Clear cut area in Sweden   | [Explore in CDSE](https://link.dataspace.copernicus.eu/v5c2) |

| !['Bark Beetle'](fig/bark-beetle-b.png) | !['Bark Beetle classified'](fig/bark-beetle-a.png)  | 
| :----------------------------------: | :----------: |
| Bark Beetle area in Poland   | [Explore in CDSE](https://link.dataspace.copernicus.eu/1mb0) |

| !['Windthrow'](fig/wind-b.png) | !['Windthrow classified'](fig/wind-a.png)  | 
| :----------------------------------: | :----------: |
| Windthrow area in Italy (Storm Vaia)   | [Explore in CDSE](https://link.dataspace.copernicus.eu/gjpr) |

| !['Wildfire'](fig/wildfire-b.png) | !['Wildfire classified'](fig/wildfire-a.png)  | 
| :----------------------------------: | :----------: |
| Wildfire area in Spain   | [Explore in CDSE](https://link.dataspace.copernicus.eu/f3va) |

## Author of the script

Jonas Viehweger and Martin Puhm at [Joanneum Research](https://www.joanneum.at/digital/en/research-groups/fernerkundung-und-geoinformation/)

## Credits

Classification developed as part of the [EvoLand](https://www.evo-land.eu/) research project.