//VERSION=3
function setup() {
    return {
        input: [
            {
                datasource: "CUSTOM",
                bands: ["B02", "B03", "B04"],
            },
            {
                datasource: "S1GRD",
                bands: ["VV", "VH", "dataMask"],
            },
        ],
        output: { bands: 4 },
        mosaicking: "SIMPLE",
    };
}

function toDB(input) {
    return (10 * Math.log(input)) / Math.LN10;
}
//threshold value for water detection, reduce for more water, increase for less water
const lim = 15;
//gain value for image brightness (increase for brighter image)
const f = 0.0008;

function evaluatePixel(sample) {
    var S1 = sample.S1GRD[0];
    var S2 = sample.CUSTOM[0];
    if (toDB(S1.VV) <= -1 * lim) {
        return [S1.VV * 10, S1.VV * 10, S1.VV * 50, 1];
    } else {
        return [f * S2.B04, f * S2.B03, f * S2.B02, 1];
    }
}
