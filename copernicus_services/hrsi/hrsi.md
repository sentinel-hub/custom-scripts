---
layout: default
title: High-Resolution Snow & Ice
nav_order: 5
parent: Copernicus Services
---

# High-Resolution Snow & Ice Monitoring
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

The High-Resolution Snow & Ice Monitoring service ([HR-S&I](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring)) is part of the Copernicus Land Monitoring Service (CLMS). The snow aspect of the service provides products measuring Snow cover (FSC, FSTOC, FSCOG, GFSC), Snow state conditions (WDS, SWS) and persistent snow area (PSA). There are also ice products that measure ice cover (RLIE) and aggregated river and lake ice extent (ARLIE).

## Fractional Snow Cover

The Fractional Snow Cover (FSC) product provides the snow fraction at the Top Of Canopy (FSCTOC) and On Ground (FSCOG). NDSI is also provided as part of this service.

##### Available scripts
{: .no_toc }
- [FSC FSCOG visualisation script](/copernicus_services/hrsi-fsc-on-ground-fsi)
- [FSC FSCOG quality visualisation script](/copernicus_services/hrsi-fsc-on-ground-fsi-quality)
- [FSC FSTOC visualisation script](/copernicus_services/hrsi-fsc-top-of-canopy-fsi)
- [FSC FSTOC quality visualisation script](/copernicus_services/hrsi-fsc-top-of-canopy-fsi-quality)
- [FSC NDSI visualisation script](/copernicus_services/hrsi-fsc-ndsi)

## Daily cumulative Gap-filled Fractional Snow Cover

The daily cumulative Gap-filled Fractional Snow Cover (GFSC) product is a more complete version of the FSC product; gap-filled both at a spatial and temporal scale.

##### Available scripts
{: .no_toc }
- [GFSC FSC visualisation script](/copernicus_services/hrsi-gfsc-fsc)
- [GFSC FSC quality visualisation script](/copernicus_services/hrsi-gfsc-fsc-quality)

## SAR Wet Snow in high mountains

The SAR Wet Snow (SWS) product provides information on the wet snow extent in high-mountain areas. 

##### Available scripts
{: .no_toc }
- [SWS WSM visualisation script](/copernicus_services/hrsi-sws-wet-snow-classification-high-mountains)
- [SWS WSM quality visualisation script](/copernicus_services/hrsi-sws-wet-snow-classification-high-mountains-quality)

## Wet / Dry Snow - Snow state classification

The Wet/Dry Snow (WDS) product differentiates the snow state conditions within the snow mask defined by the FSCTOC information.

##### Available scripts
{: .no_toc }
- [WDS SSC visualisation script](/copernicus_services/hrsi-wds-ssc)
- [WDS SSC quality visualisation script](/copernicus_services/hrsi-wds-ssc-quality)

## Persistent Snow Area

The Persistent Snow Area (PSA) product is generated annually from FSC products and provides the extent of persistent snow cover for that year (the area where snow is present throughout the hydrological year).

##### Available scripts
{: .no_toc }
- [PSA visualisation script](/copernicus_services/hrsi-psa-psa)
- [PSA quality visualisation script](/copernicus_services/hrsi-psa-psa-quality)

More information about the HR-S&I snow production workflows that highlights the dependencies between the diferent products and how they are derived can be found [here](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products).

