---
permalink: /landsat-4-5-tm/false-color/
nav_exclude: true
---

# Landsat 4-5 TM False Color Composite
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

- [EO Browser](https://sentinelshare.page.link/5v8F){:target="_blank"}   

## Description

This is a simple RGB composite with NIR band B04 in the red channel, red band B03 in the green channel and green band B02 in the blue channel. The script is useful for plant density and health monitoring, as vegetation (displayed in red) heavily reflects NIR light while absorbing red. Vegetation is colored red, cities and exposed ground are grey or tan, and water appears blue or black.

## Description of representative images

Landsat 4-5 TM false color composite of Rome. Acquired on 2011-11-11, processed by Sentinel Hub. 

![L8 NDVI](fig/fig1.png)


 