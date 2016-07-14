const fs = require('fs');
var EE = require('events');

var ee = new EE();
ee.files = process.argv.slice(2);

ee.on('readFileDone', (data) => {
  if (data) console.log(data.toString());
  if (ee.files.length === 0) return;
  fs.readFile(ee.files.shift(), (err, data) => {
    if (err) console.log(err);
    ee.emit('readFileDone', data);
  });
});

ee.emit('readFileDone');

module.exports = ee;
