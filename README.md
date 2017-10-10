# Collection of custom scripts
This repository contains a collection of custom scripts for [Sentinel-Hub](https://www.sentinel-hub.com/), which can be fed to the services via the URL.

Scripts are organised by sensors which are currently supported on Sentinel-Hub:
  - [Sentinel-2](#sentinel-2)
  - [Landsat-8](#landsat-8)
  - [MERIS](#meris)

The scope of various indices according to their application is given [here](#applications).

You are invited to publish your own scripts - see [howto](#howto).

## <a name="sentinel-2"></a>Sentinel-2
Dedicated to supplying data for [Copernicus services](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2), Sentinel-2 is carrying a range of technologies, such as multi-spectral imaging instruments for land, ocean and atmospheric monitoring. It's is delivering high-resolution optical images for land monitoring, emergency response and security services. The satellite carries a multispectral imager with a swath of 290 km. The imager provides a versatile set of 13 spectral bands spanning from the visible and near infrared to the shortwave infrared, featuring four spectral bands at 10 m, six bands at 20 m and three bands at 60 m spatial resolution.


#### Popular RGB composites
 - [Natural color](sentinel-2/natural_color) product computed correctly to match the color perceived by the human eye.
 - [True color](sentinel-2/true_color) simplistic true color image from red, green and blue bands.

 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/))

#### Remote sensing indices
 - [False color infrared](sentinel-2/false_color_infrared)
 - [NDVI](sentinel-2/ndvi) - normalized dense vegetation index
 - [Index DataBase (IDB)](sentineel-2/indexdb) - indices suitable for Sentinel-2 sensor as listed by [indexdatabase](http://www.indexdatabase.de/).

#### Cloud detection algorithms
 - [Cohen-Braaten-Yang cloud detection](sentinel-2/cby_cloud_detection)
 - [Hollstein Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels detection](sentinel-2/hollstein)

## <a name="landsat-8"></a>Landsat-8
The Landsat program is the longest running enterprise for acquisition of satellite imagery of Earth, running from 1972. The most recent, [Landsat 8](http://landsat.usgs.gov/landsat8.php), was launched on February 11, 2013. The images are a unique resource for global change research and applications in agriculture, cartography, geology, forestry, regional planning, surveillance and education. Landsat 8 data has eight spectral bands with spatial resolutions ranging from 15 to 60 meters; the temporal resolution is 16 days.


## <a name="meris"></a>Envisat Meris
Primary dedication of Medium Resolution Imaging Spectrometer (MERIS) is to Ocean Colour Observations, and secondary to the understanding of atmospheric parameters associated with clouds, water vapour and aerosols in addition to land surface parameters, in particular vegetation processes. MERIS has a high spectral and radiometric resolution and a dual spatial resolution. It acquires 15 spectral bands in the 390 - 1040 NM range of the electromagnetic spectrum, and it allows the programmability of its spectral bands in their width and position.

## <a name="application"></a>List by application
|               | Sentinel-2    | Landsat-8       | Envisat Meris  |
| ------------- |:-------------:| :-------------: | :-------------:|
| **Agriculture** |  | | |
| **Alpine**      |  | | |
| **Fire**        |  | | |
| **Forestry**    |  | | |
| **Geology**     |  | | |
| **Soil**        |  | |  |
| **Vegetation**  |  | |  |
| **Water**       |  | |  |  |

For indices from [IDB](http://www.indexdatabase.de/) the application scope is defined on a much finer scale directly on the [IDB](http://www.indexdatabase.de/).

# <a name="howto"></a>Adding new custom scripts
 Create a new directory entry for your custom script, say `my_algorithm`, depending on the sensor it is applicable for. The Javascript code goes into `my_algorithm/script.js` and there should be `my_algorithm/README.md` accompanying the script. Please follow the conventions in [this example of a README](sentinel-2/cby_cloud_detection/README.md).

  Once you have set up the directory structure please add an entry pointing to your script to the above bullet list.

  And create a pull request :).
