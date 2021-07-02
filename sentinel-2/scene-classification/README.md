# Sentinel-2 L2A Scene Classification Map

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

 - [EO Browser](https://sentinelshare.page.link/gjMg){:target="_blank"}

## General description

Scene classification was developed to distinguish between cloudy pixels, clear pixels and water pixels of Sentinel-2 data and is a result of ESA's Scene classification algorithm. Twelve different classifications are provided including classes of clouds, vegetation, soils/desert, water and snow. It does not constitute a land cover classification map in a strict sense.

## Description of representative images

Scene Classification of Rome. 

![NDVI of Rome](fig/fig1.png)

## Color legend
<table>
  <tr>
    <th>NDVI range</th>
    <th>HTLM color code</th>
    <th>Color</th>
  </tr>
  <tr>
    <td>No Data (Missing data)</td>
    <td>#000000</td>
    <td style="background-color: #000000;"></td>
  </tr>
  <tr>
    <td>Saturated or defective pixel</td>
    <td>#ff0000</td>
    <td style="background-color: #ff0000;"></td>
  </tr>
  <tr>
    <td>Dark features / Shadows</td>
    <td>#2f2f2f</td>
    <td style="background-color: #2f2f2f;"></td>
  </tr>
  <tr>
    <td>Cloud shadows</td>
    <td>#643200</td>
    <td style="background-color: #643200;"></td>
  </tr>
  <tr>
    <td>Vegetation</td>
    <td>#00a000</td>
    <td style="background-color: #00a000;"></td>
  </tr>
  <tr>
    <td>Not-vegetated</td>
    <td>#ffe65a</td>
    <td style="background-color: #ffe65a;"></td>
  </tr>
  <tr>
    <td>Water</td>
    <td>#0000ff</td>
    <td style="background-color: #0000ff;"></td>
  </tr>
  <tr>
    <td>Unclassified</td>
    <td>#808080</td>
    <td style="background-color: #808080;"></td>
  </tr>
  <tr>
    <td>Cloud medium probability</td>
    <td>#c0c0c0</td>
    <td style="background-color: #c0c0c0;"></td>
  </tr>
  <tr>
    <td>Cloud high probability</td>
    <td>#ffffff</td>
    <td style="background-color: #ffffff;"></td>
  </tr>
  <tr>
    <td>Thin cirrus</td>
    <td>#64c8ff</td>
    <td style="background-color: #64c8ff;"></td>
  </tr>
  <tr>
    <td>Snow or ice</td>
    <td>#ff96ff</td>
    <td style="background-color: #ff96ff;"></td>
  </tr>

</table>

## References

- [ESA, Level-2A Algorithm Overview](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-2a/algorithm)
