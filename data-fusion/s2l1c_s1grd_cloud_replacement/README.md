# Sentinel-2 with cloudy parts replaced by Sentinel-1

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

{% raw %}
## Evaluate and visualize
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=44.5892&lng=33.4664&zoom=11&time=2020-05-11T00:00:00Z/2020-05-11T23:59:59Z&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=Ly8gVkVSU0lPTj0zCi8vIFNBUiBkYXRhIHN1YnN0aXR1dGlvbiBmb3IgY2xvdWRlZCBTZW50aW5lbC0yIGltYWdlcyBWMS4wLjAKLy8gVHdpdHRlcjogUGllcnJlIE1hcmt1c2UgKEBwaWVycmVfbWFya3VzZSkKLy8gQ0MgQlkgNC4wIEludGVybmF0aW9uYWwgLSBodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wLwoKdmFyIHNldHVwID0gKCkgPT4gKHsKICBpbnB1dDogWwogICAge2RhdGFzb3VyY2U6ICJzMmwxYyIsIGJhbmRzOlsiQjAyIiwgIkIwMyIsICJCMDQiLCJDTE0iLCAiQ0xQIl0sIHVuaXRzOiAiUkVGTEVDVEFOQ0UiLCBtb3NhaWNraW5nOiAiT1JCSVQifSwKICAgIHtkYXRhc291cmNlOiAiczFncmQiLCBiYW5kczpbIlZWIiwgIlZIIl0sIHVuaXRzOiAiUkVGTEVDVEFOQ0UiLCBtb3NhaWNraW5nOiAiT1JCSVQifSwKICBdLAogIG91dHB1dDogWwogICAgeyBpZDogImRlZmF1bHQiLCBiYW5kczogMywgc2FtcGxlVHlwZTogU2FtcGxlVHlwZS5BVVRPIH0KICBdLAp9KQoKZnVuY3Rpb24gZXZhbHVhdGVQaXhlbChzYW1wbGVzLCBpbnB1dERhdGEsIGlucHV0TWV0YWRhdGEsIGN1c3RvbURhdGEsIG91dHB1dE1ldGFkYXRhKSB7CiB2YXIgUzJMMUMgPSBzYW1wbGVzLnMybDFjWzBdOwogdmFyIFMxID0gc2FtcGxlcy5zMWdyZFswXTsKIGxldCBTSSA9IDU0MjcyOyAvLyBZZXMsIEknbSB0aGF0IG9sZC4uLiAKIGxldCBXQVQgPSAyNTsgLy8gV2F0ZXIgVGhyZXNob2xkIGZvciBTQVIKIGxldCBDTFAgPSBTMkwxQy5DTFAgLyAyLjU1OyAvLyBDbG91ZCBQcm9wYWJpbGl0eQogbGV0IENMUFQgPSA3MDsgLy8gQ2xvdWQgUHJvcGFiaWx0eSBUaHJlc2hvbGQgaW4gcGVyY2VudAogCiAKICAKaWYgKCAoQ0xQID4gQ0xQVCAmJiBTMS5WVi9TMS5WSCA8PSBXQVQpKSAKIHsKICAgIHJldHVybiB7CiAgICAgIGRlZmF1bHQ6IFtTMS5WViozLjAsUzEuVlYqMS4xK1MxLlZIKjguNzUsUzEuVkgqMS43NV0KICAgIH19CiAgCiAgaWYgKCAoQ0xQID4gQ0xQVCAmJiBTMS5WVi9TMS5WSCA%2BIFdBVCkpIAogewogICAgcmV0dXJuIHsKICAgICAgZGVmYXVsdDogW1MxLlZWKjEsUzEuVlYqOCwwLjUrUzEuVlYqMytTMS5WSCoyMDAwXQogICAgfX0KCiAgCiAgICBsZXQgdmFsID0gWzMqUzJMMUMuQjA0LCAzKlMyTDFDLkIwMywgMypTMkwxQy5CMDJdOwogIHJldHVybiB7CiAgICBkZWZhdWx0OiB2YWwKICB9Cn0%3D&dataFusion={%22enabled%22:true,%22supplementalDatasets%22:{%22AWSEU_S1GRD%22:{%22enabled%22:true,%22isCustomTimespan%22:true},%22AWS_S2L2A%22:{%22enabled%22:false,%22isCustomTimespan%22:true}}}){:target="_blank"}
{% endraw %}

## General description
The script uses cloud masks to identify cloudy areas and replace the data with terrain visualisation based on Sentinel-1 data. 

## Contributors:
 - Pierre Markuse, (Twitter: @pierre_markuse)

## License

 - [CC BY 4.0 International](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
