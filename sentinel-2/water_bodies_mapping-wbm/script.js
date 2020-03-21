//VERSION=3 (auto-converted from 1)
/*
WATER BODIES MAPPING
Can be used on single image or multi-temporal processing. It is recommended to use scenes with low cloud coverage, higher levels of illumination, no/low shadow zones (mountains, clouds), no/low waves and no/low water turbidity. Primary for use on Sentinel-2 L1C, applicable also for Landsat8.
Author: Mohor Gartner (Linkedin: https://www.linkedin.com/in/mohor-gartner/)
*/

////// STARTING SETTINGS
//// 1. Set ANALYSIS DURATION
//This setting is only applicable for Sentinal Playground. For EO Browser analysis duration does not affect the final result.
//Specify scene filter "from" "to" dates. Note: if result returns black image, it might be that scene filtering by from-to and cloud coverage returns no images. Be careful that maximum cloud coverage is low as possible.
//Hint: set the max. cloud coverage by changing maxcc value in URL link.
var fromD="2019-11-05T00:00:00Z";
var toD="2019-12-05T00:00:00Z";

//// 2. Set water surface detection THRESHOLDS for MNDWI and NDWI
// Water surface detection is partialy done on the basis of MNDWI, NDWI [1]
// Potentially, calibration of parameters is needed for different scenes and data sources. If so, try -0.2, 0.1, 0.4, 0.42 or other for both indices. In case of detailed calibration, edit also thresholds directly in function wbi
var MNDWI_threshold=0.42; //testing shows recommended 0.42 for Sentinel-2 and Landsat 8. For the scene in article [1] it was 0.8.
var NDWI_threshold=0.4; //testing shows recommended 0.4 for Sentinel-2 and Landsat 8. For the scene in article [1] it was 0.5. 

//// 3. Turn on/off filtering of false detections
////For some scenes (low level illumination, etc.) it might filter out also water bodies. In that case, turn off filtering.
//urban areas & bare soil. Recommended=true.
var filter_UABS=true;
//shadows, snow/ice. Recommended=false. Use in low level illumination scenes: clouds, mountainous shadowy areas, winter season. Usually it is good to turn the filter on in multitemporal analysis.
var filter_SSI=false;


////VARIABLES DEFINITION
var nirDS="",swir1DS="",swir2DS="";

//////// FUNCTIONS
//water body id
function wbi(r,g,b,nir,swir1,swir2) {
	//water surface
	let ws=0;	
	//try as it might fail for some pixel
	try {
		//calc indices
		//[4][5][1][8][2][3]
		var ndvi=(nir-r)/(nir+r),mndwi=(g-swir1)/(g+swir1),ndwi=(g-nir)/(g+nir),ndwi_leaves=(nir-swir1)/(nir+swir1),aweish=b+2.5*g-1.5*(nir+swir1)-0.25*swir2,aweinsh=4*(g-swir1)-(0.25*nir+2.75*swir1);
		//[10][11][12]
		var dbsi=((swir1-g)/(swir1+g))-ndvi,wii=Math.pow(nir,2)/r,wri=(g+r)/(nir+swir1),puwi=5.83*g-6.57*r-30.32*nir+2.25,uwi=(g-1.1*r-5.2*nir+0.4)/Math.abs(g-1.1*r-5.2*nir),usi=0.25*(g/r)-0.57*(nir/g)-0.83*(b/g)+1;
		//DEFINE WB
		if (mndwi>MNDWI_threshold||ndwi>NDWI_threshold||aweinsh>0.1879||aweish>0.1112||ndvi<-0.2||ndwi_leaves>1) {ws=1;}
		
		//filter urban areas [3] and bare soil [10]
		if (filter_UABS && ws==1) {
			if ((aweinsh<=-0.03)||(dbsi>0)) {ws=0;}
		}
		//filter shadows and snow/ice
		if (filter_SSI && ws==1) {
			//SHADOWS[3]
			if ((aweish<=0.1112&&ndvi>-0.2)){ws=0;}
			if ((aweinsh<0.5&&ndvi>-0.2)){ws=0;} //or 0.1897
			if (((aweinsh<0||aweish<=0||ndvi>-0.1))){ws=0;}
			//SNOW AREAS[6][7][8]
			if ((((g>=0.319)?((mndwi>0.2)?((nir>0.15)?((b>0.18)?1:0):0):0):0))){ws=0;}
			if (g>0.319){ws=0;}
			//WII,WRI[11]
			if (wii>0.04||wri<2){ws=0;}
			//PUWI,UWI,USI[12]
			if (puwi<0||uwi<0||usi<=-1){ws=0;}			
			//spectrum based[13]
			if (mndwi<aweinsh){ws=0;}
			if (ndwi-aweinsh>0.5){ws=0;}	
		}	
	}catch(err){ws=0;}	
	return ws;
}
//multi-temp.
function filterScenes(scenes, inputMetadata) {
    return scenes.filter(scene => (
		scene.date.getTime()>=new Date(fromD)&&scene.date.getTime()<new Date(toD) 
    ));
}

// setup values
function setup() {
  return {
    input: [{
      bands: [
          "B02",
          "B03",
          "B04",
          "B08",
          "B11",
          "B12"
      ]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}


//////// EVALUATE PIXEL
function evaluatePixel(p) {
    nirDS="B08";swir1DS="B11";swir2DS="B12"; // Bands for Sentinel-2
	//nirDS="B05";swir1DS="B06";swir2DS="B07"; Bands for Landsat 8; don't forget to also change the input bands
	
	////N and average values for multi-temporal
	var N=p.length,waterAvg=0,bAvg=0,gAvg=0,rAvg=0;
	//sum+reduce part of avg
	var water=0,reduceNavg=0;	
	//loop samples in selected timeline scene
	for (var i=0;i<N;i++){
		//rgb
		let b_i=p[i].B02,g_i=p[i].B03,r_i=p[i].B04;
		//if rgb 000or111,skip
		if ((b_i==1 && g_i==1 && r_i==1)||(b_i==0 && g_i==0 && r_i==0)) {
			++reduceNavg;
		}else{
			//nir,swir12
			let nir_i=p[i][nirDS],swir1_i=p[i][swir1DS],swir2_i=p[i][swir2DS];
			//water body id		
			water=wbi(r_i,g_i,b_i,nir_i,swir1_i,swir2_i);	
			//sum part of avg calc
			waterAvg=waterAvg+water;bAvg=bAvg+b_i;gAvg=gAvg+g_i;rAvg=rAvg+r_i;			
		} 
	}
	//N reduction if r&b&g=0
	N=N-reduceNavg;	
	//avg/N
	waterAvg=waterAvg/N;bAvg=bAvg/N;gAvg=gAvg/N;rAvg=rAvg/N;
	//land color
	let RGB=[rAvg,gAvg,bAvg].map(a=>2*a);
	//final render; if 0.1 to 0->ALL return WS OR 1->to return WS whole timeline must be WS, else land.
	if (waterAvg>=0.1) return [0.44,0.54,1];else return RGB;
}
