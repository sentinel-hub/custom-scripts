---
title: CHL-RED-EDGE (Chlorophyll Red-Edge)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/chl_rededge/
nav_exclude: true
examples:
- zoom: '9'
  lat: '45.91486'
  lng: '13.72192'
  datasetId: S2L2A
  fromTime: '2020-07-09T00:00:00.000Z'
  toTime: '2020-07-09T23:59:59.999Z'
  platform:
  - CDSE
  - EOB
  evalscript: Ly8KLy8gQ2hsb3JvcGh5bGwgUmVkLUVkZ2UgIChhYmJydi4gQ2hscmVkLWVkZ2UpCi8vCi8vIEdlbmVyYWwgZm9ybXVsYTogKE5JUi9SRSktMQovLwovLyBVUkwgaHR0cHM6Ly93d3cuaW5kZXhkYXRhYmFzZS5kZS9kYi9zaS1zaW5nbGUucGhwP3NlbnNvcl9pZD05NiZyc2luZGV4X2lkPTI1MgovLwoKbGV0IGluZGV4ID0gKEIwNyAvIEIwNSkgLSAxOwoKcmV0dXJuIGNvbG9yQmxlbmQoaW5kZXgsIFswLCAxLCAyLjUsIDUsIDEwLCAyMF0sCiAgWwogICAgWzAsIDAsIDBdLAogICAgWzAsIDAuNSwgMF0sCiAgICBbMC4yLCAwLjgsIDBdLAogICAgWzEsIDEsIDBdLAogICAgWzAuOCwgMC44LCAwLjhdLAogICAgWzEsIDEsIDFdCiAgXSk7Cg==
---
The index is based on [Gitelson et al. 2003](https://doi.org/10.1078/0176-1617-00887).

It is defined as:

$$ChlRe = \frac{NIR}{RE}-1.$$  


## Representative Images

Chlorophyl red edge above Slovenia and Croatia, on 9.7.2020. 

![rededge](fig/fig1.png)
