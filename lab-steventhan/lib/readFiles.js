const fs = require('fs');
var EE = require('events');

var files = process.argv.slice(2);

var ee = new EE();

ee.on('readFileDone', (data) => {
  if (data) console.log(data.toString());
  if (files.length === 0) return;
  fs.readFile(files.shift(), (err, data) => {
    if (err) console.log(err);
    ee.emit('readFileDone', data);
  });
});

ee.emit('readFileDone');
