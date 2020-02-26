// inspired by Custom script repository
// ndviColorMap taken from NDVI script description
// findColor function taken from ...
// B8A is used for NDVI computation as B8A spectral response is narrower than band B08
// works on L2A data with SCL layer vegetation class
// naturalColour combination B04, B03, B02 with gain adapted to L2A surface reflectance


var naturalColour = [3*B04, 3*B03, 3*B02];

let ndviColorMap = [
	[-1.0, 0x000000],
	[-0.2, 0xA50026],
	[0.0,  0xD73027],
	[0.1,  0xF46D43],
	[0.2,  0xFDAE61],
	[0.3,  0xFEE08B],
	[0.4,  0xFFFFBF],
	[0.5,  0xD9EF8B],
	[0.6,  0xA6D96A],
	[0.7,  0x66BD63],
	[0.8,  0x1A9850],
    [0.9,  0x006837]
];

function index(x, y) {
	return (x - y) / (x + y);
}

function toRGB(val) {
	return [val >>> 16, val >>> 8, val].map(x => (x & 0xFF) / 0xFF);
}

function findColor(colValPairs, val) {
	let n = colValPairs.length;
	for (let i = 1; i < n; i++) {
		if (val <= colValPairs[i][0]) {
			return toRGB(colValPairs[i-1][1]);
		}
	}
	return toRGB(colValPairs[n-1][1]);
}

return (SCL == 4)? 
  findColor(ndviColorMap, index(B8A, B04)): naturalColour;