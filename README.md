# Collection of custom scripts
This repository contains a collection of custom scripts for [Sentinel-Hub](https://www.sentinel-hub.com/), which can be fed to the services via the URL.

Scripts are organised by sensors supported on Sentinel-Hub:
  - [Sentinel-2](#sentinel-2)
  - [Landsat-8](#landsat-8)
  - [MERIS](#meris)

{::comment}
The scope of various indices according to their application is given [here](#applications).
{:/comment}

You are invited to publish your own scripts - see [howto](#howto).

## <a name="sentinel-2"></a>Sentinel-2
Dedicated to supplying data for [Copernicus services](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2), Sentinel-2 carries a multispectral imager with a swath of 290 km. The imager provides a versatile set of 13 spectral bands spanning from the visible and near infrared to the shortwave infrared, featuring four spectral bands at 10 m, six bands at 20 m and three bands at 60 m spatial resolution. As indices primarily deal with combining various band reflectances, the table of 13 bands is given here for reference (see [details](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/msi-instrument){:target="_blank"} for details).

|Band | S2-A Central wavelength (nm)|S2-A Bandwidth (nm)|S2-B Central wavelength (nm)|S2-B Bandwidth (nm)|Spatial resolution (m)|
|:-- | ----:|:---- | ----:|:---- |:----:|
|**B01**|443.9|27|442.3|45|60|
|**B02**|496.6|98|492.1|98|10|
|**B03**|560.0|45|559|46|10|
|**B04**|664.5|38|665|39|10|
|**B05**|703.9|19|703.8|20|20|
|**B06**|740.2|18|739.1|18|20|
|**B07**|782.5|28|779.7|28|20|
|**B08**|835.1|145|833|133|10|
|**B8A**|864.8|33|864|32|20|
|**B09**|945.0|26|943.2|27|60|
|**B10**|1373.5|75|1376.9|76|60|
|**B11**|1613.7|143|1610.4|141|20|
|**B12**|2202.4|242|2185.7|238|20|


#### Popular RGB composites
 - [Natural color](sentinel-2/natural_color) product computed correctly to match the color perceived by the human eye.
 - [True color](sentinel-2/true_color) simplistic true color image from red, green and blue bands.
 - [Wildfire visualization](sentinel-2/markuse_fire) (by Pierre Markuse, taken from his [blog post](https://pierre-markuse.net/2017/08/07/visualizing-wildfires-sentinel-2-imagery-eo-browser/){:target="_blank"})

#### Remote sensing indices
 - [False color infrared](sentinel-2/false_color_infrared)
 - [NDVI](sentinel-2/ndvi) - normalized dense vegetation index
 - [NDVI uncertainty](sentinel-2/ndvi_uncertainty) - visualization of uncertainty of NDVI due to uncertainty in band values
 - [collection](meris/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}

#### Cloud detection algorithms
 - [Cohen-Braaten-Yang cloud detection](sentinel-2/cby_cloud_detection/)
 - [Hollstein Clouds, Cirrus, Snow, Shadow, Water and Clear Sky Pixels detection](sentinel-2/hollstein)


## <a name="landsat-8"></a>Landsat-8
The Landsat program is the longest running enterprise for acquisition of satellite imagery of Earth, running from 1972. The most recent, [Landsat 8](http://landsat.usgs.gov/landsat8.php){:target="_blank"}, was launched on February 11, 2013. Landsat 8 data has 8 spectral bands with spatial resolutions ranging from 15 to 60 meters, as can be seen in following table.

|		Band 	|	Bandwidth (µm)	|	Resolution (m)	|
|:-- |:----:|:----:|
|	**B01** Coastal |	0.43 - 0.45	|	30	|
|	**B02** Blue	|	0.45 - 0.51	|	30	|
|	**B03** Green	|	0.53 - 0.59	|	30	|
|	**B04** Red	|	0.63 - 0.67	|	30	|
|	**B05** NIR	|	0.85 - 0.88	|	30	|
|	**B06** SWIR 1	|	1.57 - 1.65	|	30	|
|	**B07** SWIR 2	|	2.11 - 2.29	|	30	|
|	**B08** Pan	|	0.50 - 0.68	|	15	|
|	**B09** Cirrus	|	1.36 - 1.38	|	30	|
|	**B10** TIRS 1	|	10.6 - 11.19	|	30 (100)	|
|	**B11** TIRS 2	|	11.5 - 12.51	|	30 (100)	|

#### Remote sensing indices
  - [collection](meris/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}


## <a name="meris"></a>Envisat Meris
Primary dedication of Medium Resolution Imaging Spectrometer (MERIS) is to Ocean Colour Observations, and secondary to the understanding of atmospheric parameters associated with clouds, water vapour and aerosols in addition to land surface parameters, in particular vegetation processes. MERIS has a high spectral and radiometric resolution and a dual spatial resolution. It acquires 15 spectral bands in the 390 - 1040 NM range of the electromagnetic spectrum, and it allows the programmability of its spectral bands in their width and position.

|	Band	|	Central wavelength (nm)	|	Bandwidth (nm)	|
|:-- |:----:|:----:|
|	**B01**	|	412.5 	|	10 	|
|	**B02**	|	442.5 	|	10 	|
|	**B03**	|	490 	|	10 	|
|	**B04**	|	510 	|	10 	|
|	**B05**	|	560 	|	10 	|
|	**B06**	|	620 	|	10 	|
|	**B07**	|	665 	|	10 	|
|	**B08**	|	681.25 	|	7.5 	|
|	**B09**	|	708.75 	|	10 	|
|	**B10**	|	753.75 	|	7.5 	|
|	**B11**	|	760.625	|	3.75 	|
|	**B12**	|	778.75 	|	15 	|
|	**B13**	|	865 	|	20 	|
|	**B14**	|	885 	|	10 	|
|	**B15**	|	900 	|	10 	|

#### Remote sensing indices
  - [collection](meris/indexdb) of remote sensing indices from an extensive [Index database (IDB)](http://www.indexdatabase.de/){:target="_blank"}


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

For indices from [IDB](http://www.indexdatabase.de/){:target="_blank"} the application scope is defined on a much finer scale directly on the [IDB](http://www.indexdatabase.de/){:target="_blank"}.
{:/comment}

# <a name="howto"></a>Adding new custom scripts
 Create a new directory entry for your custom script, say `my_algorithm`, depending on the sensor it is applicable for. The Javascript code goes into `my_algorithm/script.js` and there should be `my_algorithm/README.md` accompanying the script. Please follow the conventions in [this example of a README](sentinel-2/cby_cloud_detection/README.md).

  Once you have set up the directory structure please add an entry pointing to your script to the above bullet list.

  And create a pull request :).


<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
