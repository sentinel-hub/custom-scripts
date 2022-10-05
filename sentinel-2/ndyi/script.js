//VERSION=3
//Normalized Difference Yellowness Index (NDYI) formula
function A (a, b){
	return (a - b) / (a + b)
}

var NDYI = A (B03, B02)
//Default NDYI value was applied for the discrimination of Schizolobium parahyba in bloom, to discriminate canola crop, empirically NDYI < 0.08-0.13 turned out to be adequate.
if (NDYI < 0.02) {
  return [7*B04, 7*B03, 5*B02] //true color
}

else {
  return [1, 1, 0] //yellow layer
}
//Para E. S.