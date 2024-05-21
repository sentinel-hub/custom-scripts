//VERSION=3

function setup() {
    return {
        input: ["blue", "green", "red", "cloud_mask"],
        output: {
            bands: 4
        }
    };
}

let factor = 1/2000; 
function evaluatePixel(sample) {
    let opacity = sample.cloud_mask == 1 ? 1 : 0
    
    if (sample.cloud_mask == 1) 
      return [
        factor * sample.red,
        factor * sample.green,
        factor * sample.blue,
        opacity
    ];
}
