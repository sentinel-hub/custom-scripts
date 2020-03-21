//VERSION=3 (auto-converted from 1)
/*
SATELLITE DERIVED BATHYMETRY MAPPING
Author: Mohor Gartner (https://www.linkedin.com/in/mohor-gartner/)
*/

////// INPUT SETTINGS
//// 1. Select MULTI-TEMPORAL SCENES (Playground)
var scenes = ["2019-08-09","2019-07-20","2018-08-29","2017-08-24","2018-07-30"];

//// 2. Set water surface detection THRESHOLDS
//Calibration might be needed, depends on the scene
var MNDWI_thr=0.2;
var NDWI_thr=0.2;
//// 3. Turn on/off filtering of false water surface detections
//urban areas&bare soil. Recommended=true
var filter_UABS=true;
//shadows&snow/ice. Recommended=false
var filter_SSI=false;

//// 4. Set bands RATIOS to calculate SDB
//SDB can be blue/green (true) or blue/red (false,aka SDBred)
//Generally SDBred is better for depth<5m and SDBgreen is better for depth>5m
var SDBgreen=true;

//// 5. Select visualization scheme SDB
//0-blue ramp,1-blue blend,2-blueBlack blend
var cs=0;

//// 6. IMPORTANT! a.) false - if m1 and m0 already known OR b.) true - pre-analysis to evaluate m1 and m0
var preAnalysis=false;
// 6.a) set already known (from articles or calculated) m1 (scale) and m0 (offset)
var m1=155.86;
var m0=146.46;
// 6.b) If m1 and m0 unknown, preAnalysis=true (above) and pre-analysis of pSDB is necessary to evaluate m1 and m0! This step is done "off the platform" (EXAMPLE TUTORIAL IN SUPPLEMENTARY MATERIAL). In this case mp, pSDBmin, pSDBmax, nConst are applicable
//multiplier for pSDB output value in GREEN CHANNEL, recommended 1000
var mp=1000; 
//pSDBmin,pSDBmax are clamped output range [0-1] of Sentinel Hub in READ CHANNEL
//Recommended 0.201 and 4.983 - theoretical minimum and maximum values of pSDB. If higher accuracy is needed, values 0.565 and 1.769 might be appropriate too. For latter, color values range of pSDB is bigger
var pSDBmin=0.201; // pSDB<=pSDBmin -> Sentinel Hub returns 0 for red channel
var pSDBmax=4.983; // pSDB>=pSDBmax -> Sentinel Hub returns 1 for red channel
//pSDB calc. parameter, recommended 1000. Assures that both logarithms will be positive and that the ratio produces a linear response over the retrievable water depth
var nConst=1000;


////// VAR
var nrDS,s1DS,s2DS;
// Color SDB
var cs0=new ColorMapVisualizer([[0,0x6cd3fb],[1,0x4d91ff],[2,0x4976ff],[4,0x445bff],[6,0x3e52f0], [8,0x3948e1],[10,0x333fd3],[12,0x3039b7],[14,0x2e349b],[16,0x1e1e4a],[18,0x11112b]]);

//water body id
function wbi(r,g,b,nr,s1,s2) {
	//water surf.
	let ws=0;
	try {
		var ndvi=(nr-r)/(nr+r),mndwi=(g-s1)/(g+s1),ndwi=(g-nr)/(g+nr),ndwi_l=(nr-s1)/(nr+s1),aweish=b+2.5*g-1.5*(nr+s1)-0.25*s2,aweinsh=4*(g-s1)-(0.25*nr+2.75*s1),dbsi=((s1-g)/(s1+g))-ndvi;
		//DEFINE WB
		if (mndwi>MNDWI_thr||ndwi>NDWI_thr||aweinsh>0.1879||aweish>0.1112||ndvi<-0.2||ndwi_l>1){ws=1;}
		//filter urban&bare
		ws=((filter_UABS&&ws==1)&&((aweinsh<=-0.03)||(dbsi>0)))?0:ws;
		//filter shadows&snow/ice
		ws=((filter_SSI && ws==1)&&((aweish<=0.1112&&ndvi>-0.2)||(aweinsh<0.5&&ndvi>-0.2)||((aweinsh<0||aweish<=0||ndvi>-0.1))||(((g>=0.319)?((mndwi>0.2)?((nr>0.15)?((b>0.18)?1:0):0):0):0))||(g>0.319)||(mndwi<aweinsh)||(ndwi-aweinsh>0.5)))?0:ws;
	}catch(err){ws=0;}
	return ws;
}
//pSDB calc, denum:green or red
getPsdb=(b,denum,n)=>(Math.log(n*b))/(Math.log(n*denum));
//SDB calc
getSdb=(pSDB,m1,m0)=>m1*pSDB-m0;
//multi-temp. https://bit.ly/2TQJWnU
function filterScenes(ss,inputMetadata) {
	return ss.filter(function(s){
		var sStr=datef(s.date);
		return(scenes.indexOf(sStr)>=0)?true:false;
	});
}
function datef(t){
	var d=t.getDate(),m=t.getMonth()+1,y=t.getFullYear();
	if(d<10)d='0'+d;
	if(m<10)m='0'+m;
	return y+'-'+m+'-'+d;
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


//eval
function evaluatePixel(p) {
    nrDS="B08";s1DS="B11";s2DS="B12"; //S2 bands
    //nrDS="B05";s1DS="B06";s2DS="B07"; Bands for Landsat 8; don't forget to also change the input bands

	////N,avg,sum+reduce avg
	var N=p.length,wAvg=0,bAvg=0,gAvg=0,rAvg=0,psdbAvg=0,sdbAvg=0,w=0,psdb=0,sdb=0,trimNavg=0;
	//loop scenes
	for (var i=0;i<N;i++){
		let bi=p[i].B02,gi=p[i].B03,ri=p[i].B04;
		if((bi+gi+ri==3)||(bi+gi+ri==0)) {
			++trimNavg;
		}else{
			//nir,swir12
			let nri=p[i][nrDS],s1_i=p[i][s1DS],s2_i=p[i][s2DS];
			//denumi
			let deNumi=(SDBgreen)?gi:ri;
			//water body id
			w=wbi(ri,gi,bi,nri,s1_i,s2_i);
			//sum part of avg calc
			wAvg=wAvg+w;bAvg=bAvg+bi;gAvg=gAvg+gi;rAvg=rAvg+ri;
			//calc pSDB
			psdb=getPsdb(bi,deNumi,nConst);
			//if preAnalysis=false, calc final SDB
			if (!preAnalysis) {sdb=getSdb(psdb,m1,m0);}
			wAvg=wAvg+w;psdbAvg=psdbAvg+psdb;sdbAvg=sdbAvg+sdb;bAvg=bAvg+bi;gAvg=gAvg+gi;rAvg=rAvg+ri;
		} 
	}
	N=N-trimNavg;
	wAvg=wAvg/N;bAvg=bAvg/N;gAvg=gAvg/N;rAvg=rAvg/N;psdbAvg=psdbAvg/N;sdbAvg=sdbAvg/N;
	//preAnalysis out color:red-clampedMinMax; green-true Value*multiplier(mp)
	let psdbCol=colorBlend(psdbAvg,[pSDBmin,pSDBmax],[[0,0,0],[1,0,1]])
	psdbCol[1]=psdbAvg*mp;
	//bath color: psdb||sdb(cs0||1||2)
	let bath=(preAnalysis)?psdbCol:((cs==0)?cs0.getColorFromValue(sdbAvg):((cs==1)?colorBlend(sdbAvg,[0, 18],[[0,1,1],[0,0,0.7]]):colorBlend(sdbAvg,[0, 18],[[0,0,1],[0,0,0]])));	
	return (wAvg>=0.1)?bath:[rAvg*2,gAvg*2,bAvg*2];
}
