//Oil slicks and Red tide monitoring  
//By TIZNEGAR Startup Co, www.tiznegar.com
//Dataset:Sentinel-1 AWS-IW-VVVH

var ORM = Math.log(0.01/(0.01+VV*2)); 

if (ORM < [ 0] &&  VV< [ 0.018]&&  VH< [ 0.00126]) { 
    
   return colorBlend   
    (ORM,	            
         [-1.6, -1.4, -1.2, -1, -.8, -.6, -.4, -.2, 0], 
        [     
   
     [0,0,.1 ],
     [0,0,.4 ],
     [0,0,.8],
     [1,0,.5],
     [1,0,0],
     [1,.5,.2],
     [1,.8,.2],
     [1,1,.4],
     [.5,.8,.3],
           

      ]);
}
else {
 return [2.5*VV,2.5*VV,2.5*VV]
}
