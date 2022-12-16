//VERSION=3
/*
DETECTION OF LAKE EXTENT CHANGES

Detect changes of water body extent between two Landsat images. The scenes can be from the Landsat 4-5 TM and Landsat 8-9 Level-2 data sets which together range from 1984 to 2022. The water body detection is simply based on a MNDWI threshold.

Author: Jan Landwehrs (https://www.linkedin.com/in/jan-landwehrs-a37009130)
*/

// Set date1 and date2 to the dates of the two Landsat scenes that shall be compared. 
// (date1 should be the older one)

// EXAMPLES:
// // POYANG LAKE (https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=29.14511&lng=116.18321)
var date1="1988-08-13", date2="2022-08-19"
// // ARAL SEA (https://apps.sentinel-hub.com/eo-browser/?zoom=9&lat=45.61116&lng=59.55688)
// var date1="1989-08-16", date2="2022-08-27" 
// // DEAD SEA (https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=31.38588&lng=35.47623)
// var date1="1985-08-24", date2="2022-08-22"

var date1_date = new Date(date1);
var date2_date = new Date(date2);
var year1 = date1_date.getFullYear();
var year2 = date2_date.getFullYear();
// The last  first dates for which the Landsat 4-5 TM / Landsat 8-9 data sets are available
var Landsat45TM_end_date = new Date("2012-05-01T00:00:00Z");
var Landsat89_start_date = new Date("2013-02-01T00:00:00Z");

// Landsat 4-5 TM and Landsat 8-9 differ in their band configuration. For the water body detection, the red, green, blue and SWIR1 values have to be taken from the corresponding bands. 
if (date1_date > Landsat89_start_date) {
    var ds2bands=["B02","B03","B04","B06"];
    var ds1bands=["B02","B03","B04","B06"];}
else if (date1_date < Landsat45TM_end_date && date2_date > Landsat89_start_date) {
    var ds2bands=["B02","B03","B04","B06"];
    var ds1bands=["B01","B02","B03","B04"];}
else if (date2_date < Landsat45TM_end_date) {
    var ds2bands=["B01","B02","B03","B04"];
    var ds1bands=["B01","B02","B03","B04"];}
    
function setup() { return { input: [
    {datasource: "ds2", bands: ds2bands, mosaicking: "ORBIT"},
    {datasource: "ds1", bands: ds1bands, mosaicking: "ORBIT"}],
    output: [ { id: "default", bands: 3, sampleType: SampleType.AUTO } ] }; } 

let minVal = 0.0;
let maxVal = 0.4;
let viz = new DefaultVisualizer(minVal, maxVal);

function evaluatePixel(p) {
 
    let s1 = p.ds1[0] 
    let s2 = p.ds2[0] 
        
    var b_1=s1[ds1bands[0]],g_1=s1[ds1bands[1]],r_1=s1[ds1bands[2]],swir1_1=s1[ds1bands[3]];
    var b_2=s2[ds2bands[0]],g_2=s2[ds2bands[1]],r_2=s2[ds2bands[2]],swir1_2=s2[ds2bands[3]];
    
    // The MNDWI is used as a simple way to detect open water bodies
    var water1=0, water2=0;
    var MNDWI_threshold=0.1;
    mndwi_1=(g_1-swir1_1)/(g_1+swir1_1)
    mndwi_2=(g_2-swir1_2)/(g_2+swir1_2)
    if (mndwi_1>MNDWI_threshold) {water1=1;}
    if (mndwi_2>MNDWI_threshold) {water2=1;}
    
    // Compute the difference between the two water masks. 
    water_diff=water1 - water2;
    
    // True color for surrounding land
    let RGB=[r_2,g_2,b_2].map(a=>2.25*a);
    
    // Visualize the detected water body changes with surrounding land as true color from image 2.
    // Red color: Water detected in image 1, but not in image 2 (-> receded water body)
    // Dark blue color: Water detected at image 2, but not at image 1 (-> expanded water body)
    // Light blue color: Water detected in both images
    if (water_diff==1) return [1,0,0]; if (water_diff==-1) return [0,0,1]; else if (water1==1) return [0.44,0.54,1]; else return RGB;
}





