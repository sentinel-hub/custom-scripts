# Mix Leaf Area Index (MixLAI)

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=34.59422&lng=46.58478&themeId=DEFAULT-THEME&datasetId=S2L2A&fromTime=2020-09-20T00%3A00%3A00.000Z&toTime=2020-09-20T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fbd86bcc0-f318-402b-a145-015f85b9427e&evalscript=dmFyIE1peExBSSA9ICgoQjA4LyhCMDQrQjExKSkrKEIwOC8oQjA0K0IxMikpKS8yLjA7IC8vIGNhbGN1bGF0ZSB0aGUgaW5kZXgKcmV0dXJuIFtNaXhMQUldCmlmIChNaXhMQUkgPCAwLjUpIHsKcmV0dXJuIFswLjMsIDAuMiwgMC43XSAKfQppZiAoTWl4TEFJIDwgMC43KSB7CnJldHVybiBbMC4yLCAwLjYsIDAuM10gCn0KaWYgKE1peExBSSA8IDEuNSkgewpyZXR1cm4gWzAuNSwgMC44LCAwLjJdIAp9CmVsc2UgewpyZXR1cm4gWzEsIDAuNCwgMF0gCn07Cg%3D%3D#custom-script){:target="_blank"} 


## General description of the script

Globally, improving remotely sensed characterization of biophysical properties of vegetation is of paramount importance for a variety of applications. Changes of Plant Leaf Area and Its Relationships with Soil Factors in the Process of Grassland Desertification. In particular, the non-destructive estimation of the Leaf Area Index (LAI) from earth observation data has been topical for decades. LAI is defined as the one-sided green leaf area per unit ground area. This script represents the leaf area index using the Sentinel 2 satellite. There are examples of this equation, but this equation uses the value of several different bands to calculate the leaf index value in a simple way.

To determine the validity of the index, 14 Exam (point) MCD15A3H product LAI data from around the world were used. The average correlation obtained is 0.594 which is a satisfactory and reassuring result. This data has been used in Iran and using another experimental equation that is the result of a research project under my management, the yields of crops such as dry and irrigated wheat, dry and irrigated barley, and rice have been well predicted.

## Details of the script

Leaf area index is one of the most important parameters in determining plant yields. On the other hand, agricultural scientists calculate this index using special hardware. But because of the global reach of the index in this method, the basis of validation is the data of MODIS product: MCD15A3H (500 M, 4 DAY).

Random data analysis has been selected from all over the world. Product data is obtained from the following address: https://lpdaacsvc.cr.usgs.gov/appeears/explore.

Pearson correlation and mean error methods were used to check the validity of the data. The average error is obtained with this method:

MAE = (ABS(MODIS - S2)/C); MAE: mean absolute error; C: count image (Picture of the same day) in the year: Sep 2019-Sep2020.

exam point of world:

long lat

-3.787585 40.089773

-4.991665 33.647475

75.28038 24.862526

24.106951 -31.276369

-82.253509 34.582171

-101.92016 22.943836

-73.503856 3.385921

149.130662 -30.375819

22.50151 45.943571

11.464104 43.512098

11.664784 51.26062

1.229418 44.669143

-122.048149 44.590588

-67.949633 -5.25761

## Author of the script

Hamid Rahimi

## Description of representative images

Exam Result

![Exam result](fig/exam_result.jpg)

Export Chart

![Export chart](fig/export_chart.jpg)

Export Image

![Export image](fig/export_image.jpg)

## References

[1] Gitelson, Anatoly A., ViÒa, AndrÈs, Arkebauer, Timothy J., Rundquist, Donald C., Keydan, Galina, Leavitt, Bryan, 2003. Remote Estimation of Leaf Area Index and Green Leaf Biomass in Maize Canopies.

[2] Lymburner, L., Beggs, P.J., Jacobson, C.R., 2000. Estimation of canopy-average surface-specific leaf area using Landsat TM data. Photogramm. Eng. Remote Sens. 66, 183ñ191.

[3] Mikeladze G, Gavashelishvili A, Akobia I, Metreveli V (2020). Estimation of forest cover change using Sentinel-2 multi-spectral imagery in Georgia (the Caucasus). iForest 13: 329-335. - DOI: 10.3832/ifor3386-013.

[4] Roya Mourad, Hadi Jaafar, Martha Anderson, Feng Gao. (2020) Assessment of Leaf Area Index Models Using Harmonized Landsat and Sentinel-2 Surface Reflectance Data over a Semi-Arid Irrigated Landscape. Remote Sensing 12:19 pages 3121.

## Credits

The present script is the result of combining and simplifying the previous methods. But the initial idea of the script was based on the following basic method:
Lymburner, L., Beggs, P.J., Jacobson, C.R., 2000. Estimation of canopy-average surface-specific leaf area using Landsat TM data. Photogramm. Eng. Remote Sens. 66, 183ñ191.