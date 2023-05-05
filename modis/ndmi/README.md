---
permalink: /modis/ndmi/
nav_exclude: true
---

# MODIS Normalized difference moisture index - NDMI
{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

- [EO Browser](https://sentinelshare.page.link/ptWU){:target="_blank"}   

## Description

The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.

The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation; see [1] for details.

The normalized difference vegetation index, abbreviated NDVI, is calculated using near infrared and red wavelengths. 

**NDMI = (NIR - SWIR) / (NIR + SWIR)**

For MODIS, the NDMI is calculated using NIR band 2 and SWIR band 6: 

**NDMI = (B02 - B06) / (B02 + B06)**

## Description of representative images

MODIS NDMI of Europe. Acquired on 5. february of 2020, processed by Sentinel Hub. 

![L8 NDVI](fig/fig1.png)


 