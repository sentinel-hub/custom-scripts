
# Urban detection with Sentinel-1 and Sentinel-2
  
<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.  
<div id='script_view' style="display:none">  
{% highlight javascript %}  
{% include_relative script.js %}  
{% endhighlight %}  
  
</div>  

# Authors

**Author of the datafusion script:**
- Monja B. Šebela

**Authors of the DEM contour line script:**
- Marko Repše
- Peter Gabrovšek
  
## Evaluate and visualize  
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=12&lat=40.60718&lng=-7.52924&themeId=DEFAULT-THEME&datasetId=AWS_L8L1C&fromTime=2020-03-05T00%3A00%3A00.000Z&toTime=2020-06-30T23%3A59%3A59.000Z&visualizationUrl=https%3A%2F%2Fservices-uswest2.sentinel-hub.com%2Fogc%2Fwms%2F950dce10-3931-4504-9376-f64772c7d151&evalscript=Ly9WRVJTSU9OPTMKdmFyIHNldHVwID0gKCkgPT4gKHsKICBpbnB1dDogWwogICAge2RhdGFzb3VyY2U6ICJsOGwxYyIsIGJhbmRzOlsiQjA0IiwgIkIwMyIsICJCMDIiXX0sCiAgICB7ZGF0YXNvdXJjZTogImRlbSIsIGJhbmRzOlsiREVNIl19XSwKICBvdXRwdXQ6IFsKICAgIHtpZDogImRlZmF1bHQiLCBiYW5kczogM30KICBdLAp9KTsKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzLCBpbnB1dERhdGEsIGlucHV0TWV0YWRhdGEsIGN1c3RvbURhdGEsIG91dHB1dE1ldGFkYXRhKXsgCnZhciBMOCA9IHNhbXBsZXMubDhsMWNbMF0KdmFyIERFTU0gPSBzYW1wbGVzLmRlbVswXQp2YXIgREVNID0gREVNTS5ERU0KCnZhciBkID0gREVNOwppZiAoZCAlIDUwIDwgNCkgewogIHJldHVybnsKICAgIGRlZmF1bHQ6IFsxLDEsMV0KICB9Cn0KZWxzZXsKICByZXR1cm57CiAgICBkZWZhdWx0OiBbKDUqTDguQjA0KS0wLjIsICg1Kkw4LkIwMyktMC4yLCAoNSpMOC5CMDIpLTAuMl0KICB9Cn0KfQ%3D%3D){:target="_blank"}
 When EO Browser loads, switch to **code view**, check the **Use additional datasets (advanced)** and **DEM** boxes. Finnally press **Refresh**.
  
## General description of the script  
  
This script uses DEM to calculate contour lines and displays them over Landsat-8 true color image. The contour lines can be modified in color, interval and width. 

## Description of representative images  
  
**Contour lines over L8**
![contour](fig/fig1.jpg) 



