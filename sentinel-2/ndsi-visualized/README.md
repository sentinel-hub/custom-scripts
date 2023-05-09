---
permalink: /sentinel-2/ndsi-visualized/
nav_exclude: true
---

# Normalised Difference Snow Index, NDSI, Visualized

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

 - [EO Browser](https://sentinelshare.page.link/twxy){:target="_blank"} 

## General description of the script

The Sentinel-2 normalised difference snow index can be used to differentiate between cloud and snow cover as snow absorbs in the short-wave infrared light, but reflects the visible light, whereas cloud is generally reflective in both wavelengths. Snow cover is represented in bright vivid blue.

## Description of representative images

Visualized NDSI over New Zealand, acquired on 2019-09-19. 

![NDSI](fig/fig1.png) 

## References

- [ESA, Level-2A Algorithm Overview](https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm-overview)
