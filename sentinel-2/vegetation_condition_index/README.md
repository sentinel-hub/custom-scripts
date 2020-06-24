# Vegetation Condition Index 

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it 
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Hub Playground temporal](https://apps.sentinel-hub.com/sentinel-playground-temporal/?source=S2&lat=40.4&lng=-3.730000000000018&zoom=12&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01%7C2020-03-17&atmFilter=&showDates=false&evalscript=Ly9WRVJTSU9OPTMKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbIkIwNCIsICJCMDgiXSwKICAgIG91dHB1dDogeyBiYW5kczogMX0sCiAgICBtb3NhaWNraW5nOiAiT1JCSVQiCiAgfSAgCn0KCmNvbnN0IG1zSW5EYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwOwpjb25zdCBtc0luWWVhciA9IDM2NS4yNSAqIG1zSW5EYXk7CmNvbnN0IHRvbGVyYW5jZURheXMgPSAxMDsKY29uc3QgdG9sZXJhbmNlTXMgPSB0b2xlcmFuY2VEYXlzICogbXNJbkRheTsKCnZhciBtZXRhZGF0YSA9IHVuZGVmaW5lZDsKCmZ1bmN0aW9uIGZpbHRlclNjZW5lcyhzY2VuZXMsIGlucHV0TWV0YWRhdGEpIHsKICBzY2VuZXMgPSBzY2VuZXMuc29ydCgoczEsIHMyKSA9PiBzMi5kYXRlIC0gczEuZGF0ZSk7CiAgY29uc3Qgb2JzZXJ2ZWQgPSBzY2VuZXNbMF0uZGF0ZTsKICB2YXIgbmV3U2NlbmVzID0gW3NjZW5lc1swXV07CiAgZm9yICh2YXIgaGlzdG9yaWNhbCA9IG9ic2VydmVkIC0gbXNJblllYXI7IGhpc3RvcmljYWwgPj0gaW5wdXRNZXRhZGF0YS5mcm9tIC0gdG9sZXJhbmNlTXM7IGhpc3RvcmljYWwgLT0gbXNJblllYXIpIHsKICAgIG5ld1NjZW5lcy5wdXNoKGZpbmRDbG9zZXN0KHNjZW5lcywgaGlzdG9yaWNhbCkpOwogIH0KICBuZXdTY2VuZXMgPSBuZXdTY2VuZXMuZmlsdGVyKHNjZW5lID0%2BIHNjZW5lICE9IG51bGwpOwogIG1ldGFkYXRhID0gewogICAgb2JzZXJ2ZWQ6IG9ic2VydmVkLnRvSVNPU3RyaW5nKCksCiAgICBoaXN0b3JpY2FsOiBuZXdTY2VuZXMuc2xpY2UoMSkubWFwKHNjZW5lID0%2BIHNjZW5lLmRhdGUudG9JU09TdHJpbmcoKSkKICB9CiAgcmV0dXJuIG5ld1NjZW5lczsKfQoKZnVuY3Rpb24gZmluZENsb3Nlc3Qoc2NlbmVzLCBkYXRlKSB7CiAgdmFyIGNsb3Nlc3REdCA9IHRvbGVyYW5jZU1zICsgMSwgY2xvc2VzdFNjZW5lID0gbnVsbDsKICBmb3IgKHZhciBpID0gMDsgaSA8IHNjZW5lcy5sZW5ndGg7IGkrKykgewogICAgY29uc3QgZHQgPSBNYXRoLmFicyhzY2VuZXNbaV0uZGF0ZSAtIGRhdGUpOwogICAgaWYgKGR0IDwgY2xvc2VzdER0KSB7CiAgICAgIGNsb3Nlc3REdCA9IGR0OwogICAgICBjbG9zZXN0U2NlbmUgPSBzY2VuZXNbaV07CiAgICB9CiAgfQogIHJldHVybiBjbG9zZXN0U2NlbmU7Cn0KCmZ1bmN0aW9uIHVwZGF0ZU91dHB1dE1ldGFkYXRhKHNjZW5lcywgaW5wdXRNZXRhZGF0YSwgb3V0cHV0TWV0YWRhdGEpIHsKICBvdXRwdXRNZXRhZGF0YS51c2VyRGF0YSA9IG1ldGFkYXRhOwp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMsIHNjZW5lcykgewogIGNvbnN0IG9ic2VydmVkID0gaW5kZXgoc2FtcGxlc1swXS5CMDgsIHNhbXBsZXNbMF0uQjA0KTsKICB2YXIgaGlzdE1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSwgaGlzdE1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTsKICBmb3IgKHZhciBpID0gMTsgaSA8IHNhbXBsZXMubGVuZ3RoOyBpKyspIHsKICAgIGNvbnN0IG5kdmkgPSBpbmRleChzYW1wbGVzW2ldLkIwOCwgc2FtcGxlc1tpXS5CMDQpOwogICAgaGlzdE1heCA9IE1hdGgubWF4KGhpc3RNYXgsIG5kdmkpOwogICAgaGlzdE1pbiA9IE1hdGgubWluKGhpc3RNaW4sIG5kdmkpOwogIH0KICByZXR1cm4gWyhvYnNlcnZlZCAtIGhpc3RNaW4pIC8gKGhpc3RNYXggLSBoaXN0TWluKV07Cn0%3D&temporal=true
)

Sentinel Hub RESTful API: [click to view the request](curl.txt)

## General description of the script

The vegetation condition index [1] compares the NDVI at current (observed) time to historical values, i.e. to NDVI at similar dates in previous years: 

VCI = (NDVI_observed - NDVI_hist_min) / (NDVI_hist_max - NDVI_hist_min)

Please note that in case of Sentinel 2, only a few years of history are available.

The script takes the newest (latest) available scene as the observed one -- thus, the observed date can be chosen in the Sentinel Hub Playground GUI (or, in case of API request, via the ```dataFilter.timeRange.to``` field). Then, for each previous year the script finds the one closest to the same date, but not more than ```toleranceDays``` from that date.

Because of the multi-temporal nature of this index, be sure to use it in the temporal version of Sentinel Hub Playground with "Enable temporal data" checked in the "Effects" tab, or in case of API request, set the ```dataFilter.timeRange.to``` field far enough back to include all available history.

<details>
<summary>The actual scenes (dates) used can be returned as meta-data (click to see details).</summary>

Meta-data can be retrieved with an API requests by replacing the ```responses``` part of the request with:
```json
  "responses":  [{
    "identifier": "userdata",
    "format": { "type": "application/json" }
  }]
```
Example response:
```json
{
  "historical": [
    "2018-09-08T00:00:00.000Z",
    "2016-09-13T00:00:00.000Z",
    "2015-09-09T00:00:00.000Z"
  ],
  "observed": "2019-09-13T00:00:00.000Z"
}
```
</details>

## Description of representative images

Vegetation condition index of Rome. Acquired on 8.10.2017.

![Vegetation condition index of Rome](fig/fig1.png)

## References

[1] https://www.indexdatabase.de/db/i-single.php?id=249

