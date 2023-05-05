---
permalink: /sentinel-5p/cloud-base-height/
nav_exclude: true
---

# Sentinel-5P Cloud Base Height
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
 - [EO Browser](https://sentinelshare.page.link/y43P){:target="_blank"}   

## Description
This script visualizes Sentinel 5P base height product (height of a cloud base in meters).

## Description of representative images

Base height of the Pacific Ocean hurricane, 2020-01-15.
![NO2 tropospheric column](fig/fig1.png)


