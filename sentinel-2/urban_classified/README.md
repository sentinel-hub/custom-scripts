---
title: Urban Classified Script
parent: Sentinel-2
grand_parent: Sentinel
layout: script
permalink: /sentinel-2/urban_classified/
nav_exclude: true
---


## General description of the script

The script uses the NDWI, NDVI, [BarrenSoil](https://custom-scripts.sentinel-hub.com/sentinel-2/barren_soil/){:target="_blank"} and B11 to differntiate between water, built up areas, barren areas and vegetated areas. In the script, water is colored blue, vegetation green, built up areas white, barren soil brown and all other pixels dark green. 
All pixels with NDWI values greater than 0.2 are considered to be water; all other pixels with B11 values greater than 0.8 OR NDVI values lower than 0.1 to be built up; all other pixels with NDVI values greater than 0.2 to be vegetation (returnint NDVI in the green channel) and all other pixels to be barren soil or else (returnint BareSoil index in the red channel and dark green in the green channel.). 
The script does a good job (although not perfect) at separating barren soil from buildings, which is often an issuewith urban scripts. It is thus most valuable in arid regions, where most other visualizations fail to distinguish buildings from the surrounding sand or soil. The script fails at differentiating between buildings and vegetation in dense alternating between houses and yards in for example, suburbs of Baltimore. 

## Examples 

### Temara

Urban Classified script (right) in Temara, Morocco. This example showcases the usefulness of the script in differentiating bare ground from buildings. 

 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=33.8610&lng=-6.9688&zoom=12&time=2019-08-15&preset=CUSTOM&datasource=Sentinel-2%20L2A&layers=B01,B02,B03&evalscript=dmFyIE5EV0k9aW5kZXgoQjAzLEIwOCk7IAp2YXIgTkRWST1pbmRleChCMDgsIEIwNCk7CnZhciBCYXJlU29pbD0yLjUgKigoQjExICsgQjA0KS0oQjA4ICsgQjAyKSkvKChCMTEgKyBCMDQpKyhCMDggKyBCMDIpKTsKIAppZiAoTkRXSSA%2BIDAuMikgewogcmV0dXJuIFswLCAwLjUsIDFdCn0KaWYoKEIxMT4wLjgpfHwoTkRWSTwwLjEpKXsKICByZXR1cm5bMSwxLDFdCn0KaWYgKE5EVkk%2BMC4yKXsKICByZXR1cm4gWzAsIDAuMypORFZJLCAwXQp9CmVsc2UgewogcmV0dXJuIFtCYXJlU29pbCwgMC4yLCAwXQp9){:target="_blank"}  

![Tamara](fig/fig1.jpg)

### Baltimore

Urban Classified script (right) in Baltimore, USA. This example showcases the shortcomings of the script in differentiating buildings from vegetation in suburbs of Baltimore. 

 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=39.3064&lng=-76.6193&zoom=12&time=2019-09-08&preset=CUSTOM&datasource=Sentinel-2%20L2A&layers=B01,B02,B03&evalscript=dmFyIE5EV0k9aW5kZXgoQjAzLEIwOCk7IAp2YXIgTkRWST1pbmRleChCMDgsIEIwNCk7CnZhciBCYXJlU29pbD0yLjUgKigoQjExICsgQjA0KS0oQjA4ICsgQjAyKSkvKChCMTEgKyBCMDQpKyhCMDggKyBCMDIpKTsKIAppZiAoTkRXSSA%2BIDAuMikgewogcmV0dXJuIFswLCAwLjUsIDFdCn0KaWYoKEIxMT4wLjgpfHwoTkRWSTwwLjEpKXsKICByZXR1cm5bMSwxLDFdCn0KaWYgKE5EVkk%2BMC4yKXsKICByZXR1cm4gWzAsIDAuMypORFZJLCAwXQp9CmVsc2UgewogcmV0dXJuIFtCYXJlU29pbCwgMC4yLCAwXQp9){:target="_blank"} 
 
![Baltimore](fig/fig2.jpg)

### Taizhou

Urban Classified script (right) in Taizhou, China. 

 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=32.4481&lng=119.9824&zoom=11&time=2019-12-30&preset=CUSTOM&datasource=Sentinel-2%20L2A&layers=B01,B02,B03&evalscript=dmFyIE5EV0k9aW5kZXgoQjAzLEIwOCk7IAp2YXIgTkRWST1pbmRleChCMDgsIEIwNCk7CnZhciBCYXJlU29pbD0yLjUgKigoQjExICsgQjA0KS0oQjA4ICsgQjAyKSkvKChCMTEgKyBCMDQpKyhCMDggKyBCMDIpKTsKIAppZiAoTkRXSSA%2BIDAuMikgewogcmV0dXJuIFswLCAwLjUsIDFdCn0KaWYoKEIxMT4wLjgpfHwoTkRWSTwwLjEpKXsKICByZXR1cm5bMSwxLDFdCn0KaWYgKE5EVkk%2BMC4yKXsKICByZXR1cm4gWzAsIDAuMypORFZJLCAwXQp9CmVsc2UgewogcmV0dXJuIFtCYXJlU29pbCwgMC4yLCAwXQp9){:target="_blank"}  
 
![Taizhou](fig/fig3.jpg)

## Author of the script
Monja Šebela
