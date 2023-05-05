---
permalink: /sentinel-5p/cloud-top-height/
nav_exclude: true
---

# Sentinel-5P Cloud Top Height
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
 - [EO Browser](https://sentinelshare.page.link/NFjW){:target="_blank"}   

## Description
This script visualizes Sentinel 5P top height product (height of a cloud top in meters).

## Description of representative images

Top height of the Pacific Ocean hurricane, 2020-01-15.
![NO2 tropospheric column](fig/fig1.png)


