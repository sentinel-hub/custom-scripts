---
permalink: /sentinel-5p/carbon-monoxide/
nav_exclude: true
---

# Sentinel-5P Carbon Monoxide - CO
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
 - [EO Browser](https://sentinelshare.page.link/HVAb){:target="_blank"}   

## Description
Carbon monoxide (CO) is an important atmospheric trace gas. In certain urban areas, it is a major atmospheric pollutant. Main sources of CO are combustion of fossil fuels, biomass burning, and atmospheric oxidation of methane and other hydrocarbons. The carbon monoxide total column is measured in mol per square meter (mol/ m^2). Learn more [here](https://www.tropomi.eu/data-products/carbon-monoxide).

## Description of representative images

High CO concentrations over Australia, 2020-01-27.
![NO2 tropospheric column](fig/fig1.png)


