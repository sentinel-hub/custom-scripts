---
permalink: /other_collections/cnes_land_cover_validity/
nav_exclude: true
---

# CNES land cover validity visualisation script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script
The script visualises the information on the number of cloudless images for validity.

Table 1: Color legend for CNES land cover validity
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
      <td>1 cloudless image</td>
    </tr>
    <tr>
      <td>45</td>
      <td bgcolor="#e60000"></td>
      <td>#e60000</td>
      <td>45 cloudless images</td>
    </tr>
  </tbody>
</table>

## Description of representative images
*The overview of CNES Land Cover validity 2020 for France visualised in EO Browser*

![CNES land cover validity France overview](fig/cnes-land-cover-validity-france-overview.png)

*CNES Land Cover validity 2020 around Lyon visualised in EO Browser*

![CNES land cover validity Lyon](fig/cnes-land-cover-validity-lyon.png)

## Resources

- [Data source](https://www.theia-land.fr/en/product/land-cover-map/)

- [Entry in public collections](https://collections.sentinel-hub.com/cnes-land-cover-map/)

- [Entry in public collections repository](https://github.com/sentinel-hub/public-collections/tree/main/collections/cnes-land-cover-map/)
