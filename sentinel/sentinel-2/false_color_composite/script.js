/*
Author: Monja Sebela
*/

/*Version 1: natural color:
return [B12 * 2.5, B07 * 1.5, B09 * 2.5 ];  
*/

//Version 2: lighter, vivid colors:
let gain = 1.5
return [B12 * 2.5, B07 * 1.5, B09 * 2.5 ].map(a => gain * a);   
