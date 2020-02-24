const minify = require("minify");
const fs = require("fs-extra");
const os = require('os');
const LineReader = require("linereader");

var distfolder = 'dist';

if (!fs.existsSync(distfolder)) {
  fs.mkdirSync(distfolder);
}

const srcFile = "./src/script.js";
const dstFile = "./" + distfolder + "/script.min.js";
const tempFile = "./" + distfolder + "/script.tmp.js";
const lr = new LineReader(srcFile, { encoding: 'utf8' });
const returnText = "return getValue(PARAMS);";
var writeThis = false;
const paramLines = [];
const lines = [];


lr.on('line', function (lineno, line) {
  if (line.trim() === '//* PARAMS END') {
    writeThis = true;
  }
  if (writeThis === false) {
    paramLines.push(line);
  }
  if (writeThis && line.trim() !== returnText && line.trim().length > 0) {
    lines.push(line);
  }
});

lr.on('end', function () {
  let stringContent = '';
  lines.forEach(function (line) {
    stringContent = stringContent + os.EOL + line;
  });
  fs.writeFileSync(tempFile, stringContent, function (err) {
    if (err) {
      console.log(err);
    }
  });
  doMinify();
});

function doMinify() {
  minify(tempFile)
    .then(minified => {
      fs.unlinkSync(tempFile);
      let finalContent = '';
      paramLines.forEach(function (line) {
        finalContent = finalContent + os.EOL + line;
      });
      finalContent = finalContent + os.EOL + minified + returnText + os.EOL;
      fs.writeFile(dstFile, finalContent, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    })
    .catch(console.error);
}
