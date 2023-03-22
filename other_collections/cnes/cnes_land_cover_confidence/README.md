---
permalink: /other_collections/cnes_land_cover_confidence/
nav_exclude: true
---

# CNES land cover classifier confidence visualisation script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script
The script visualises the information on the classifier confidence with values ranging from 1 to 100.

Table 1: Color legend for CNES land cover classifier confidence
<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Color</th>
      <th>Color Code</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td bgcolor="#000000"></td>
      <td>#000000</td>
      <td>1% confidence</td>
    </tr>
    <tr>
      <td>100</td>
      <td bgcolor="#00c800"></td>
      <td>#00c800</td>
      <td>100% confidence</td>
    </tr>
  </tbody>
</table>

## Description of representative images
*The overview of CNES Land Cover classifier confidence 2020 for France visualised in EO Browser*

![CNES land cover classifier confidence France overview](fig/cnes-classifier-confidence-france-overview.png)

*CNES Land Cover classifier confidence 2020 around Lyon visualised in EO Browser*

![CNES land cover classifier confidence Lyon](fig/cnes-classifier-confidence-lyon.png)

## Resources

- [Data source](https://www.theia-land.fr/en/product/land-cover-map/)

- [Entry in public collections](https://collections.sentinel-hub.com/cnes-land-cover-map/)

- [Entry in public collections repository](https://github.com/sentinel-hub/public-collections/tree/main/collections/cnes-land-cover-map/)
