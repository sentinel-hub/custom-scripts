# OLCI Natural Colours with Sigmoid Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://sentinelshare.page.link/LbAe){:target="_blank"} 


## General description of the script

This script provides a natural colour visualization of Sentinel-3 OLCI with a combination of bands B08, B06, B04. A modified sigmoid function is used in the gain formula to preserve some of the cloud brightness dynamic with a more progressive saturation. TOA reflectance offsets are subtracted to red, green, blue bands to compensate for the Rayleigh diffusion.

## Details of the script

Lambda correspond to the steepness of the curve of the logistic/sigmoid function expressed as k in [Logistic function](https://en.wikipedia.org/wiki/Logistic_function){:target="_blank"}. Lambda value of 7 is a compromise. Lambda value can be adjusted to lower values (e.g. 3, 4, 5) to catch more of clouds brightness dynamic. Higher values of Lambda (e.g. 8, 9, 10) will result in brighter images more adapted to dark vegetated areas. Note that in this case clouds brightness will saturate.

## Author of the script

Jérôme LOUIS

## Description of representative images

1) The graph shows the shape of the modified sigmoid function for different value of Lambda (steepness of the curve).
![Figure - Modified function](fig/Figure_Modified_Sigmoid.png)

2) The image of California acquired on 24/01/2020 used lambda = 7.
![The script example 1](fig/2020-01-24_Sentinel-3_OLCI_Custom_script_California.jpg)

3) The image of Madagascar acquired on 25/03/2019 used lambda = 9.
![The script example 2](fig/2019-03-25_Sentinel-3_OLCI_Custom_script_Madagascar.jpg)

4) The image of France acquired on 26/02/2019 used lambda = 7.
![The script example 3](fig/2019-02-26_Sentinel-3_OLCI_Custom_script_France.jpg)

5) The image of Typhoon Krosa in Pacific, south of Japan, acquired on 13/08/2019 used lambda = 4.
![The script example 4](fig/2019-08-13_Sentinel-3_OLCI_Custom_script_Typhoon.jpg)

## References

[1] Logistic/Sigmoid function is defined in [Logistic function](https://en.wikipedia.org/wiki/Logistic_function){:target="_blank"}  

## Credits

I would like to thank my wife Ms KEN Soleakhena for her suggestion of using a modified sigmoid function. 
