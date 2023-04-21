//VERSION=3

//Author: Domagoj Korais

function setup() {
    return {
        input: [{
            bands: ["B02", "B03", "B04", "B05", "B07", "B08", "B11"],
            units: "reflectance"
        }],
        output: {
            id:"default",
            bands: 3,
            sampleType: "AUTO"
        }
    }
}

function evaluatePixel(sample) {
    var NBSI = ((sample.B11 + sample.B04)-(sample.B08 + sample.B02))/((sample.B11 + sample.B04)+(sample.B08 + sample.B02))
    var NDVI = index(sample.B08, sample.B04);
    var NDVI_RE3 = index(sample.B08, sample.B07); 
    var CL_RE = sample.B07 / sample.B05 - 1;
    
    var is_bare_soil = NDVI <= -0.1 ? false : predict(NBSI, NDVI, NDVI_RE3, CL_RE) > 0.5;
    
    if (is_bare_soil) {
        return [2.5 * sample.B04, 
                2.5 * sample.B03, 
                0.3 + 2.5 * sample.B02]
    }
  
    return [2.5 * sample.B04,
            2.5 * sample.B03,
            2.5 * sample.B02]
    
}


var DecisionTreeClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    this.predict = function(features) {
        var classes = new Array(2);
            
        if (features[1] <= 0.2880808413028717) {
            if (features[2] <= -0.001884871511720121) {
                if (features[2] <= -0.01514277933165431) {
                    if (features[0] <= -0.05856157839298248) {
                        if (features[3] <= 0.4919503927230835) {
                            if (features[1] <= 0.22891760617494583) {
                                classes[0] = 109; 
                                classes[1] = 75; 
                            } else {
                                classes[0] = 77; 
                                classes[1] = 5; 
                            }
                        } else {
                            if (features[3] <= 0.6081486344337463) {
                                classes[0] = 47; 
                                classes[1] = 128; 
                            } else {
                                classes[0] = 22; 
                                classes[1] = 311; 
                            }
                        }
                    } else {
                        if (features[1] <= 0.23794686794281006) {
                            if (features[3] <= 0.24695706367492676) {
                                classes[0] = 51; 
                                classes[1] = 132; 
                            } else {
                                classes[0] = 352; 
                                classes[1] = 3683; 
                            }
                        } else {
                            if (features[3] <= 0.4766134023666382) {
                                classes[0] = 91; 
                                classes[1] = 57; 
                            } else {
                                classes[0] = 209; 
                                classes[1] = 1278; 
                            }
                        }
                    }
                } else {
                    if (features[0] <= -0.01485772943124175) {
                        if (features[3] <= 0.46598660945892334) {
                            if (features[1] <= 0.23513969033956528) {
                                classes[0] = 80; 
                                classes[1] = 30; 
                            } else {
                                classes[0] = 83; 
                                classes[1] = 4; 
                            }
                        } else {
                            classes[0] = 38; 
                            classes[1] = 42; 
                        }
                    } else {
                        if (features[1] <= 0.24381835758686066) {
                            if (features[0] <= 0.017081347294151783) {
                                classes[0] = 37; 
                                classes[1] = 60; 
                            } else {
                                classes[0] = 72; 
                                classes[1] = 437; 
                            }
                        } else {
                            if (features[3] <= 0.4962599277496338) {
                                classes[0] = 84; 
                                classes[1] = 43; 
                            } else {
                                classes[0] = 23; 
                                classes[1] = 66; 
                            }
                        }
                    }
                }
            } else {
                if (features[2] <= 0.012518306728452444) {
                    if (features[0] <= 0.011857263278216124) {
                        if (features[3] <= 0.44026511907577515) {
                            if (features[0] <= -0.025940910913050175) {
                                classes[0] = 155; 
                                classes[1] = 2; 
                            } else {
                                classes[0] = 122; 
                                classes[1] = 13; 
                            }
                        } else {
                            classes[0] = 58; 
                            classes[1] = 38; 
                        }
                    } else {
                        if (features[1] <= 0.21599827706813812) {
                            classes[0] = 44; 
                            classes[1] = 86; 
                        } else {
                            if (features[3] <= 0.4378824234008789) {
                                classes[0] = 145; 
                                classes[1] = 37; 
                            } else {
                                classes[0] = 57; 
                                classes[1] = 55; 
                            }
                        }
                    }
                } else {
                    if (features[3] <= 0.4603644013404846) {
                        if (features[1] <= 0.21943768113851547) {
                            if (features[0] <= 0.021366839297115803) {
                                classes[0] = 131; 
                                classes[1] = 4; 
                            } else {
                                classes[0] = 58; 
                                classes[1] = 25; 
                            }
                        } else {
                            if (features[3] <= 0.42150408029556274) {
                                classes[0] = 982; 
                                classes[1] = 19; 
                            } else {
                                classes[0] = 237; 
                                classes[1] = 14; 
                            }
                        }
                    } else {
                        classes[0] = 84; 
                        classes[1] = 26; 
                    }
                }
            }
        } else {
            if (features[2] <= -0.047297170385718346) {
                if (features[1] <= 0.40251147747039795) {
                    if (features[3] <= 0.6912856698036194) {
                        classes[0] = 114; 
                        classes[1] = 25; 
                    } else {
                        if (features[1] <= 0.3502514660358429) {
                            if (features[3] <= 0.7766227126121521) {
                                classes[0] = 29; 
                                classes[1] = 74; 
                            } else {
                                classes[0] = 64; 
                                classes[1] = 516; 
                            }
                        } else {
                            if (features[0] <= -0.027021611109375954) {
                                classes[0] = 84; 
                                classes[1] = 236; 
                            } else {
                                classes[0] = 72; 
                                classes[1] = 30; 
                            }
                        }
                    }
                } else {
                    if (features[1] <= 0.4671569764614105) {
                        if (features[0] <= -0.05327927693724632) {
                            if (features[2] <= -0.0706191249191761) {
                                classes[0] = 43; 
                                classes[1] = 41; 
                            } else {
                                classes[0] = 99; 
                                classes[1] = 40; 
                            }
                        } else {
                            if (features[1] <= 0.4272315502166748) {
                                classes[0] = 67; 
                                classes[1] = 18; 
                            } else {
                                classes[0] = 121; 
                                classes[1] = 9; 
                            }
                        }
                    } else {
                        if (features[3] <= 1.3283718824386597) {
                            classes[0] = 137; 
                            classes[1] = 16; 
                        } else {
                            if (features[2] <= -0.08075670152902603) {
                                classes[0] = 75; 
                                classes[1] = 5; 
                            } else {
                                classes[0] = 453; 
                                classes[1] = 4; 
                            }
                        }
                    }
                }
            } else {
                if (features[1] <= 0.3474765121936798) {
                    if (features[3] <= 0.5934110283851624) {
                        if (features[2] <= 0.003244615043513477) {
                            if (features[0] <= -0.03575599752366543) {
                                classes[0] = 330; 
                                classes[1] = 39; 
                            } else {
                                classes[0] = 360; 
                                classes[1] = 138; 
                            }
                        } else {
                            if (features[2] <= 0.01407763920724392) {
                                classes[0] = 607; 
                                classes[1] = 57; 
                            } else {
                                classes[0] = 2837; 
                                classes[1] = 48; 
                            }
                        }
                    } else {
                        if (features[2] <= -0.021189325489103794) {
                            if (features[0] <= 0.008428129367530346) {
                                classes[0] = 113; 
                                classes[1] = 342; 
                            } else {
                                classes[0] = 82; 
                                classes[1] = 90; 
                            }
                        } else {
                            if (features[2] <= 0.010304238181561232) {
                                classes[0] = 290; 
                                classes[1] = 266; 
                            } else {
                                classes[0] = 142; 
                                classes[1] = 28; 
                            }
                        }
                    }
                } else {
                    if (features[2] <= 0.00489223818294704) {
                        if (features[1] <= 0.4410252124071121) {
                            if (features[0] <= -0.034201690927147865) {
                                classes[0] = 1971; 
                                classes[1] = 653; 
                            } else {
                                classes[0] = 2273; 
                                classes[1] = 234; 
                            }
                        } else {
                            if (features[3] <= 1.035286784172058) {
                                classes[0] = 1973; 
                                classes[1] = 195; 
                            } else {
                                classes[0] = 9665; 
                                classes[1] = 144; 
                            }
                        }
                    } else {
                        if (features[2] <= 0.016115683130919933) {
                            if (features[1] <= 0.4877214878797531) {
                                classes[0] = 2990; 
                                classes[1] = 137; 
                            } else {
                                classes[0] = 1448; 
                                classes[1] = 18; 
                            }
                        } else {
                            if (features[0] <= -0.04386013746261597) {
                                classes[0] = 7991; 
                                classes[1] = 130; 
                            } else {
                                classes[0] = 7008; 
                                classes[1] = 44; 
                            }
                        }
                    }
                }
            }
        }
    
        return findMax(classes);
    };

};

function predict(NBSI, NDVI, NDVI_RE3, CL_RE){
    var clf = new DecisionTreeClassifier();
    return [1/(1+Math.exp(-1*clf.predict([NBSI, NDVI, NDVI_RE3, CL_RE])))]; 
}