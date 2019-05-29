# Fire Boundary Script

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=-37.654266597292256&lng=146.74816131591797&zoom=13&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2018-09-01%7C2019-03-04&atmFilter=&showDates=false&evalscript=ZnVuY3Rpb24gc2V0dXAoZGF0YVNvdXJjZSkgewogIHNldElucHV0Q29tcG9uZW50cyhbZGF0YVNvdXJjZS5CMTEsIGRhdGFTb3VyY2UuQjEyXSk7CiAgc2V0T3V0cHV0Q29tcG9uZW50Q291bnQoMSk7Cn0KCmxldCB2aXogPSBuZXcgSGlnaGxpZ2h0Q29tcHJlc3NWaXN1YWxpemVyU2luZ2xlKC0xLjAsIDEuMCk7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICBsZXQgdmFsID0gOC41ICogKHNhbXBsZXNbMF0uQjEyIC0gc2FtcGxlc1swXS5CMTEpIC8gKHNhbXBsZXNbMF0uQjEyICsgc2FtcGxlc1swXS5CMTEgKyAwLjI1KTsgcmV0dXJuIHZpei5wcm9jZXNzKHZhbCk7Cn0%3D){:target="_blank"}    
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=-37.66174&lng=146.74456&zoom=13&time=2019-03-04&preset=CUSTOM&datasource=Sentinel-2%20L2A&layers=B01,B02,B03&evalscript=ZnVuY3Rpb24gc2V0dXAoZGF0YVNvdXJjZSkgewogIHNldElucHV0Q29tcG9uZW50cyhbZGF0YVNvdXJjZS5CMTEsIGRhdGFTb3VyY2UuQjEyXSk7CiAgc2V0T3V0cHV0Q29tcG9uZW50Q291bnQoMSk7Cn0KCmxldCB2aXogPSBuZXcgSGlnaGxpZ2h0Q29tcHJlc3NWaXN1YWxpemVyU2luZ2xlKC0xLjAsIDEuMCk7CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMpIHsKICBsZXQgdmFsID0gOC41ICogKHNhbXBsZXNbMF0uQjEyIC0gc2FtcGxlc1swXS5CMTEpIC8gKHNhbXBsZXNbMF0uQjEyICsgc2FtcGxlc1swXS5CMTEgKyAwLjI1KTsgcmV0dXJuIHZpei5wcm9jZXNzKHZhbCk7Cn0%3D){:target="_blank"} 


## General description of the script

The boundary of the affected wildfire area is important to understand the impact and measure the impact of the event. The existing script of wildfire boundary extraction still not be able to automatically delineate the boundary of the affected area.

This script is introduced to highlight the boundary of affected areas in more contrast and detail. Band 11 and Band 12 of Sentinel-2 is used. Using a higher coefficient number lead to more contrast visualization.

This script is benefiting not only for firefighters to manage the spread of fire but also for recovery management effort.

## Authors of the script

Adzanil Rachmadhi Putra
Fatwa Ramdani

## Description of representative images

This is the result of the script for the wildfire event of Melbourne, March 4, 2019.

![Fire boundary script example](Fig/2019-03-04_Sentinel-2B_L1C_Fire_boundary_script.jpg)
