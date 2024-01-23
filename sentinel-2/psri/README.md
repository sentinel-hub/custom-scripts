---
title: Plant Senescence Reflectance Index (PSRI)
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/psri/
nav_exclude: true
examples:
- zoom: '12'
  lat: '41.9027835'
  lng: '12.496365500000024'
  datasetId: S2L2A
  fromTime: '2018-08-01'
  toTime: '2019-02-20'
  platform:
  - CDSE
  - EOB
  evalscript: Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKCmxldCBtaW5WYWwgPSAtMC4yOwpsZXQgbWF4VmFsID0gMC40OwoKbGV0IHZpeiA9IG5ldyBIaWdobGlnaHRDb21wcmVzc1Zpc3VhbGl6ZXJTaW5nbGUobWluVmFsLCBtYXhWYWwpOwoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzKSB7CiAgICBsZXQgdmFsID0gKHNhbXBsZXMuQjA2ID4gMCkgPyAoc2FtcGxlcy5CMDQgLSBzYW1wbGVzLkIwMikgLyBzYW1wbGVzLkIwNiA6IEpBVkFfRE9VQkxFX01BWF9WQUw7CiAgICByZXR1cm4gdml6LnByb2Nlc3ModmFsKTsKfQoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICAgIkIwMiIsCiAgICAgICAgICAiQjA0IiwKICAgICAgICAgICJCMDYiCiAgICAgIF0KICAgIH1dLAogICAgb3V0cHV0OiB7IGJhbmRzOiAxIH0gIH0KfQo=
  additionalQueryParams:
  - - maxcc
    - '20'
---

## General description

The plant senescence reflectance index, abbreviated PSRI, is defined as   
$$PSRI = \frac{B04-B02}{B06}.$$   

It is used for studying vegetation; see [1] for details.

## Description of representative images

PSRI of Rome. Acquired on 8.10.2017.

![PSRI of Rome](fig/fig1.png)


## References
 [1] Index DataBase, [index.de: PSRI](https://www.indexdatabase.de/db/i-single.php?id=69). Accessed on February 20th 2019.
