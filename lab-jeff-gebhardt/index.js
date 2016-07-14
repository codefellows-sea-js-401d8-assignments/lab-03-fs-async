// var readFiles = require('./lib/readFiles.js');
const readFilesAsync = require('./lib/readFilesAsync');

var filesArray = [];

var fileArgs = process.argv.slice(2);

fileArgs.forEach(function(arg){
  filesArray.push(arg);
});

// readFiles(filesArray);
readFilesAsync(filesArray);
