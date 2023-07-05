---
layout: default
title: High Resolution Vegetation Phenology and Productivity 
nav_order: 4
parent: Copernicus Services
permalink: /copernicus_services/hrvpp/
---

# High Resolution Vegetation Phenology and Productivity
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Vegetation Indices, daily
Vegetation Indices (VI) product is part of the Copernicus Land Monitoring Service (CLMS), pan-European High Resolution Vegetation Phenology and Productivity [(HR-VPP)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity) product suite. 
The product is comprised of 4 raw Vegetation Indices; (1) Normalized Difference Vegetation Index (NDVI), (2) Leaf Area Index (LAI), 
(3) Fraction of Absorbed Photosynthetically Active Radiation (FAPAR) and (4) Plant Phenology Index (PPI) generated near real-time (NRT) from Sentinel-2 satellite observations. 
The raw Vegetation Indices are provided on a daily basis at 10m resolution from October 2016 onwards. Therefore VI products are available over the EEA39 region for the respective observation day 
based on 5-day revisit period of Sentinel-2. The VIs are accompanied by  a related QFLAG2 band that flags clouds, shadows, snow, open water and other areas where the VI retrieval is less reliable. 
More information about raw vegetation indices is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/product-user-manual-of-vegetation-indices/)  
Vegetation Indices is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/phenology/).

##### Available scripts
{: .no_toc }
- [LAI visualisation script](/copernicus_services/hrvpp/vi-lai)
- [PPI visualisation script](/copernicus_services/hrvpp/vi-ppi)
- [NDVI visualisation script](/copernicus_services/hrvpp/vi-ndvi)
- [FAPAR visualisation script](/copernicus_services/hrvpp/vi-fapar)

## Seasonal Trajectories, 10-daily
Seasonal Trajectories (ST) product is a filtered time series of [Plant Phenology Index(PPI)](https://www.nateko.lu.se/research/remote-sensing-and-earth-observation/lund-earth-observation-research-group/vegetation-phenology) provided yearly on a 10-daily basis at 10m resolution . 
It is part of the Copernicus Land Monitoring Service (CLMS), pan-European High Resolution Vegetation Phenology and Productivity [(HR-VPP)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity) product suite. 
The Seasonal Trajectories PPI is derived through fitting a smoothing and gap filling function to the yearly time-series raw PPI values generated from Sentinel-2 satellite observations. 
In addition to the PPI band, a  QFLAG band  indicating the quality of the smoothing process is included. 
The Seasonal Trajectories  provide the vegetation status for each pixel on a regular 10-day time step from January 1 2017 onwards over the  EEA39 region. 
More information about ST product is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/product-user-manual-of-seasonal-trajectories/)  
Seasonal Trajectories is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/phenology/).  

##### Available scripts
{: .no_toc }
- [PPI visualisation script](/copernicus_services/hrvpp/st-ppi)

## Vegetation Phenology and Productivity Parameters, yearly    
Vegetation Phenology and Productivity Parameters (VPP) product is part of the Copernicus Land Monitoring Service (CLMS), 
pan-European High Resolution Vegetation Phenology and Productivity [(HR-VPP)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-vegetation-phenology-and-productivity) product suite. 
The VPP product is comprised of 13 parameters that describe specific stages of the seasonal vegetation growth cycle. 
These parameters are extracted from Seasonal Trajectories of the [Plant Phenology Index(PPI)](https://www.nateko.lu.se/research/remote-sensing-and-earth-observation/lund-earth-observation-research-group/vegetation-phenology) 
derived from Sentinel-2 satellite observations at 10m resolution. Since growing seasons can traverse years, VPP parameters are provided for a maximum of two growing seasons per year. 
The  parameters include (1) start of season (date, PPI value and slope), (2) end of season (date, PPI value and slope), (3)length of season, (4) minimum of season, 
(4) peak of the season (date and PPI value), (5) amplitude, (6) small integrated value and (7) large integrated value. 
VPP parameters are generated over the EEA39 region on a yearly frequency from January 1 2017 onwards. 
Among other applications, the high-resolution phenology data provides a detailed assessment of the impacts of human or climate change on the ecosystem through monitoring of vegetation responses to disturbances, e.g. droughts, storms, insect infestations, and to human influence from global to local levels. 
More information about VPP product is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/product-user-manual-of-seasonal-trajectories/)  
Vegetation Phenology and Productivity Parameters is available in Sentinel Hub, read more in our [Public Collections](https://collections.sentinel-hub.com/tag/phenology/).


##### Available scripts
{: .no_toc }
- [AMPL visualisation script](/copernicus_services/hrvpp/vpp-amplitude-ampl)
- [MAXV visualisation script](/copernicus_services/hrvpp/vpp-season-maximum-value-maxv)
- [MINV visualisation script](/copernicus_services/hrvpp/vpp-season-minimum-value-minv)
- [SOSV visualisation script](/copernicus_services/hrvpp/vpp-start-of-season-value-sosv)
- [EOSV visualisation script](/copernicus_services/hrvpp/vpp-end-of-season-value-eosv)
- [RSLOPE visualisation script](/copernicus_services/hrvpp/vpp-slope-of-senescent-period-rslope)
- [LSLOPE visualisation script](/copernicus_services/hrvpp/vpp-slope-of-greening-up-period-lslope)
- [SPROD visualisation script](/copernicus_services/hrvpp/vpp-seasonal-productivity-sprod)
- [TPROD visualisation script](/copernicus_services/hrvpp/vpp-total-productivity-tprod)
