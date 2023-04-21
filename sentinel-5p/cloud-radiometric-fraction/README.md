---
permalink: /sentinel-5p/cloud-radiometric-fraction/
nav_exclude: true
---

# Sentinel-5P Effective Radiometric Cloud Fraction
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
 - [EO Browser](https://sentinelshare.page.link/8xng){:target="_blank"}   

## Description
This script visualizes Sentinel 5P effective radiometric cloud fraction product, which represents the portion of the Earth's surface covered by clouds, divided by the total surface. Clouds have shielding, albedo, and in-cloud absorption effects on trace gas retrieval. The effective radiometric cloud fraction is an important parameter to correct these effects.

## Description of representative images

Effective radiometric cloud fraction of the Pacific Ocean hurricane, 2020-01-15.
![NO2 tropospheric column](fig/fig1.png)


