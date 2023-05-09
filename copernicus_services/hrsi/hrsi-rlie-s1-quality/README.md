---
permalink: /copernicus_services/hrsi-rlie-s1-quality/
nav_exclude: true
---

# CLMS HR-S&I: Sentinel-1 River and Lake Ice Extent quality layer visualisation script

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script
This script visualises the Sentinel 1-based River and Lake Ice Extent quality layer.

Table 1: Classification classes and colouring scheme.

<table>
      <thead>
    <tr>
      <th>Value</th>
      <th>Color</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color: #5DA400;"></td>
      <td>high quality</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color: #BDBD5B;"></td>
      <td>medium quality</td>
    </tr>
    <tr>
      <td>2</td>
      <td style="background-color: #FFC000;"></td>
      <td>low quality</td>
    </tr>
        <tr>
      <td>3</td>
      <td style="background-color: #FF0000;"></td>
      <td>minimal quality</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color: #FFFFFF;"></td>
      <td>no data</td>
    </tr>
</tbody>
</table>

## Description of representative images

*20th September 2022, Hamburg, DE*

![RLIES1 QC](fig/figure.png)

## Resources

- [Data source](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/ice-products/ice-cover)
