---
layout: default
title: PlanetScope
nav_order: 1
parent: Planet
---

# PlanetScope (Commercial)

<a href="https://www.planet.com/products/monitoring/">PlanetScope</a> satellite constellation consists of more than 130 small satellites called Doves. The satellites are launched in groups, which constantly improves mission's characteristics such as revisit times, spatial and spectral resolutions. PlanetScope data complements Sentinel-2 with better spatial resolution (3m) and almost global daily coverage. It is an excellent source for vegetation monitoring. For more information on PlanetScope, visit our <a href="https://docs.sentinel-hub.com/api/latest/#/data/PlanetScope">documentation page</a>.

<details markdown="block">
<summary>Information about PlanetScope spectral bands</summary>

The spectral bands of PlanetScope data are the following if you order a 4-band <a href = "https://docs.sentinel-hub.com/api/latest/data/planet/planet-scope/#productbundle-parameter">product bundle</a>:

- *blue - Blue, resolution 3m*
 
- *green - Green, resolution 3m*
 
- *red - Red, resolution 3m*
 
- *nir - Near Infrared, resolution 3m*

The spectral bands of PlanetScope data are the following if you order a 8-band product bundle:

- *coastal_blue - Coastal Blue, resolution 3m*
 
- *blue - Blue, resolution 3m*
 
- *green_i - Green I, resolution 3m* 
 
- *green - Green, resolution 3m*
 
- *yellow - Yellow, resolution 3m*
 
- *red - Red, resolution 3m*
 
- *rededge - Red Edge, resolution 3m*
 
- *nir - Near-infrared, resolution 3m*

</details>

### Indices

 - [True Color]({% link planet/planetscope/true_color/index.md %})
 - [False Color]({% link planet/planetscope/false_color/index.md %})
 - [Cloudless Mosaic]({% link planet/planetscope/cloudless_mosaic/index.md %})
 - [NDVI]({% link planet/planetscope/ndvi/index.md %})
 - [Maximum NDVI]({% link planet/planetscope/max_ndvi/index.md %})
 - [NDVI Difference]({% link planet/planetscope/ndvi_difference/index.md %})
 - [NDWI]({% link planet/planetscope/ndwi/index.md %})
 - [NDCI - Normalized Difference Chlorophyll Index]({% link planet/planetscope/ndci/index.md %})
 - [NDRE - Normalized Difference Red Edge Index]({% link planet/planetscope/ndre/index.md %})
 - [Green City]({% link planet/planetscope/green_city/index.md %})
 - [UDM2 Cloud/Snow Classification]({% link planet/planetscope/cloud_classification/index.md %})
