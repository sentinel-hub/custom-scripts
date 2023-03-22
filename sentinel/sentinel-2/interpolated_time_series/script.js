//VERSION=3

// Calculate number of bands needed for all intervals
// Initialize dates and interval
var start_date = new Date("2020-01-01");
var end_date = new Date("2021-01-01");
var sampled_dates = splitDateIntoEqualIntervals(start_date, end_date, 36, 1000*60*60*24).map(d => withoutTime(d));

// Defaults
var default_band_values = {
    'no_data': 0,
    'min_value': 1,  // meant for UINT16 and UINT8 minimal value
    'interp_failed': 10000
};
var default_mask_values = {
    'no_data': 0,
    'interp_passed': 1,
    'interp_raised': 2,
    'interp_failed': 3
};

var bands_list = ["B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B8A", "B09", "B11", "B12"];
var qmask = "QM";
var input_bands = bands_list.concat(["CLP", "CLM", "dataMask"]);
var output_bands = bands_list.concat([qmask]);
var bands_array_size = 9;
var bands_array_n = Math.ceil(sampled_dates.length / bands_array_size);

var output_setup = [];
for (var i = 0; i < output_bands.length; i++) {
    for (var j = 0; j < bands_array_n; j++) {
        var col_name = output_bands[i]+"_"+(j).toString();
        var sample_type = col_name.includes(qmask) ? SampleType.UINT8 : SampleType.UINT16;
        output_setup.push({ id: col_name, bands: bands_array_size, sampleType: sample_type });
    }
}

var sh_dates = [];
var sum_valid = [];

function interval_search(x, arr) {
  let start_idx = 0,  end_idx = arr.length - 2;

  // Iterate while start not meets end
  while (start_idx <= end_idx) {
    // Find the mid index
    let mid_idx = (start_idx + end_idx) >> 1;

    // If element is present at mid, return True
    if (arr[mid_idx] <= x && x < arr[mid_idx + 1]) {
      return mid_idx;
    }
    // Else look in left or right half accordingly
    else if (arr[mid_idx + 1] <= x) start_idx = mid_idx + 1;
    else end_idx = mid_idx - 1;
  }
  if (x == arr[arr.length-1]){
    return arr.length-2;
  }
  return undefined;
}

function linearInterpolation(x, x0, y0, x1, y1) {
    if (x < x0 || x > x1) {
        return default_band_values['interp_failed'];
    }
    var a = (y1 - y0) / (x1 - x0);
    var b = -a * x0 + y0;
    return a * x + b;
}

function lininterp(x_arr, xp_arr, fp_arr) {
    results = [];
    quality_mask = [];
    for (var i = 0; i < x_arr.length; i++) {
        var x = x_arr[i];
        var interval = interval_search(x, xp_arr);
        if (typeof interval == "undefined") {
            quality_mask.push(default_mask_values['interp_failed']);
            results.push(default_band_values['interp_failed']);
            continue;
        }
        var interp_val = linearInterpolation(x, xp_arr[interval], fp_arr[interval], xp_arr[interval + 1], fp_arr[interval + 1]);
        if (interp_val < default_band_values['min_value']) {
            quality_mask.push(default_mask_values['interp_raised']);
            results.push(default_band_values['min_value']);
            continue;
        }
        quality_mask.push(default_mask_values['interp_passed']);
        results.push(interp_val);
    }
    return [results, quality_mask];
}

function splitDateIntoEqualIntervals(startDate, endDate, numberOfIntervals, roundCoefficient){

    let diff =  endDate.getTime() - startDate.getTime();
    let intervalLength = diff/numberOfIntervals;
    let intervals = [];

    for(let i = 0; i < numberOfIntervals; i++) {
        let ndate = new Date(startDate.getTime()+i*intervalLength);
        ndate = new Date(Math.round(ndate.getTime() / roundCoefficient) * roundCoefficient);
        ndate = new Date(ndate.getTime() + ndate.getTimezoneOffset() * 60000);
      intervals.push(ndate);
    }
    return intervals;
   }

function is_valid(smp) {
    // Check if the sample is valid (i.e. contains no clouds or snow)
    let clm = smp.CLM;
    let clp = smp.CLP;
    let dm = smp.dataMask;

    if (clm != 0 || clp / 255 > 0.3 || dm != 1) {
        return false;
    }
    return true;
}

function is_valid_thr(smp, thr) {
    // Check if the sample is valid (i.e. contains no clouds or snow)
    let clp = smp.CLP;
    let dm = smp.dataMask;

    if (clp / 255 > thr || dm != 1) {
        return false;
    }
    return true;
}

function withoutTime(intime) {
    // Return date without time
    intime.setHours(0, 0, 0, 0);
    return intime;
}

// Sentinel Hub functions
function setup() {
    // Setup input/output parameters
    return {
        input: [{
            bands: input_bands,
            units: "DN"
        }],
        output: output_setup,
        mosaicking: "ORBIT"
    }
}

// Evaluate pixels in the bands
function evaluatePixel(samples, scenes) {

    // Initialise arrays
    var valid_indices = [];
    var valid_dates = [];

    // Loop over samples, get valid dates
    var always_no_data = true;
    for (var i = 0; i < samples.length; i++) {
        if (samples[i].dataMask != 0) {
            always_no_data = false;
        }

        if (is_valid(samples[i])) {
            valid_indices.push(i);
            valid_dates.push(withoutTime(new Date(scenes[i].date)));
        }
    }

    // Force at least 2 valid dates and valid dates before and after first and last sampled dates
    var clp_thr = 0.3;
    while (valid_indices.length < 2 || valid_dates[0] > sampled_dates[0] || valid_dates[valid_dates.length - 1] < sampled_dates[sampled_dates.length - 1]) {
        valid_dates = [];
        valid_indices = [];
        for (var i = 0; i < samples.length; i++) {
            if (is_valid_thr(samples[i], clp_thr)) {
                valid_indices.push(i);
                valid_dates.push(scenes[i].date);
            }
        }
        clp_thr += 0.05;
        if (clp_thr > 1) { break; }
    }

    // Fill data
    var valid_samples = {};
    for (var i = 0; i < output_bands.length - 1; i++) {
        var band = output_bands[i];
        valid_samples[band] = [];
        for (var j = 0; j < valid_indices.length; j++) {
            var v_id = valid_indices[j];
            valid_samples[band].push(samples[v_id][band]);
        }
    }

    // Interpolate
    var interpolated_output = {};
    for (var i = 0; i < output_bands.length - 1; i++) {
        var band = output_bands[i];
        var [band_data, mask_data] = lininterp(sampled_dates, valid_dates, valid_samples[band]);
        if (i > 0) {
            var old_mask_data = interpolated_output[qmask];
            for (var j = 0; j < old_mask_data.length; j++) {
                if (old_mask_data[j] > mask_data[j]) {
                    mask_data[j] = old_mask_data[j];
                }
            }
        }
        interpolated_output[band] = band_data;
        interpolated_output[qmask] = mask_data;
    }

    // Reset values in qm if no data available
    if (always_no_data) {
        for (var i = 0; i < output_bands.length - 1; i++) {
            var band = output_bands[i];
            interpolated_output[band] = new Array(interpolated_output[band].length).fill(default_band_values['no_data']);
        }
        interpolated_output[qmask] = new Array(interpolated_output[qmask].length).fill(default_mask_values['no_data']);
    }

    // Return all arrays
    var chunked_output = {}
    for (var key in interpolated_output) {
        for (var j = 0; j < interpolated_output[key].length; j++) {
            col_name = key+"_"+parseInt(j / bands_array_size).toString();
            if (!(col_name in chunked_output)) {
                chunked_output[col_name] = [];
            }
            chunked_output[col_name].push(interpolated_output[key][j]);
        }
    }

    return chunked_output;
}