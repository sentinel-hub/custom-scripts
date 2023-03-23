---
permalink: /hls/ndmi/
nav_exclude: true
---

# NDMI

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

- [EO Browser - To add](){:target="_blank"}

## Description

The NDMI is a normalized difference moisture index, that uses NIR and SWIR bands to display moisture. The SWIR band reflects changes in both the vegetation water content and the spongy mesophyll structure in vegetation canopies, while the NIR reflectance is affected by leaf internal structure and leaf dry matter content but not by water content. The combination of the NIR with the SWIR removes variations induced by leaf internal structure and leaf dry matter content, improving the accuracy in retrieving the vegetation water content. The amount of water available in the internal leaf structure largely controls the spectral reflectance in the SWIR interval of the electromagnetic spectrum. SWIR reflectance is therefore negatively related to leaf water content. In short, NDMI is used to monitor changes in water content of leaves, and was proposed by Gao. NDWI is computed using the near infrared (NIR) and the short wave infrared (SWIR) reflectance’s.

## Description of representative images

HLS NDMI over Rome. Acquired on 2022-04-05, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)