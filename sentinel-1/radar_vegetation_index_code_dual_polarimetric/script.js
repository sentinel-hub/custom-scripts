/*
Radar Vegetation index for Sentinel-1
Subhadip Dey
IIT Bombay

This code is based on:
Nasirzadehdizaji, Rouhollah, et al. "Sensitivity Analysis of Multi-Temporal Sentinel-1 SAR Parameters to Crop Height and Canopy Coverage." Applied Sciences 9.4 (2019): 655.
*/

return [(4*VH)/(VV+VH)];