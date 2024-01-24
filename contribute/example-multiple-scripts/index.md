---
title: Example product
parent: Contribute
layout: script
nav_exclude: true
scripts:
  - [Visualization, script.js]
  - [EO Browser, eob.js]
  - [Raw Values, raw.js]
examples:
- zoom: '10'
  lat: '42.76703'
  lng: '11.22847'
  datasetId: S2L2A
  fromTime: '2020-07-12T00:00:00.000Z'
  toTime: '2020-07-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/contribute/example-multiple-scripts/eob.js
---

The layout `script` automatically adds the title defined in the front matter and adds buttons to visualize the script. For the buttons to work the evalscript has to be named `script.js` and must be in the same directory as the `README.md` file.

## Adding examples

This page shows how example links can be added by defining the parameters in the [front matter](https://jekyllrb.com/docs/front-matter/). 
An example is defined like this:

```yaml
examples:
- zoom: '10'
  lat: '42.76703'
  lng: '11.22847'
  datasetId: S2L2A
  fromTime: '2020-07-12T00:00:00.000Z'
  toTime: '2020-07-12T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndvi/eob.js
```

From these parameters, example urls are built automatically in the [layout file](https://github.com/sentinel-hub/custom-scripts/blob/main/_layouts/script.html?plain=1). The parameter `platform` specifies for which visualization platform the example links should be built. Right now the only options are Copernicus Browser (CDSE) and EO Browser (EOB). 

If a script only works on one platform but not the other, only the platform the script works on should be specified (See for example [cloud statistics](https://github.com/sentinel-hub/custom-scripts/blob/main/sentinel-2/cloud_statistics/README.md)). If the page has separate versions for each platform, multiple examples can be specified in the list (See [markuse fire](https://github.com/sentinel-hub/custom-scripts/blob/main/sentinel-2/markuse_fire/README.md?plain=1)). 

The evalscript can be given as an `evalscripturl` like done here. This is the preferred option since it keeps maintenance of example links to a minimum since nothing needs to be updated if the evalscript is changed at a later point.

Alternatively the evalscript can be passed into the parameter `evalscript`. Here the evalscript needs to be Base64 encoded. See the [Forest Hurricane Script](https://github.com/sentinel-hub/custom-scripts/blob/main/sentinel-1/forest_hurricane/README.md?plain=1) as an example.

When multiple different evalscripts are added, they can also be named by passing the parameter `name` to each entry of the example list.

It is also possible to pass more url query parameters to the built example link by specifying `additionalQueryParams`. See the [NDVI Time Series](https://github.com/sentinel-hub/custom-scripts/blob/main/sentinel-2/ndvi_time_series/README.md?plain=1) script as an example.

## General description of the script

## References

- possible references (scientific articles, wiki/web references, ...)
