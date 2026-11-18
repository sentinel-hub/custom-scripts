//VERSION=3
var vvGain=2.9,vhGain=16,ratGain=1.6,white=3,gamma=1,saturation=1.1;
function setup(){return{input:["VV","VH","dataMask"],output:{bands:4}}}
function evaluatePixel(s){var c=[s.VV*vvGain,s.VH*vhGain,s.VH/s.VV*ratGain],L=.2126*c[0]+.7152*c[1]+.0722*c[2];return s.dataMask?c.map(x=>(x=Math.max(L+(x-L)*saturation,0),Math.pow(x/(1+x)*(1+1/white),gamma))).concat(1):[0,0,0,0]}
