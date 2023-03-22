// Oil Spill Index in grayscale
let OSI = (B03 + B04) / B02;
return [OSI/3]

// RGB visualization a)
/*
let R = (B05+B06)/B07
let G = (B03+B04)/B02
let B = (B11+B12)/B08
return [R/3, G/3, B/3]
*/

// RGB visualization b)
/*
let R = (B03/B02)
let G = (B03+B04)/B02
let B = (B06+B07)/B05
return [R/3, G/3, B/3]
*/
