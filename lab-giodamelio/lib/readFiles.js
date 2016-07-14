const fs = require('fs');
const EE = require('events');

// Read an array of filepaths and return them as an array
const readFiles = function(files, callback) {
  var array = [];
  const ee = new EE();
  ee.on('filesRead', function(data){
    if(data) {
      array.unshift(data.toString());
    }

    if(files.length == 0) {
      callback(array);
      return;
    }

    fs.readFile(files.pop(), function(err, data){
      if(err) return console.log(err);
      ee.emit('filesRead', data);
    });
  });
  ee.emit('filesRead');
};

module.exports = readFiles;
