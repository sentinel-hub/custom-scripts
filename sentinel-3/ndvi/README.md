
# Normalized Difference Vegetation Index, NDVI  

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.  
<div id='script_view' style="display:none">  
{% highlight javascript %}  
{% include_relative script.js %}  
{% endhighlight %}  

</div>  

## Evaluate and visualize  
 - [EO Browser](https://sentinelshare.page.link/nZQM){:target="_blank"}   


## General description of the script  

The well known and widely used NDVI is a simple, but effective index for quantifying green vegetation. It normalizes green leaf scattering in Near Infra-red wavelengths with chlorophyll absorption in red wavelengths.

The value range of the NDVI is -1 to 1. Negative values of NDVI (values approaching -1) correspond to water. Values close to zero (-0.1 to 0.1) generally correspond to barren areas of rock, sand, or snow. Low, positive values represent shrub and grassland (approximately 0.2 to 0.4), while high values indicate temperate and tropical rainforests (values approaching 1). It is a good proxy for live green vegetation; see [1] for details.

The normalized difference vegetation index, abbreviated NDVI, is calculated using near infrared and red wavelengths. 

**NDVI = (NIR - RED) / (NIR + RED)**

For Sentinel-3 OLCI, the NDVI is calculated using NIR band 17 and Red band 8: 

**NDVI = (B17 - B08) / (B17 + B08)**


## Description of representative images  

NDVI of France, acquired on 24 July 2022.  
![NDVI](fig/figure1.png)   
 
## References
 [1] Wikipedia, [Normalized Difference Vegetation Index
](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index). Accessed on October 4th 2017.

## Contributors:  
William Ray
