const fs = require('fs');

var filesData = [];
var filesCounter = 0;

module.exports = exports = function output(files){
  files.forEach(function(file){
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      filesData.push(data.toString());
      ++filesCounter;
      if (filesCounter == (files.length + 1)) console.log(filesData);
    });
  });
};
