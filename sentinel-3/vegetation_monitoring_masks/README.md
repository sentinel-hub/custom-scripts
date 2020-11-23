# Vegetation and Land Monitoring with Cloud Masks

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Author of the script**
By TIZNEGAR Startup Co, 
www.tiznegar.com

## Evaluate and Visualize

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=8&lat=37.45306&lng=48.8562&themeId=DEFAULT-THEME&datasetId=S3OLCI&fromTime=2020-06-18T00%3A00%3A00.000Z&toTime=2020-06-18T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2F82f84fab-9b1c-4322-beeb-207b0f05afef&evalscript=Ly8gU2VudGluZWwtMyBPTENJIC0gVmVnZXRhdGlvbiBtb25pdG9yaW5nCi8vYnkgVElaTkVHQVIgc3RhcnR1cCBjbwovL3d3dy50aXpuZWdhci5jb20KCi8vVmVnZXRhdGlvbiBtb25pdG9yaW5nIGluZGV4IGZvciBPTENJIFNlbnRpbmVsIDMgT0xDSShWTUkzKQoKdmFyIFZNSTMgPSAoQjE3IC0gQjA4KSAvIChCMTcgKyBCMDgpOwoKLy9DbG91ZCBtYXNrCgp2YXIgTkdEUiA9IGluZGV4KEIwNCwgQjA2KTsKdmFyIENNICA9IChCMDQgLSAwLjIpIC8gKDAuNSAtIDAuMik7CmlmIChDTSA%2BIDEuOCkgeyAKICAgIHJldHVybiBbMTAgKiBCMDMsIDEwICogQjAyLCAxMCAqIEIwMSBdOwp9CgppZiAoQ00gPiAwICYmIE5HRFI%2BLjE1KSB7IAogICAgcmV0dXJuIFsxMCAqIEIwMyAgLCAxMCAqIEIwMiwgMTAgKiBCMDFdOwp9CgoKLy9Zb3UgY2FuIHNlZSBvbmx5IHRoZSBjaGFuZ2VzIGluIHRoZSB2ZWdldGF0aW9uIHlvdSB3YW50IGJ5IGNoYW5naW5nIHRoZSBpbnRlcnZhbCBiZWxvdwoKCmlmIChWTUkzID4gWyAtMSBdICYmIFZNSTM8IFsgMSBdKSB7IAogICAgcmV0dXJuIGNvbG9yQmxlbmQgICAKICAgIChWTUkzLAkgICAgICAgICAgICAKICAgICAgICBbIC0uOCwgLS4xLCAtLjAyLCAwLCAwLjAxLCAuMDYsIC4xLCAuMiwgLjMsIC40LCAuNSwgLjYsIC43LCAuOCwgLjldLCAKICAgICAgICBbICAgICAKICAgICAgICAgICAgWzAsIC4yLCAuNV0sCiAgICAgICAgICAgIFswLCAuNiwgLjhdLAogICAgICAgICAgICBbLjgsIC44LCAuOF0sCiAgICAgICAgICAgIFsuOSwgLjksIC45XSwKICAgICAgICAgICAgWzEsIDEsIDFdLAogICAgICAgICAgICBbLjUsLjMsLjJdLAogICAgICAgICAgICBbLjYzLC4zMiwuMThdLAogICAgICAgICAgICBbMSwuNDUsLjA1XSwKICAgICAgICAgICAgWy45LCAxLCAwXSwKICAgICAgICAgICAgWzAsIC44LDBdLAogICAgICAgICAgICBbMCwgLjUsIDBdLAogICAgICAgICAgICBbMCwgLjQsIDBdLAogICAgICAgICAgICBbMCwgLjMsIDBdLAogICAgICAgICAgICBbMCwgLjIsIDBdLAogICAgICAgICAgICBbMCwgLjEsIDBdLAoKICAgICAgXSk7Cn0KZWxzZSB7CiByZXR1cm4gWzIuNSpCMDgsMi41KkIwNiwyLjUqQjA0XQp9#custom-script)

## General description
Vegetation monitoring index for Sentinel 3 OLCI (VMI3) has the same functionality as NDVI, using NIR* and RED wavelengths in a normalized difference index. The script displays the vegetation index with continuous colour scale and uses cloud masks to display clouds and snow in white. It also provides a preprepared conditional statement for land classification, by only changing the visualized range. 

The index is calculated as:

**VMI3 = (B17 - B08) / (B17 + B08)**

The range of the index is between -1 and 1: 

**-1 ≤ VMI3 ≤ 1**

The index shows a very good separation of vegetation, that can be used to monitor changes in periodic studies. Dense vegetation, high growth and good quality are displayed in bold green, and low and low quality vegetation in pale green. Gray areas indicate salinity and desert, white areas are cloud and snow masks, and blue values indicate water.

*_As the Sentinel-2 NIR equivalent with a central wavelength 832.8 nm is not available for Senitnel-3 OLCI, band 17, (with a central wavelength of 865 nm) was used for the NIR part of the equation. Band 17 belongs into narrow near infrared range, similar to B8A in Sentinel-2._

## Description of representative images

![A1](fig/fig1.jpg)
[Show VMI3 index of Iran and show Gilan province and Urmia lake](https://apps.sentinel-hub.com/eo-browser/?zoom=8&lat=37.45306&lng=48.8562&themeId=DEFAULT-THEME&datasetId=S3OLCI&fromTime=2020-06-18T00%3A00%3A00.000Z&toTime=2020-06-18T23%3A59%3A59.999Z&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2F82f84fab-9b1c-4322-beeb-207b0f05afef&evalscript=Ly8gU2VudGluZWwtMyBPTENJIC0gVmVnZXRhdGlvbiBtb25pdG9yaW5nCi8vYnkgVElaTkVHQVIgc3RhcnR1cCBjbwovL3d3dy50aXpuZWdhci5jb20KCi8vVmVnZXRhdGlvbiBtb25pdG9yaW5nIGluZGV4IGZvciBPTENJIFNlbnRpbmVsIDMgT0xDSShWTUkzKQoKdmFyIFZNSTMgPSAoQjE3IC0gQjA4KSAvIChCMTcgKyBCMDgpOwoKLy9DbG91ZCBtYXNrCgp2YXIgTkdEUiA9IGluZGV4KEIwNCwgQjA2KTsKdmFyIENNICA9IChCMDQgLSAwLjIpIC8gKDAuNSAtIDAuMik7CmlmIChDTSA%2BIDEuOCkgeyAKICAgIHJldHVybiBbMTAgKiBCMDMsIDEwICogQjAyLCAxMCAqIEIwMSBdOwp9CgppZiAoQ00gPiAwICYmIE5HRFI%2BLjE1KSB7IAogICAgcmV0dXJuIFsxMCAqIEIwMyAgLCAxMCAqIEIwMiwgMTAgKiBCMDFdOwp9CgoKLy9Zb3UgY2FuIHNlZSBvbmx5IHRoZSBjaGFuZ2VzIGluIHRoZSB2ZWdldGF0aW9uIHlvdSB3YW50IGJ5IGNoYW5naW5nIHRoZSBpbnRlcnZhbCBiZWxvdwoKCmlmIChWTUkzID4gWyAtMSBdICYmIFZNSTM8IFsgMSBdKSB7IAogICAgcmV0dXJuIGNvbG9yQmxlbmQgICAKICAgIChWTUkzLAkgICAgICAgICAgICAKICAgICAgICBbIC0uOCwgLS4xLCAtLjAyLCAwLCAwLjAxLCAuMDYsIC4xLCAuMiwgLjMsIC40LCAuNSwgLjYsIC43LCAuOCwgLjldLCAKICAgICAgICBbICAgICAKICAgICAgICAgICAgWzAsIC4yLCAuNV0sCiAgICAgICAgICAgIFswLCAuNiwgLjhdLAogICAgICAgICAgICBbLjgsIC44LCAuOF0sCiAgICAgICAgICAgIFsuOSwgLjksIC45XSwKICAgICAgICAgICAgWzEsIDEsIDFdLAogICAgICAgICAgICBbLjUsLjMsLjJdLAogICAgICAgICAgICBbLjYzLC4zMiwuMThdLAogICAgICAgICAgICBbMSwuNDUsLjA1XSwKICAgICAgICAgICAgWy45LCAxLCAwXSwKICAgICAgICAgICAgWzAsIC44LDBdLAogICAgICAgICAgICBbMCwgLjUsIDBdLAogICAgICAgICAgICBbMCwgLjQsIDBdLAogICAgICAgICAgICBbMCwgLjMsIDBdLAogICAgICAgICAgICBbMCwgLjIsIDBdLAogICAgICAgICAgICBbMCwgLjEsIDBdLAoKICAgICAgXSk7Cn0KZWxzZSB7CiByZXR1cm4gWzIuNSpCMDgsMi41KkIwNiwyLjUqQjA0XQp9#custom-script)

**The range of VMI3 index display can be changed by the user. For example:**

- `if (VMI3 > [ 0.4 ] && VMI3< [ 1 ])`

![A2](fig/fig2.jpg)
In this case, only the areas with the VMI3 index in range of 0.4 to 1 are visualized in a continuous color scale, highlighting Hyrcanian forests in Gilan and agricultural areas around Lake Urmia with green colors. Other areas are returned in true color, with cloud masks in white. [Show in EO Browser.](https://sentinelshare.page.link/6T81)

- `if (VMI3 > [ -1 ] && VMI3< [ 0 ])`

![A3](fig/fig3.jpg)
In this image, only areas with an VMI3 index range of 0.0 to -1 are visualized in a continuous color scale, displaying water areas in blue colors. The water levels of Lake Urmia and Sefidrud Dam in Gilan province are well visible. Other areas are returned in true color, with cloud masks in white. [Show in EO Browser.](https://sentinelshare.page.link/vysg)


