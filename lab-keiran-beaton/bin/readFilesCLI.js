#!/usr/bin/env node
var readFiles = require('../lib/readFiles');

var readFilesCli = function(writeStream) {
  var files = process.argv.slice(2);
  writeStream = writeStream || process.stdout;
  readFiles(files, function(err, data) {
    if (err) return writeStream.write(err);
    data.forEach(function(data) {
      writeStream.write(data.toString());
    });
  });
};

readFilesCli();
