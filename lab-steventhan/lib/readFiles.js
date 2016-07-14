const fs = require('fs');
var EE = require('events');

var readFiles = {};
readFiles.ee = new EE();
readFiles.files = process.argv.slice(2);

readFiles.ee.on('readFileDone', (data) => {
  if (data) console.log(data.toString());
  if (readFiles.files.length === 0) return;
  fs.readFile(readFiles.files.shift(), (err, data) => {
    if (err) console.log(err);
    readFiles.ee.emit('readFileDone', data);
  });
});

readFiles.ee.emit('readFileDone');

module.exports = readFiles;
