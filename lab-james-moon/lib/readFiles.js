const fs = require('fs');
var EE = require('events');

var ee = new EE();
var files = ['first-file.txt', 'second-file.txt', 'third-file.txt'];

ee.on('filecontents', function(data) {
  if(data) console.log(data.toString());
  if(files.length === 0) return;

  fs.readFile(files.shift(), function(err, data) {
    if(err) return console.log(err);
    ee.emit('filecontents', data);
  });
});

ee.emit('filecontents');
