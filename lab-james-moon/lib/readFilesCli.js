const fs = require('fs');
var EE = require('events');

var ee = new EE();

var allFiles = function() {
  return process.argv.slice(2);
};

var files = allFiles();

ee.on('file-contents', function(data) {
  if(data) console.log(data.toString());
  if(files.length === 0) return;

  process.nextTick(() => {
    fs.readFile(files.shift(), function(err, data) {
      if(err) return console.log(err);
      ee.emit('file-contents', data);
    });
  });
});

ee.emit('file-contents');
