#!/usr/bin/env node

const readFiles = require('../lib/_readFiles');

var readFilesCLI = function(fileArr, cb, writeStream) {
  writeStream = writeStream || process.stdout;
  var fileArgs = process.argv.slice(2);
  readFiles(fileArgs, cb, writeStream);
};

readFilesCLI();

module.exports = readFilesCLI;
