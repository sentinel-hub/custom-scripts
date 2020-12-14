//Detection of Evapotranspiration Levels
//Author: Ramon Suarez
//License: Cc by Zero 1.0
//___________________________
//Version 3
function setup() {
    return {
        input:  [ìB11î,îB09î,îB02î,îdataMaskî],
       output: { bands :  4   }
    };
 }
function evaluatePixel(sample) {
	return [2.5 * sample.B11,2.5 * sample.B09,2.5 * sample.B02, sample.dataMask ];
}