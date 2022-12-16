//VERSION=3

// Detecting the Presence of Water in Wetlands and Thermal Visualization with Landsat-8

//Variable Initialization

const blue_red = [
  [223, 0x003d99],
  [253, 0x2e82ff],  
  [263, 0x80b3ff],
  [272, 0xe0edff],
  [273, 0xffffff],
  [274, 0xfefce7],
  [283, 0xFDE191],
  [293, 0xf69855],
  [303, 0xec6927],
  [323, 0xaa2d1d],
  [363, 0x650401],
  [373, 0x3d0200],
];

const viz = new ColorRampVisualizer(blue_red);

function setup() 
{
  return {
    input: [

//Data Fusion
//Declaration of the two Landsat 8-9 L1

	{datasource: "L1", 
		bands: ["B10"]},

    	{datasource: "L2",  
		bands: ["B02","B03","B04","B05","B07"]}
        ],

    output: { bands: 3}
	}
}

function evaluatePixel(samples)
 {
  let val = samples.L1[0]
  var L82 = samples.L2[0]

// General formula: IF B05<0.1735 AND B07<0.1035 THEN Water ELSE NoWater
// return a blue color when surface water is detected, and thermal visualization based on band 10 when no water is detected
  
return (L82.B05<0.1735&&L82.B07<0.1035)?[51/255,68/255,170/255]:[L82.B04*5,viz.process(val),viz.process(val)]; 

}


