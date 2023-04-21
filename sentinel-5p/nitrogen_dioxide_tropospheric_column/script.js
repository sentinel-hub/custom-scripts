// Sentinel 5P - Nitrogen Dioxide tropospheric column
// Author: Annamaria Luongo (Twitter: @annamaria_84, www.linkedin.com/in/annamaria-luongo-RS)
// CC BY 4.0 International - https://creativecommons.org/licenses/by/4.0/

var values = [ 2.5*1e-5, 5*1e-5, 7.5*1e-5, 1*1e-4,  2.5*1e-4, 5*1e-4]; //value of NO2 in mol/m2

return colorBlend(NO2, values,
   [
    [ 64/255,  27/255, 134/255], //  -> 2.5*1e-5 = #401B86
    [ 37/255,  70/255, 201/255], //  -> 5.0*1e-5 = #2546C9
    [ 42/255, 212/255,  36/255], //  -> 7.5*1e-5 = #2AD424
    [240/255, 236/255,  37/255], //  -> 1.0*1e-4 = #F0EC25
    [240/255, 117/255,  55/255], //  -> 2.5*1e-4 = #F07537
    [219/255,  58/255,  76/255]  //  -> 5.0*1e-4 = #DB3A4C
   ]
  );
