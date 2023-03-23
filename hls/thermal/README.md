---
permalink: /hls/thermal/
nav_exclude: true
---

# Thermal Visualization
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

This thermal visualization is based on band ThermalInfrared1. At the central wavelength of 10895 nm it measures in the thermal infrared, or TIR. Instead of measuring the temperature of the air, like weather stations do, band ThermalInfrared1 reports on the ground itself, which is often much hotter.

## Description of representative images

HLS thermal visualization of Rome. Acquired on 2020-07-30, processed by Sentinel Hub. 

![HLS](fig/fig1.jpeg)


 