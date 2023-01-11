# CLMS HR-S&I: Persistent Snow Area quality layer visualisation script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script  
This script visualises the Persistent Snow Area quality layer.

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
      <td>1</td>
      <td style="background-color: #00a600;"></td>
      <td>0 - high quality</td>
    </tr>
    <tr>
      <td>2</td>
      <td style="background-color: #a6e64d;"></td>
      <td>1 - medium quality</td>
    </tr>
    <tr>
      <td>3</td>
      <td style="background-color: #f2a64d;"></td>
      <td>2 - low quality</td>
    </tr>
    <tr>
      <td>4</td>
      <td style="background-color: #ff0000;"></td>
      <td>3 - minimal quality</td>
    </tr>
    <tr>
      <td>5</td>
      <td style="background-color: #cccccc;"></td>
      <td>200 - masked</td>
    </tr>
    <tr>
      <td>6</td>
      <td style="background-color: #000000;"></td>
      <td>255 - no data</td>
    </tr>
</tbody>
</table>  


## Description of representative images
*PSA over the Mont Blanc Region, FR* 

![PSA QC](fig/figure.png)  

## Resources

- [Data source](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products)

- Entry in public collections
