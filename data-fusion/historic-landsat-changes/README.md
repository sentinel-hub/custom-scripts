# Historic NDVI Changes with Landsat 4-5TM and Landsat 8
  
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.  
<div id='script_view' style="display:none">  
{% highlight javascript %}  
{% include_relative script.js %}  
{% endhighlight %}  
</div>  

## Author: 
Monja B. Šebela
  
## Evaluate and visualize  
 - [EO Browser](https://sentinelshare.page.link/4WrR)
  
## General description of the script  
  
This script uses data fusion to compare historic with modern imagery by combining Landsat 4-5 TM collection with Landsat 8. NDVI is calculated for both collections, and returned in RGB channels to display changes. In the script output, the newer Landsat 8 NDVI is displayed in red and blue channels, and the older Landsat 4-5 TM NDVI in the green channel. The resulting RGB image shows green, where there was no vegetation cover change, and pink indicates change. The resulting image indicates changes in vegetation cover, which can give the user information on urban growth, expansion of agricultural land, deforestation, etc. Note that dates should be carefully selected, so that data is available, and that both images are taken in the same season, prefferably as close to the same day in a year as possible, to avoid changes due to seasonal vegetation changes. 

_Note that in some areas, Landsat 4-5TM images are not georeferenced correctly, and they do not align with Landsat 8 imagery. The script cannot be used in those areas._

## Description of representative images  
  
**Urbanization in Dakar**
On this image we can observe growth of urban areas in Dakar (dark purple), and the expansion of agricultural land (lighter purple), between 1990 and 2017. Green areas indicate that no change in vegetation cover occured. For the earlier image, Landsat 4-5 TM (acquired on 1990-12-05) was used, and for the later image, Landsat 8 (acquired on 2017-12-15) was used.  

![Dakar](fig/fig1.png) 
