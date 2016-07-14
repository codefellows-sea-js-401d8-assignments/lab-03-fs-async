const fs = require('fs');
var output = require('./fileData');


// callback is used in testing
module.exports = exports = function readFiles(fileArr, callback, writeStream) {
  var count = 0;
  fileArr.forEach(function(file) {
    fs.readFile(file, function(err, data) {
      output[fileArr.indexOf(file)] = data.toString();

      count++;
      if(count === fileArr.length) {
        // console.log(output);
        output.forEach(function(item) {
          writeStream.write(item);
        });
        if(callback) {
          callback(output);
        }
      }
    });
  });
};
