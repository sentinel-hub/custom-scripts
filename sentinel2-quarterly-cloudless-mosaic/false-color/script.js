//VERSION=3
function setup() {
	return {
		input: ["B04", "B03", "B08", "dataMask"],
		output: { bands: 4 }
	};
}
let factor = 1 / 10000;
let minVal = 0.0;
let maxVal = 0.5;

const viz = new HighlightCompressVisualizer(minVal, maxVal);

function evaluatePixel(samples) {
	let val = [
		factor * samples.B08,
		factor * samples.B04,
		factor * samples.B03
	];
	let imgVals = viz.processList(val);
	return imgVals.concat(samples.dataMask);
}
