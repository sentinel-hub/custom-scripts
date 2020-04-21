//VERSION=3 (auto-converted from 1)
/*
Author: Mohor Gartner (Linkedin: https://www.linkedin.com/in/mohor-gartner/)
*/

// setup values
function setup() {
  return {
    input: [{
      bands: [
          "B02",
          "B03",
          "B04",
          "B08",
          "B8A",
          "B10",
          "B11",
          "B12"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


// change colour if needed
function colourChange(currC,newC) {
	if (newC>currC) {
		return newC;
	}	else {
		return currC;
	}
}

// evaluate pixel
function evaluatePixel(pix) {
	//value to store for every pixel in choosen timeline if it is a white-water. 0->not white-water; 1->white-water; 2-white-water
	let WW = 0;
	// store bands for white water 
	let B04ww=0;
	let B03ww=0;
	let B02ww=0;	
	//store bands for RGB with no white-water
	let B04nat=0;
	let B03nat=0;
	let B02nat=0;
	
	// loop through timeline
	for (var i=0;i<pix.length;i++) {
		//simplify band values variables
		let B02=pix[i].B02;
		let B03=pix[i].B03;
		let B04=pix[i].B04;
		let B08=pix[i].B08;
		let B8A=pix[i].B8A;
		let B10=pix[i].B10;
		let B11=pix[i].B11;
		let B12=pix[i].B12;
		
		//// calculate indices
		//ndwi, not needed
		//let ndwi=(B03-B08)/(B03+B08);
		//moisture index
		let moist=(B8A-B11)/(B8A+B11);
		//NDSI
		let ndsi=(B03-B11)/(B03+B11); //>0.42 should be snowy
		//NDVI
		let ndvi=(B08-B04)/(B08+B04);
		
		// change maximum white-water value if necessary -> it is needed to store for composite white-water detection
		let WWi = (ndsi >= 0.5 && moist >=0.4 && ndvi <=0.2 && B10 < 0.015 && B12 < 0.2 && B11 <= 0.4 && B04 > 0.2)
			? (ndsi <= 0.63 && B11 <=0.17 && B04 >=0.35)
				? 2
				: 1
			: 0;
		
		//// take for RGB. Mosaic order should be Least cloud coverage. Therefore non white-water pixels have non cloud coverage.
		//there are some errors/empty pixels, where all RGB are 0
		//
		if (B04!=0 && B03!=0 && B02!=0) {
			B04nat=B04;
			B03nat=B03;
			B02nat=B02;
		}
		
		// change WW max if white water detected and higher level than before
		if (WWi>=WW) {
			WW=WWi;
			B04ww=colourChange(B04ww,B04);
			B03ww=colourChange(B03ww,B03);
			B02ww=colourChange(B02ww,B02);
		}

	}

	//visualization parameters
	let gain = 1.5;
	let gain1 =2;
	let gain2 =2.5;

	// set the output colours
	let RGB = [B04nat, B03nat, B02nat].map(a => gain * a);
	let RGBww1 = [B04ww, B03ww*gain1, 0.25];
	let RGBww2 = [B04ww/4,B03ww/3, B02ww].map(a => gain2 * a);
	
	// sets colours according to multi-temporal composite
	if (WW==2) return RGBww2;
	else if (WW==1) return RGBww1;
	else return RGB;
}

function filterScenes(scenes, inputMetadata) {
    return scenes.filter(scene => (
		scene.date.getTime() >= new Date("2015-07-01T00:00:00Z") && scene.date.getTime() < new Date("2019-04-17T00:00:00Z") 
    ));
}
