//VERSION=3
//cloud mask classification

function setup() {
    return {
        input: [{
            bands: ["cloud_mask"]
        }],
        output: {
            bands: 4
        }
    }
}

let nodatavalue = -999
function evaluatePixel(samples) {
    if (samples.cloud_mask == 2) { //bright cloud
        return[0.5,0.5,0.8,0.8]  // purple
  }
    if (samples.cloud_mask == 3){ //cloud shadows
        return[0.4,0.4,0.4,1]  //grey
  }
    if (samples.cloud_mask == 4){ //haze
        return[0,0.9,1,1]   //sky blue
  }
    if (samples.cloud_mask == 5){ //adjacent clouds/cloud shadows
        return[1,0.7,1,1]   //light pink
  }
    if (samples.cloud_mask == 6){ //additional haze or cloud elements
        return[0.7,0.7,0.7,1]  //white
  }
    if (samples.cloud_mask == 7){ //contamination including snow
        return[0,0.5,0.5] // green
  }
    if (samples.cloud_mask == nodatavalue) { //nodatavalue
        return [0,0,0,0]
    }
}