---
title: Normalized Difference Gamma-Ray Index (NDGRI)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/ndgri/
nav_exclude: true

examples:
- name: Naarst
  zoom: '11'
  lat: '44.940'
  lng: '110.600'
  datasetId: S2L2A
  fromTime: '2022-09-20T00:00:00.000Z'
  toTime: '2022-09-20T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndgri/script.js

- name: Zuunbayan
  zoom: '11'
  lat: '44.295'
  lng: '110.250'
  datasetId: S2L2A
  fromTime: '2022-09-20T00:00:00.000Z'
  toTime: '2022-09-20T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndgri/script.js

- name: Erdene
  zoom: '10'
  lat: '44.530'
  lng: '111.170'
  datasetId: S2L2A
  fromTime: '2023-08-19T00:00:00.000Z'
  toTime: '2023-08-19T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndgri/script.js

- name: Khuvsgul
  zoom: '10'
  lat: '43.600'
  lng: '109.930'
  datasetId: S2L2A
  fromTime: '2023-07-30T00:00:00.000Z'
  toTime: '2023-07-30T23:59:59.999Z'
  platform:
  - CDSE
  evalscripturl: https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-2/ndgri/script.js
---

## General description of the script

The Normalized Difference Gamma-Ray Index (NDGRI) is a Sentinel-2 spectral index developed for the pixel-level delineation of areas associated with elevated natural gamma radiation in arid and semi-arid environments.

NDGRI is calculated using the Sentinel-2 red band (B04) and short-wave infrared band (B12):

**NDGRI = (B04 - B12) / (B04 + B12)**

The index was developed and evaluated using Sentinel-2 Level-2A imagery and car-borne gamma-ray spectrometry data from the Naarst and Zuunbayan uranium exploration areas in southeastern Mongolia.

NDGRI is intended as a remote-sensing pre-screening tool. It does not directly measure gamma radiation. Instead, it identifies spectral patterns that were found to spatially correspond with zones of elevated natural gamma radiation under suitable environmental conditions.

The method can therefore be used to prioritize areas for subsequent airborne or ground-based radiometric surveys.

## Interpretation

In the Naarst and Zuunbayan study areas, NDGRI values associated with the highest gamma-radiation class were approximately:

- **High gamma-radiation class:** -0.109 to -0.040

The index achieved a precision of approximately **62.8%** for the high gamma-radiation class and an overall classification accuracy of approximately **0.78** across the original test areas.

Independent validation was subsequently performed at the Erdene and Khuvsgul sites in Mongolia using airborne gamma-ray spectrometry data.

For validation, NDGRI pixels in the broader anomalous range of approximately **-0.129 to -0.040** were compared with elevated gamma-radiation areas. Spatial overlap values of **76.41%** and **85.55%** were obtained for the two validation sites.

## Important acquisition conditions

NDGRI is highly sensitive to surface moisture and atmospheric water content. To reduce spectral effects unrelated to elevated gamma radiation, Sentinel-2 scenes should meet the following screening criteria:

- Cloud cover below approximately **4% of land pixels**
- Vegetation cover below **1%**
- Snow and ice cover below **1%**
- Granule mean water vapor below **2 g/cm²**
- No rainfall on the acquisition day
- Avoid imagery acquired within the **preceding few days after rainfall**, depending on the amount of precipitation, because residual surface moisture can strongly affect NDGRI values
- Minimum daily temperature above **0 °C**, because subzero nights followed by warmer daytime conditions can produce frost, dew, or freeze-thaw moisture that alters the surface spectral response

These restrictions substantially reduce the number of suitable Sentinel-2 scenes but are important for minimizing moisture-related false anomalies.

## Limitations

NDGRI was developed and validated primarily in arid and semi-arid environments with sparse vegetation. Its performance in different climatic, geological, and land-cover settings requires further validation.

Potential false positives may arise from surface materials or conditions that produce spectral responses similar to NDGRI anomalies. These include:

- **Shoreline and mixed water-soil pixels**, which may produce NDGRI values close to the anomaly range. Pure open water generally produces positive NDGRI values and is therefore not normally classified as anomalous.
- **Evaporitic surfaces and salt flats**, whose SWIR response may resemble that of NDGRI anomalies.
- **Hydrothermal alteration minerals**, particularly clays such as illite, kaolinite, and alunite, which have strong absorption features near 2.2 µm and may elevate NDGRI independently of uranium enrichment.
- **Dark soils and shadowed terrain**, which may produce low NIR/SWIR reflectance and should be considered when applying NDGRI outside the original study environments.

These potential false positives were generally limited or not clearly observed in the original study areas, but they may become more important in other geological and environmental settings.

NDGRI should therefore be used as a screening tool for identifying areas requiring further investigation, rather than as direct evidence of elevated gamma radiation or uranium mineralization. Ground-based or airborne radiometric measurements are required for confirmation.

## Sentinel-2 bands used

| Band | Description | Approximate wavelength |
|------|-------------|------------------------|
| B04 | Red | 665 nm |
| B12 | SWIR-2 | 2190 nm |

## Authors

**Marko Simić, Boris Vakanjac and Siniša Drobnjak**

The NDGRI was introduced in the peer-reviewed publication:

Simić, M.; Vakanjac, B.; Drobnjak, S.  
**NDGRI: A Novel Sentinel-2 Normalized Difference Gamma-Radiation Index for Pixel-Level Detection of Elevated Gamma Radiation.**  
Remote Sensing, 2025, 17, 3331.

## References

Simić, M.; Vakanjac, B.; Drobnjak, S. (2025).  
NDGRI: A Novel Sentinel-2 Normalized Difference Gamma-Radiation Index for Pixel-Level Detection of Elevated Gamma Radiation.  
*Remote Sensing*, 17, 3331.  
https://doi.org/10.3390/rs17193331
