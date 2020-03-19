/*
Author of the script: Stavros Dafis
*/

function S (a , b) { return a - b };

let gain = 2.5;

var MIDCL = S(B08, B09) 
var DC = S(B10, B12)    
var LOWCL = S(B11, B10)    

return [MIDCL, DC, LOWCL].map(a => gain * a);
