let colorPairs = [
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
	let r = (val >>> 16) & 0xFF;
	let g = (val >>> 8) & 0xFF;
	let b = val & 0xFF;
	return [r, g, b].map(x => x/0xFF);
}

function findColor(colorPairs, ndvi) {
	let n = colorPairs.length;
	for (let i = 1; i < n; i++) {
		if (Math.abs(colorPairs[i][0] - ndvi) > Math.abs(colorPairs[i-1][0] - ndvi)) {
			return toRGB(colorPairs[i-1][1]);
		}
	}
	return toRGB(colorPairs[n-1][1]);
}

return findColor(colorPairs, index(B08, B04));
