const fs = require('fs');
const EE = require('events');

const ee = new EE();

const readFiles = function(files, callback) {
  var filesArray = [];
  ee.on('filesRead', function(data){
    if (data) filesArray.unshift(data.toString());
    if (files.length == 0) {
      return callback(null, filesArray);
    }

    fs.readFile(files.pop(), function(err, data){
      if (err) return console.log(err);
      ee.emit('filesRead', data);
    });
  });
  ee.emit('filesRead');
};

module.exports = readFiles;
