var fs = require('fs');

var filesData = [];
var filesCounter = 0;

module.exports = exports = function output(files, totalFiles){
  files.forEach(function(file){
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      filesData.push(data.toString());
      ++filesCounter;
      if (filesCounter == totalFiles) console.log(filesData);
    });
  });
};
