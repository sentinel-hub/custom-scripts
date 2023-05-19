---
permalink: /sentinel-2/vegetation_productivity_indicator/
nav_exclude: true
---

# Vegetation Productivity Indicator 

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
- [EO Browser](https://sentinelshare.page.link/dwhW){:target="_blank"}

Sentinel Hub RESTful API: [Click to view the request](curl.txt){:target="_blank"} 

Save script.js to your current directory and run the bash command above.
Don't forget to insert your actual access token.


## General description of the script

The vegetation productivity indicator (VPI) assesses the overall vegetation condition by comparing the observed NDVI to a cumulative probability plot of the long-term statistics for the same 10-day period [1]. VPI is a per-pixel and per decade percentile ranking of the observed NDVI value against its historical range of variability and reflects the probability of observing a similar NDVI value in the entire time series. Low VPI values indicate that the actual observation corresponds to the historical minimum (worst vegetation state), whereas high values correspond to the historical maximum (best situation).

Please note that in case of Sentinel 2, only a few years of history are available.

The script takes the newest (latest) available scene as the observed one -- thus, the observed date can be chosen in the Sentinel Hub Playground GUI (or, in case of API request, via the ```dataFilter.timeRange.to``` field). Then, for each previous year the script finds all values within `toleranceDays` of the most recent date.

Because of the multi-temporal nature of this index, be sure to use it in the temporal version of Sentinel Hub Playground with "Enable temporal data" checked in the "Effects" tab, or in case of API request, set the ```dataFilter.timeRange.to``` field far enough back to include all available history.

The actual scenes (dates) used can be returned as meta-data with an API requests by replacing the ```responses``` part of the request with:
```json
  "responses":  [{
    "identifier": "userdata",
    "format": { "type": "application/json" }
  }]
```

Example response:

```json
{
  "historical":[
    "2019-05-31T00:00:00.000Z",
    "2018-05-31T00:00:00.000Z",
    "2017-05-26T00:00:00.000Z",
    "2016-06-07T00:00:00.000Z"
    ],
  "observed":"2020-05-30T00:00:00.000Z"
}
```

## Description of representative images

Vegetation productivity indicator near Dodge City, Kansas, USA. Acquired on 30.05.2020.

![Vegetation productivity indicator near Dodge City, Kansas, USA](fig/fig1.jpg)

## References

[1] C. A. D. Sannier, J. C. Taylor, W. Du Plessis & K. Campbell (1998) Real-time vegetation monitoring with NOAA-AVHRR in Southern Africa for wildlife management and food security assessment, International Journal of Remote Sensing, 19:4, 621-639, DOI: 10.1080/014311698215892

