---
permalink: /sentinel-2/barren_soil/
nav_exclude: true
---

# Barren Soil Script

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
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=45.980084808039955&lng=14.508562088012695&zoom=13&preset=CUSTOM&layers=B01,B02,B03&maxcc=24&gain=1.0&gamma=1.0&time=2018-10-01%7C2019-04-16&atmFilter=&showDates=false&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKCi8vQXV0aG9yOiBNb25qYSBTZWJlbGEKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwocykgewogICAgbGV0IHZhbCA9IDIuNSAqICgocy5CMTEgKyBzLkIwNCktKHMuQjA4ICsgcy5CMDIpKS8oKHMuQjExICsgcy5CMDQpKyhzLkIwOCArIHMuQjAyKSk7CiAgICByZXR1cm4gWzIuNSogdmFsLCBzLkIwOCwgcy5CMTFdOwp9CmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogW3sKICAgICAgYmFuZHM6IFsKICAgICAgICAgICJCMDIiLAogICAgICAgICAgIkIwNCIsCiAgICAgICAgICAiQjA4IiwKICAgICAgICAgICJCMTEiLAogICAgICAgICAgIkIxMiIKICAgICAgXQogICAgfV0sCiAgICBvdXRwdXQ6IHsgYmFuZHM6IDMgfSAgfQp9Cgo%3D){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=45.98008&lng=14.50856&zoom=13&time=2019-04-16&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKCi8vQXV0aG9yOiBNb25qYSBTZWJlbGEKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwocykgewogICAgbGV0IHZhbCA9IDIuNSAqICgocy5CMTEgKyBzLkIwNCktKHMuQjA4ICsgcy5CMDIpKS8oKHMuQjExICsgcy5CMDQpKyhzLkIwOCArIHMuQjAyKSk7CiAgICByZXR1cm4gWzIuNSogdmFsLCBzLkIwOCwgcy5CMTFdOwp9CmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogW3sKICAgICAgYmFuZHM6IFsKICAgICAgICAgICJCMDIiLAogICAgICAgICAgIkIwNCIsCiAgICAgICAgICAiQjA4IiwKICAgICAgICAgICJCMTEiLAogICAgICAgICAgIkIxMiIKICAgICAgXQogICAgfV0sCiAgICBvdXRwdXQ6IHsgYmFuZHM6IDMgfSAgfQp9Cgo%3D){:target="_blank"} 

## General description of the script

The barren soil script applies the Bare soil index (BSI) to the red channel, with NIR B08 applied to the green channel and SWIR band B11 applied to the blue channel. The index is multiplied to increase its brightness. It shows all vegetation in green and barren ground in red colors. Water appears black. As the script displays barren ground in red, the user can use this information to figure out the status of the crops (growing, not yet growing), detect recent deforestation or monitor droughts. It can also be used to detect landslides or determine the extent of erosion in non-vegetated areas. Unfortunately, it also highlights certain buildings, making bare ground areas difficult to separate from dwellings. It should be noted, that the result depends on season vegetation and farming.

The bare soil index for Sentinel-2: 

**BSI = ((B11 + B04) - (B08 + B02)) / ((B11 + B04) + (B08 + B02))**

## Author of the script

Monja Sebela

## Description of representative images

Barren Soil script applied to Sentinel-2 image south of Ljubljana, Slovenia.

![Barren Soil script applied to Sentinel-2 south of Ljubljana, Slovenia](fig/fig1.jpg)

## Credits

The BSI used is the following one:  

**BSI = ((SWIR2 + R)−(NIR + B)) / ((SWIR2 + R)+(NIR + B))**

It was found in this article, page 3: 

- _A Modified Bare Soil Index to Identify Bare Land Features during Agricultural Fallow-Period in Southeast Asia Using Landsat 8_. Can Trong Nguyen, Amnat Chidthaisong, Phan Kieu Diem, Lian-Zhi Huo. Land 2021, 10, 231. Page 3. URL: https://www.mdpi.com/2073-445X/10/3/231/pdf
