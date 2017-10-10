# Collection of custom scripts
This repository contains a collection of custom scripts for [Sentinel-Hub](https://www.sentinel-hub.com/), which can be fed to the services via the URL.

## Sentinel-2

### Popular RGB composites
 - [Natural color](sentinel-2/natural_color)
 - [True color](sentinel-2/true_color)
 - [False color infrared](sentinel-2/false_color_infrared)

 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/))

### Remote sensing indices
 - [NDVI](sentinel-2/ndvi)

### Cloud detection
 - [Cohen-Braaten-Yang cloud detection](sentinel-2/cby_cloud_detection)
 - [Hollstein Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels detection](sentinel-2/hollstein)

# Adding new custom scripts
 Create a new directory entry for your custom script, say `my_algorithm`. The Javascript code goes into `my_algorithm/script.js` and there should be `my_algorithm/README.md` accompanying the script. Please follow the conventions in [this example of a README](cby_cloud_detection/README.md).

  Once you have set up the directory structure please add an entry pointing to your script to the above bullet list.

  And create a pull request :).
