---
title: mARI - Modified Anthocyanin Reflectance Index
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/mari/
nav_exclude: true
examples:
- zoom: '11'
  lat: '41.956171100940026'
  lng: '12.29095458984375'
  datasetId: S2L1C
  fromTime: '2018-05-01'
  toTime: '2018-11-14'
  platform:
  - CDSE
  - EOB
  evalscript: Ly8KLy8gQW50aG9jeWFuaW4gcmVmbGVjdGFuY2UgaW5kZXggIChhYmJydi4gQVJJKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IDEvNTUwbm0tMS83MDBubQovLwovLyBVUkwgaHR0cHM6Ly93d3cuaW5kZXhkYXRhYmFzZS5kZS9kYi9zaS1zaW5nbGUucGhwP3NlbnNvcl9pZD05NiZyc2luZGV4X2lkPTIxNAoKbGV0IGluZGV4ID0gMS4wIC8gQjAzIC0gMS4wIC8gQjA1OwpyZXR1cm4gW2luZGV4XQ==
  additionalQueryParams:
  - - maxcc
    - '5'
---

## General description of the script

To correct for leaf density and thickness, the near infrared spectral band (in the recommended wavelengths of 760-800nm), which is related to leaf scattering, is added to the basic ARI index. The new index is called modified ARI or mARI (also ARI2). 

**mARI(ARI2) = ((1 / 550nm) - (1 / 700nm)) * NIR**

**mARI(ARI2) = ((1 / B03) - (1 / B05)) * B07**  for Sentinel-2.

mARI values for the examined trees in [this original article](https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1227&context=natrespapers){:target="_blank"} ranged in values from 0 to 8.

mARI(ARI2) = ((1 / 550nm) - (1 / 700nm)) * NIR


## Description of representative images

mARI applied to Rome. Acquired on 10.12.2019, processed by Sentinel Hub. 

![mARI, Rome](fig/fig1.png)

## References
- [Non-Destructive Estimation of Anthocyanins and Chlorophylls in Anthocyanic Leaves (Gitelson, Chivkunova, Merzlyak)](https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1227&context=natrespapers){:target="_blank"}
