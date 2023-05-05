---
permalink: /sentinel-1/water_surface_roughness_visualization/
nav_exclude: true
---

# Water Surface Roughness Visualization 
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
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-1.1912&lng=116.8719&zoom=11&time=2018-04-01&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=ICAgIC8vIFdhdGVyIFN1cmZhY2UgUm91Z2huZXNzIFZpc3VhbGl6YXRpb24gCi8vIEF1dGhvcjogQW5uYW1hcmlhIEx1b25nbyAoVHdpdHRlcjogQGFubmFtYXJpYV84NCwgaHR0cDovL3d3dy5saW5rZWRpbi5jb20vaW4vYW5uYW1hcmlhLWx1b25nby1SUykgCi8vIExpY2Vuc2U6IENDIEJZIDQuMCBJbnRlcm5hdGlvbmFsIC0gaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC8gCgp2YXIgdmFsID0gTWF0aC5sb2coMC4wNS8oMC4wMTgrVlYqMS41KSk7IApyZXR1cm4gW3ZhbF07IA%3D%3D){:target="_blank"}   

## Description
The script visualizes the Water Surface Roughness from Sentinel-1 data. It helps in maritime monitoring (ship monitoring, oil pollution monitoring, sea currents, ...).

## Contributors:
- [Annamaria Luongo](https://twitter.com/annamaria_84){:target="_blank"}   

## Examples:
### Oil Spill Balikpapan Indonesia, 1/4/2018  
- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-1.2304&lng=116.8942&zoom=11&time=2018-04-01&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFdhdGVyIHN1cmZhY2Ugcm91Z2huZXNzCnZhbCA9IE1hdGgubG9nKDAuMDUvKDAuMDE4K1ZWKjEuNSkpOwpyZXR1cm4gW3ZhbF07){:target="_blank"}   

![Oil Spill Balikpapan Indonesia, 1/4/2018](fig/oil1.png)

### Oil Spill Grande America, 19/3/2019
- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=45.6409&lng=-5.0050&zoom=10&time=2019-03-19&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFdhdGVyIHN1cmZhY2Ugcm91Z2huZXNzCnZhbCA9IE1hdGgubG9nKDAuMDUvKDAuMDE4K1ZWKjEuNSkpOwpyZXR1cm4gW3ZhbF07 ){:target="_blank"}   

![Oil Spill Grande America, 19/3/2019](fig/oil2.png)

### Adriatic Sea Currents  

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=44.823&lng=13.646&zoom=9&time=2018-07-07&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gc2NyaXB0IFdhdGVyIHN1cmZhY2Ugcm91Z2huZXNzCnZhbCA9IE1hdGgubG9nKDAuMDUvKDAuMDE4K1ZWKjEuNSkpOwpyZXR1cm4gW3ZhbF07 ){:target="_blank"}   

![Adriatic Sea Currents ](fig/currents.png)
