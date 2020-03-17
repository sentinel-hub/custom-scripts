# Barren Soil Script

<a href="#" id='togglescript'>Show</a> script or [download](barren_soil_script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=45.980084808039955&lng=14.508562088012695&zoom=13&preset=CUSTOM&layers=B01,B02,B03&maxcc=24&gain=1.0&gamma=1.0&time=2018-10-01%7C2019-04-16&atmFilter=&showDates=false&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKCi8vQXV0aG9yOiBNb25qYSBTZWJlbGEKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwocykgewogICAgbGV0IHZhbCA9IDIuNSAqICgocy5CMTEgKyBzLkIwNCktKHMuQjA4ICsgcy5CMDIpKS8oKHMuQjExICsgcy5CMDQpKyhzLkIwOCArIHMuQjAyKSk7CiAgICByZXR1cm4gWzIuNSogdmFsLCBzLkIwOCwgcy5CMTFdOwp9CmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogW3sKICAgICAgYmFuZHM6IFsKICAgICAgICAgICJCMDIiLAogICAgICAgICAgIkIwNCIsCiAgICAgICAgICAiQjA4IiwKICAgICAgICAgICJCMTEiLAogICAgICAgICAgIkIxMiIKICAgICAgXQogICAgfV0sCiAgICBvdXRwdXQ6IHsgYmFuZHM6IDMgfSAgfQp9Cgo%3D){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=45.98008&lng=14.50856&zoom=13&time=2019-04-16&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKCi8vQXV0aG9yOiBNb25qYSBTZWJlbGEKCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwocykgewogICAgbGV0IHZhbCA9IDIuNSAqICgocy5CMTEgKyBzLkIwNCktKHMuQjA4ICsgcy5CMDIpKS8oKHMuQjExICsgcy5CMDQpKyhzLkIwOCArIHMuQjAyKSk7CiAgICByZXR1cm4gWzIuNSogdmFsLCBzLkIwOCwgcy5CMTFdOwp9CmZ1bmN0aW9uIHNldHVwKCkgewogIHJldHVybiB7CiAgICBpbnB1dDogW3sKICAgICAgYmFuZHM6IFsKICAgICAgICAgICJCMDIiLAogICAgICAgICAgIkIwNCIsCiAgICAgICAgICAiQjA4IiwKICAgICAgICAgICJCMTEiLAogICAgICAgICAgIkIxMiIKICAgICAgXQogICAgfV0sCiAgICBvdXRwdXQ6IHsgYmFuZHM6IDMgfSAgfQp9Cgo%3D){:target="_blank"} 

## General description of the script

The bare ground index is the Bare soil index, applied to the red channel. It shows all vegetation in green and the bare ground in red. It could be useful for soil mapping since it informs the user where he can do remote sensing analysis on bare ground, where crops were collected or where crops are not growing, the location of landslides or the extent of erosion in non-vegetated areas. Unfortunately, it also highlights certain buildings, making bare ground areas difficult to separate from dwellings. It should be noted, that the result depends on season vegetation and farming.

## Author of the script

Monja Sebela

## Description of representative images

Barren Soil script applied to Sentinel-2 image south of Ljubljana, Slovenia.

![Barren Soil script applied to Sentinel-2 south of Ljubljana, Slovenia](fig/fig1.jpg)

## Credits

For the Barren soil script the Barren soil index was used.
