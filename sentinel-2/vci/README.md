# Vegetation Condition Index 

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it or [download V3](script_v3.js) for use with <a href="https://docs.sentinel-hub.com/api/latest">Sentinel Hub RESTful API</a>.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Hub Playground temporal](https://apps.sentinel-hub.com/sentinel-playground-temporal/?source=S2&preset=CUSTOM&temporal=true&evalscript=ZnVuY3Rpb24gc2V0dXAgKGRzcykgewogIHNldElucHV0Q29tcG9uZW50cyhbZHNzLkIwNCxkc3MuQjA4XSk7CiAgc2V0T3V0cHV0Q29tcG9uZW50Q291bnQoMSk7Cn0KCmNvbnN0IG1zSW5EYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwOwpjb25zdCBtc0luWWVhciA9IDM2NS4yNSAqIG1zSW5EYXk7CmNvbnN0IHRvbGVyYW5jZURheXMgPSAxMDsKY29uc3QgdG9sZXJhbmNlTXMgPSB0b2xlcmFuY2VEYXlzICogbXNJbkRheTsKCnZhciBtZXRhZGF0YSA9IHVuZGVmaW5lZDsKCmZ1bmN0aW9uIGZpbHRlclNjZW5lcyhzY2VuZXMsIGlucHV0TWV0YWRhdGEpIHsKICBzY2VuZXMgPSBzY2VuZXMuc29ydCgoczEsIHMyKSA9PiBzMi5kYXRlIC0gczEuZGF0ZSk7CiAgY29uc3Qgb2JzZXJ2ZWQgPSBzY2VuZXNbMF0uZGF0ZTsKICB2YXIgbmV3U2NlbmVzID0gW3NjZW5lc1swXV07CiAgZm9yICh2YXIgaGlzdG9yaWNhbCA9IG9ic2VydmVkIC0gbXNJblllYXI7IGhpc3RvcmljYWwgPj0gaW5wdXRNZXRhZGF0YS5mcm9tIC0gdG9sZXJhbmNlTXM7IGhpc3RvcmljYWwgLT0gbXNJblllYXIpIHsKICAgIG5ld1NjZW5lcy5wdXNoKGZpbmRDbG9zZXN0KHNjZW5lcywgaGlzdG9yaWNhbCkpOwogIH0KICBuZXdTY2VuZXMgPSBuZXdTY2VuZXMuZmlsdGVyKHNjZW5lID0%2BIHNjZW5lICE9IG51bGwpOwogIG1ldGFkYXRhID0gewogICAgb2JzZXJ2ZWQ6IG9ic2VydmVkLnRvSVNPU3RyaW5nKCksCiAgICByZWZlcmVuY2U6IG5ld1NjZW5lcy5zbGljZSgxKS5tYXAoc2NlbmUgPT4gc2NlbmUuZGF0ZS50b0lTT1N0cmluZygpKQogIH0KICByZXR1cm4gbmV3U2NlbmVzOwp9CgpmdW5jdGlvbiBmaW5kQ2xvc2VzdChzY2VuZXMsIGRhdGUpIHsKICB2YXIgY2xvc2VzdER0ID0gdG9sZXJhbmNlTXMgKyAxLCBjbG9zZXN0U2NlbmUgPSBudWxsOwogIGZvciAodmFyIGkgPSAwOyBpIDwgc2NlbmVzLmxlbmd0aDsgaSsrKSB7CiAgICBjb25zdCBkdCA9IE1hdGguYWJzKHNjZW5lc1tpXS5kYXRlIC0gZGF0ZSk7CiAgICBpZiAoZHQgPCBjbG9zZXN0RHQpIHsKICAgICAgY2xvc2VzdER0ID0gZHQ7CiAgICAgIGNsb3Nlc3RTY2VuZSA9IHNjZW5lc1tpXTsKICAgIH0KICB9CiAgcmV0dXJuIGNsb3Nlc3RTY2VuZTsKfQoKZnVuY3Rpb24gdXBkYXRlT3V0cHV0TWV0YWRhdGEoc2NlbmVzLCBpbnB1dE1ldGFkYXRhLCBvdXRwdXRNZXRhZGF0YSkgewogIG91dHB1dE1ldGFkYXRhLnVzZXJEYXRhID0gbWV0YWRhdGE7Cn0KCmZ1bmN0aW9uIGV2YWx1YXRlUGl4ZWwoc2FtcGxlcywgc2NlbmVzKSB7CiAgY29uc3Qgb2JzZXJ2ZWQgPSBpbmRleChzYW1wbGVzWzBdLkIwOCwgc2FtcGxlc1swXS5CMDQpOwogIHZhciBoaXN0TWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCBoaXN0TWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZOwogIGZvciAodmFyIGkgPSAxOyBpIDwgc2FtcGxlcy5sZW5ndGg7IGkrKykgewogICAgY29uc3QgbmR2aSA9IGluZGV4KHNhbXBsZXNbaV0uQjA4LCBzYW1wbGVzW2ldLkIwNCk7CiAgICBoaXN0TWF4ID0gTWF0aC5tYXgoaGlzdE1heCwgbmR2aSk7CiAgICBoaXN0TWluID0gTWF0aC5taW4oaGlzdE1pbiwgbmR2aSk7CiAgfQogIHJldHVybiBbKG9ic2VydmVkIC0gaGlzdE1pbikgLyAoaGlzdE1heCAtIGhpc3RNaW4pXTsKfQoK
){:target="_blank"}
 - [Sentinel Hub RESTful API]TODO

## General description of the script

The vegetation condition index [1] compares the NDVI at current (observed) time to historical values, i.e. to NDVI at similar dates in previous years: 

VCI = (NDVI_observed - NDVI_hist_min) / (NDVI_hist_max - NDVI_hist_min)

Please note that in case of Sentinel 2, only a few years of history are available.

The script takes the newest (latest) available scene as the observed one -- thus, the observed date can be chosen in the Sentinel Hub Playground GUI (or, in case of API request, via the ```dataFilter.timeRange.to``` field). Then, for each previous year the script finds the one closest to the same date, but not more than ```toleranceDays``` from that date.

Because of the multi-temporal nature of this index, be sure to use it in the "temporal" version of Sentinel Hub Playground with "Enable temporal data" checked in the "Effects" tab, or in case of API request, set the ```dataFilter.timeRange.to``` field far enough back to include all available history.

The actual scenes (dates) used are returned in meta-data, which in case of API request you can see by replacing the ```responses``` part of the request with:
                    "responses":  [{
                            "identifier": "userdata",
                            "format": {
                                "type": "application/json"
                            }
                        }
                    ]
                }


{
    "reference": [
        "2018-09-08T00:00:00.000Z",
        "2016-09-13T00:00:00.000Z",
        "2015-09-09T00:00:00.000Z"
    ],
    "observed": "2019-09-13T00:00:00.000Z"
}
## References

[1] https://www.indexdatabase.de/db/i-single.php?id=249

