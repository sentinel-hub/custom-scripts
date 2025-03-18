//VERSION=3
//Combination of NIR, SWIR and visible Red band to create a visualization that aids visual interpretation of Land Cover from Sentinel-2 images. Based on a band combination used for creating CORINE Land Cover maps.
//By András Zlinszky, Sinergise - with help from GitHub Copilot, based on code by Ottó Petrik from Lechner Institute, Hungary.
//https://bsky.app/profile/azlinszky.bsky.social
function setup() {
    return {
    input: ["B02","B03","B08","B11","B04", "dataMask"],
    output: { bands: 4 }
    };
    }
    
    //this is the gain for the image. Increase for a brighter image. If you are using Sentinel-2 monthly mosaics, divide by 10000, eg the default value would be 0.00025
    const gain = 2.5
    //this is the weighting between the SWIR Band 11 and the panchromatic band. Increase it for more sharpness, decrease it to stay closer to B11 values
    const weighting = 0.25
    
    function evaluatePixel(sample) {
          let pan = (sample.B02 + sample.B03 + sample.B04 + sample.B08) / 4;
    return [gain * sample.B08, (((1 - weighting) * gain) * sample.B11 + weighting * gain * pan), gain * sample.B04, sample.dataMask];
    }