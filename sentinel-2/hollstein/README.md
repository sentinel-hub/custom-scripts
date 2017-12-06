# Clouds classification script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=46.43880327782999&lng=14.775924682617188&zoom=11&maxcc=100&time=2015-01-01%7C2017-10-09&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/sentinel-2/hollstein/script.js){:target="_blank"}
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscript=ZnVuY3Rpb24gUyAoYSwgYikgeyByZXR1cm4gYSAtIGIgfTsKZnVuY3Rpb24gUiAoYSwgYikgeyByZXR1cm4gYSAvIGIgfTsKCmxldCBnYWluID0gMi41OwoKbGV0IG5hdHVyYWxDb2xvdXIgPSBbQjA0LCBCMDMsIEIwMl0ubWFwKGEgPT4gZ2FpbiAqIGEpOwoKbGV0IENMRUFSICA9IG5hdHVyYWxDb2xvdXI7CmxldCBTSEFET1cgPSBuYXR1cmFsQ29sb3VyOwpsZXQgV0FURVIgID0gWzAuMSwwLjEsMC43XTsKbGV0IENJUlJVUyA9IFswLjgsMC4xLDAuMV07CmxldCBDTE9VRCAgPSBbMC4zLDAuMywxLjBdOwpsZXQgU05PVyAgID0gWzEuMCwwLjgsMC40XTsKCnJldHVybiAoQjAzIDwgMC4zMTkpCj8gKEI4QSA8IDAuMTY2KQogICAgPyAoUyhCMDMsQjA3KSA8IDAuMDI3KQogICAgICAgID8gKFMoQjA5LEIxMSkgPCAtMC4wOTcpID8gQ0xFQVIgOiBTSEFET1cKICAgICAgICA6IChTKEIwOSxCMTEpIDwgMC4wMjEpID8gV0FURVIgOiBTSEFET1cKICAgIDogKFIoQjAyLEIxMCkgPCAxNC42ODkpCiAgICAgICAgPyAoUihCMDIsQjA5KSA8IDAuNzg4KSA%2FIENMRUFSIDogQ0lSUlVTCiAgICAgICAgOiBDTEVBUgo6IChSKEIwNSxCMTEpIDwgNC4zMykKICAgID8gKFMoQjExLCBCMTApIDwgMC4yNTUpCiAgICAgICAgPyAoUyhCMDYsIEIwNykgPCAtMC4wMTYpID8gQ0xPVUQgOiBDSVJSVVMKICAgICAgICA6IChCMDEgPCAwLjMpID8gQ0xFQVIgOiBDTE9VRAogICAgOiAoQjAzIDwgMC41MjUpCiAgICAgICAgPyAoUihCMDEsIEIwNSkgPCAxLjE4NCkgPyBDTEVBUiA6IFNIQURPVwogICAgICAgIDogU05PVzsK%3D){:target="_blank"}

## General description

A paper about cloud detection [1], shows a fairly complex classification decision tree (figure 8 in the article), based on derived feature space resulting in 91% of correctly classified spectra.

![The decision tree from [1][1]](fig/tree.png)

The colours correspond to the colours from the article, apart from the colours for clear and shadow, which are made into natural (true) colour from red, green and blue bands.


## References

[1] A. Hollstein et al., [Ready-to-Use Methods for the Detection of Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels in Sentinel-2 MSI Images](http://www.mdpi.com/2072-4292/8/8/666). Remote Sensing (2016). 10.3390/rs8080666
