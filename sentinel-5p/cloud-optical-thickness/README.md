---
permalink: /sentinel-5p/cloud-optical-thickness/
nav_exclude: true
---

# Sentinel-5P Cloud Optical Thickness
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
 - [EO Browser](https://sentinelshare.page.link/wdaX){:target="_blank"}   

## Description
This script visualizes Sentinel 5P cloud optical thickness product. The cloud thickness is a key parameter to characterise optical properties of clouds. It is a measure of how much sunlight passes through the cloud to reach Earth's surface. The higher a cloud's optical thickness, the more sunlight the cloud is scattering and reflecting. Dark blue shows where there are low cloud optical thickness values and red shows larger cloud optical thickness.

## Description of representative images

Optical thickness of the Pacific Ocean hurricane, 2020-01-15.
![NO2 tropospheric column](fig/fig1.png)


