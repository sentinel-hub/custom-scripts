---
permalink: /landsat-7-etm/thermal/
nav_exclude: true
---

# Landsat 7 ETM+ Thermal Visualization

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and Visualize

- [EO Browser](https://sentinelshare.page.link/DYxX)

## General description

This thermal visualization is based on a band B06 (a band is a region of the electromagnetic spectrum; a satellite sensor can image Earth in different bands). At the central wavelength of 10400-12500 nm it measures in the thermal infrared, or TIR. Instead of measuring the temperature of the air, like weather stations do, band B06 reports on the ground itself, which is often much hotter. Thermal band B06 is useful in providing surface temperatures and is collected with a 60-meter resolution, resampled to 30-meter.
[More info here](https://eos.com/find-satellite/landsat-7/). 

## Description of representative images

Thermal composite over northern Tunisia. Acquired on 2001-06-23.
![The script example 1](fig/fig1.png)


