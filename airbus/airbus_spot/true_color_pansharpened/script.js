//Pansharpened True Color

let weight = (B2 + B1 + B0 * 0.4) / 2.4;
if (weight == 0) {
 return [0, 0, 0];
}
let ratio = PAN/weight * 2.5;
return [(B2/10000)*ratio, (B1/10000)*ratio, (B0/10000)*ratio];
  
