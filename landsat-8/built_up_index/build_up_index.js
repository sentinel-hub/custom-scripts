/*
Author: Karl Chastko
*/

let ndvi = (B05 - B04) / (B05 + B04);

let ndbi = (B06 - B05) / (B06 + B05);

let BU = (ndvi - ndbi)

return[BU];
