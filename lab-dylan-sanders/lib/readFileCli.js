const fs = require('fs');
var EventEmitter = require('events');
var EE = new EventEmitter();

var files = process.argv.slice(2);

EE.on('file', function(data) {
  if(data) {
    console.log(data.toString());
  }
  if (files.length !== 0) {
    fs.readFile(files.shift(), function(err, data) {
      if (err) console.log(err);
      EE.emit('file', data);
    });
  }
});

if (files.length !== 0) EE.emit('file');
