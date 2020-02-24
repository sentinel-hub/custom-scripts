# Normalized Difference Chlorophyll Index

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

- [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=42.2267&lng=11.9675&zoom=11&time=2019-12-10&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B01,B02,B03&evalscript=ICAgICAgLyoKTm9ybWFsaXplZCBkaWZmZXJlbmNlIGNobG9yb3BoeWwgaW5kZXgKaHR0cHM6Ly9wZGZzLnNlbWFudGljc2Nob2xhci5vcmcvMmZiYS9jYWExNGFkYjQzZDViYzhkMmRkMjc0MzA0ZjYwODE0ZDkzM2MucGRmCmh0dHBzOi8vd3d3LnNjaWVuY2VkaXJlY3QuY29tL3NjaWVuY2UvYXJ0aWNsZS9waWkvUzAzODAxMzMwMTgzMDE4MDEgCmh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMjk3NzE4OTY0X0NvbXBhcmlzb25fb2Zfc2F0ZWxsaXRlX3JlZmxlY3RhbmNlX2FsZ29yaXRobXNfZm9yX2VzdGltYXRpbmdfY2hsb3JvcGh5bGwtYV9pbl9hX3RlbXBlcmF0ZV9yZXNlcnZvaXJfdXNpbmdfY29pbmNpZGVudF9oeXBlcnNwZWN0cmFsX2FpcmNyYWZ0X2ltYWdlcnlfYW5kX2RlbnNlX2NvaW5jaWRlbnRfc3VyZmFjZV9vYnNlcnZhdGlvbnMgCiovCgovL3doaXRlIGNvbG9yIHJlcHJlc2VudHMgcGl4ZWxzIHdpdGggbm8gZGF0YQppZiAoKEIwNStCMDQpPT0wKXsgCiAgcmV0dXJuIFsxLDEsMV0KfTsKdmFyIHZhbCA9IChCMDUtQjA0KS8oQjA1K0IwNCk7CgpyZXR1cm4gY29sb3JCbGVuZAooCiAgdmFsLAogIFstMC41LDAsMC4xLDAuMiwwLjMsMV0sCiAgWwogICBbMCwwLDFdLAogICBbMCwwLjUsMC41XSwKICAgWzEsMC4zLDBdLAogICBbMSwxLDBdLAogICBbMC4yLDAuOCwwXSwKICAgWzAsMC41LDBdCiAgXQopOw%3D%3D){:target="_blank"}
- [SH Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=41.834525693732765&lng=12.385025024414062&zoom=11&preset=CUSTOM&layers=B01,B02,B03&maxcc=9&gain=1.0&gamma=1.0&time=2019-05-01%7C2019-11-20&atmFilter=&showDates=false&evalscript=ICAgICAgLyoKTm9ybWFsaXplZCBkaWZmZXJlbmNlIGNobG9yb3BoeWwgaW5kZXgKaHR0cHM6Ly9wZGZzLnNlbWFudGljc2Nob2xhci5vcmcvMmZiYS9jYWExNGFkYjQzZDViYzhkMmRkMjc0MzA0ZjYwODE0ZDkzM2MucGRmCmh0dHBzOi8vd3d3LnNjaWVuY2VkaXJlY3QuY29tL3NjaWVuY2UvYXJ0aWNsZS9waWkvUzAzODAxMzMwMTgzMDE4MDEgCmh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMjk3NzE4OTY0X0NvbXBhcmlzb25fb2Zfc2F0ZWxsaXRlX3JlZmxlY3RhbmNlX2FsZ29yaXRobXNfZm9yX2VzdGltYXRpbmdfY2hsb3JvcGh5bGwtYV9pbl9hX3RlbXBlcmF0ZV9yZXNlcnZvaXJfdXNpbmdfY29pbmNpZGVudF9oeXBlcnNwZWN0cmFsX2FpcmNyYWZ0X2ltYWdlcnlfYW5kX2RlbnNlX2NvaW5jaWRlbnRfc3VyZmFjZV9vYnNlcnZhdGlvbnMgCiovCgovL3doaXRlIGNvbG9yIHJlcHJlc2VudHMgcGl4ZWxzIHdpdGggbm8gZGF0YQppZiAoKEIwNStCMDQpPT0wKXsgCiAgcmV0dXJuIFsxLDEsMV0KfTsKdmFyIHZhbCA9IChCMDUtQjA0KS8oQjA1K0IwNCk7CgpyZXR1cm4gY29sb3JCbGVuZAooCiAgdmFsLAogIFstMC41LDAsMC4xLDAuMiwwLjMsMV0sCiAgWwogICBbMCwwLDFdLAogICBbMCwwLjUsMC41XSwKICAgWzEsMC4zLDBdLAogICBbMSwxLDBdLAogICBbMC4yLDAuOCwwXSwKICAgWzAsMC41LDBdCiAgXQopOw%3D%3D){:target="_blank"}

## General description of the script
NDCI is an index that aims to predict the plant chlorophyll content. It is calculated using the red spectral band B04 with the red edge spectral band B05. 

## Description of representative images

Visualization of the NDCI index above Rome.
![NDCI](fig/fig1.png)

## References

 - [Normalized difference chlorophyll index: A novel model for remote estimation of chlorophyll-a concentration in turbid productive waters](https://www.semanticscholar.org/paper/Normalized-difference-chlorophyll-index%3A-A-novel-of-Mishra-Mishra/2fbacaa14adb43d5bc8d2dd274304f60814d933c){:target="_blank"}
 - [A spectral space partition guided ensemble method for retrieving chlorophyll-a concentration in inland waters from Sentinel-2A satellite imagery](https://www.sciencedirect.com/science/article/abs/pii/S0380133018301801){:target="_blank"}
 - [Comparison of satellite reflectance algorithms for estimating chlorophyll-a in a temperate reservoir using coincident hyperspectral aircraft imagery and dense coincident surface observations](https://www.researchgate.net/publication/297718964_Comparison_of_satellite_reflectance_algorithms_for_estimating_chlorophyll-a_in_a_temperate_reservoir_using_coincident_hyperspectral_aircraft_imagery_and_dense_coincident_surface_observations){:target="_blank"}