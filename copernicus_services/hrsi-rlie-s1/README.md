# CLMS HR-S&I: Sentinel-1 River and Lake Ice Extent visualisation script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script
This script visualises the River and Lake Ice Extent based on synthetic aperture radar data from the S1 costellation. The product is generated for the entire EEA38+UK zone. 

Table 1: Classification classes and colouring scheme.

<table>

</tbody>

</table>

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
      <td>1</td>
      <td style="background-color: #0000FE;"></td>
      <td>open water</td>
    </tr>
    <tr>
      <td>100</td>
      <td style="background-color: #00E8FF;"></td>
      <td>snow-covered or snow-free ice</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color: #FFFFFF;"></td>
      <td>no data</td>
    </tr>
</tbody>
</table>

## Description of representative images

*03rd December 2019, Verona, IT*

![RLIES1](fig/figure.png)

## Resources

- [Data source]([Ice cover — Copernicus Land Monitoring Service](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/ice-products/ice-cover))