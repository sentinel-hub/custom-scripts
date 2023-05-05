---
permalink: /sentinel-5p/aer-ai-354-388/
nav_exclude: true
---

# Sentinel-5P Aerosol concentrations 354/388 nm
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
 - [EO Browser](https://sentinelshare.page.link/vPy9){:target="_blank"}   

## Description
The Aerosol Index (AI) is a qualitative index indicating the presence of elevated layers of aerosols in the atmosphere. It can be used to detect the presence of UV absorbing aerosols such as desert dust and volcanic ash plumes. Positive values (from light blue to red) indicate the presence of UV-absorbing aerosol. This script visualizes AER wavelength pair 354/388 nm.

## Description of representative images

High aerosol concentrations over Chad, 2019-07-04.
![NO2 tropospheric column](fig/fig1.png)

## References
[Sentinel Online - Level-2 Algorithms - Aerosol Index](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-5p/level-2/aerosol-index){:target="_blank"}

