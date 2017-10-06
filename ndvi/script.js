function index(x, y) {
	return (x - y) / (x + y);
}

var ndvi = index(B08, B04);

var r = (1 - ndvi) / 2;
var g = (ndvi + 1) / 2;

return [r, g, 0];
