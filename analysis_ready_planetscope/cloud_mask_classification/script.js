//VERSION=3

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

const map = [
    [2, [0.5, 0.5, 0.8]],  //bright cloud in purple
    [3, [0.4, 0.4, 0.4]],  //cloud shadows in grey
    [4, [0, 0.9, 1]],      //haze in sky blue
    [5, [1, 0.7, 1]],      //adjacent clouds/cloud shadows in light pink
    [6, [0.7, 0.7, 0.7]],  //additional haze or cloud elements in white
    [7, [0, 0.5, 0.5]]     //contamination including snow in green
]
const visualizer = new ColorMapVisualizer(map);


function evaluatePixel(samples) {
    const dataMask =  nodatavalue == -999 ? 0 : 1
    imgVals = visualizer.process(sample.cloud_mask)
    return imgVals.concat(dataMask)
}