# NDWI Normalized Difference Water Index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=44.95167902304322&lng=12.337989807128906&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-21&atmFilter=&showDates=false&evalscript=Ly9WRVJTSU9OPTMKLy9UaGlzIHNjcmlwdCB3YXMgY29udmVydGVkIGZyb20gdjEgdG8gdjMgdXNpbmcgdGhlIGNvbnZlcnRlciBBUEkKCi8vbmR3aQp2YXIgY29sb3JSYW1wMSA9IFsKICAJWzAsIDB4RkZGRkZGXSwKICAJWzEsIDB4MDA4MDAwXQogIF07CnZhciBjb2xvclJhbXAyID0gWwogIAlbMCwgMHhGRkZGRkZdLAogIAlbMSwgMHgwMDAwQ0NdCiAgXTsKCmxldCB2aXoxID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIoY29sb3JSYW1wMSk7CmxldCB2aXoyID0gbmV3IENvbG9yUmFtcFZpc3VhbGl6ZXIoY29sb3JSYW1wMik7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICB2YXIgdmFsID0gaW5kZXgoc2FtcGxlcy5CMDMsIHNhbXBsZXMuQjA4KTsKCiAgaWYgKHZhbCA8IC0wKSB7CiAgICByZXR1cm4gdml6MS5wcm9jZXNzKC12YWwpOwogIH0gZWxzZSB7CiAgICByZXR1cm4gdml6Mi5wcm9jZXNzKE1hdGguc3FydChNYXRoLnNxcnQodmFsKSkpOwogIH0KfQoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICJCMDMiLAogICAgICAgICJCMDgiCiAgICAgIF0KICAgIH1dLAogICAgb3V0cHV0OiB7CiAgICAgIGJhbmRzOiAzCiAgICB9CiAgfQp9Cg%3D%3D){:target="_blank"}    
 - [EO Browser](https://sentinelshare.page.link/u9bq){:target="_blank"}

## General description of the script

The NDWI is used to monitor changes related to water content in water bodies. As water bodies strongly absorb light in visible to infrared electromagnetic spectrum,  NDWI uses green and near infrared bands to highlight water bodies. It is sensitive to built-up land and can result in over-estimation of water bodies. The index was proposed by McFeeters, 1996.

**NDWI = (B03 - B08) / (B03 + B08)**

Values description: Index values greater than 0.5 usually correspond to water bodies. Vegetation usually corresponds to much smaller values and built-up areas to values between zero and 0.2.

_Note: NDWI index is often used synonymously with the NDMI index, often using NIR-SWIR combination as one of the two options. NDMI seems to be consistently described using NIR-SWIR combination. As the indices with these two combinations work very differently, with NIR-SWIR highlighting differences in water content of leaves, and GREEN-NIR highlighting differences in water content of water bodies, we have decided to separate the indices on our repository as NDMI using NIR-SWIR, and NDWI using GREEN-NIR._

## Description of representative images

NDWI of Italy. Acquired on 2020-08-01.

![NDWI of Italy](fig/fig1.jpg)

NDWI of Canadian lakes. Acquired on 2020-08-05.

![NDWI of Canada](fig/fig2.jpg)

## References
Source: https://en.wikipedia.org/wiki/Normalized_difference_water_index
