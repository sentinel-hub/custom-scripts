# Global Surface Water Occurrence visualisation script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script

This script visualizes the Occurrence layer from the Global Surface Water dataset according to the official symbology (Table 1). The water Occurrence layer shows the (intra- and inter-annual) variations of surface water presence in the time range between March 1984 and December 2019.

Table 1: Occurrence Symbology

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Colour</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#FFFFFF"></td>
      <td>0xffffff</td>
      <td>Not water</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color:#FFCCCC"></td>
      <td>0xffcccc</td>
      <td>1% occurrence</td>
    </tr>
    <tr>
      <td>100</td>
      <td style="background-color:#0000FF"></td>
      <td>0x0000ff</td>
      <td>100% occurrence</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#CCCCCC"></td>
      <td>0xcccccc</td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

## Description of representative images

*Occurrence layer visualisation in EO Browser for the Danube Delta in Romania.*

![Occurrence Danube Delta in Romania](fig/image_occurrence_danube_delta.png)

## Resources

- [Data Source](https://global-surface-water.appspot.com/download)

- [Entry in public collections](https://collections.sentinel-hub.com/global-surface-water/)

- [Entry in public collections repository](https://github.com/sentinel-hub/public-collections/tree/main/collections/global-surface-water)
