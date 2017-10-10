
let ndviColorMap = [
	[-1.0, 0x000000],
	[-0.2, 0xFF0000],
	[-0.1, 0x9A0000],
	[0.0, 0x660000],
	[0.1, 0xFFFF33],
	[0.2, 0xCCCC33],
	[0.3, 0x666600],
	[0.4, 0x33FFFF],
	[0.5, 0x33CCCC],
	[0.6, 0x006666],
	[0.7, 0x33FF33],
	[0.8, 0x33CC33],
	[0.9, 0x006600]
];

function index(x, y) {
	return (x - y) / (x + y);
}

function toRGB(val) {
	return [val >>> 16, val >>> 8, val].map(x => (x & 0xFF) / 0xFF);
}

// We should interpolate between neighboring colors
function findColor(colValPairs, val) {
	let n = colValPairs.length;
	for (let i = 1; i < n; i++) {
		if (val <= colValPairs[i][0]) {
			return toRGB(colValPairs[i-1][1]);
		}
	}
	return toRGB(colValPairs[n-1][1]);
}

return findColor(ndviColorMap, index(B08, B04));
