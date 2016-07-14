const readFiles = require('./readFiles.js');

var fileList = process.argv.slice(2);

function doIt(arr){
  console.log(readFiles(arr));
}

doIt(fileList);
