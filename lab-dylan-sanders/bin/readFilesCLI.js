#!/usr/bin/env node
var readFiles = require('../lib/readFiles');

var readFilesCli = function(writeStream) {
  writeStream = writeStream || process.stdout;
  var files = process.argv.slice(2);
  readFiles(files, (err, data) => {
    if (err) return writeStream.write('error: ' + err);
    data.forEach(function(file) {
      writeStream.write(file.toString());
    });
  });
};

readFilesCli();
