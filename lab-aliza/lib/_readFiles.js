'use strict';

const fs = require('fs');

const readFiles = function(fileArr, cb, writeStream) {
  let fileData = [];
  let count = 0;
  writeStream = writeStream || process.stdout;
  fileArr.forEach((file) => {
    fs.readFile(file, (err, data) => {
      fileData[fileArr.indexOf(file)] = data.toString();
      count++;
      if(fileArr.length === count) {
        writeStream.write(fileData.toString());
        if(cb) {
          cb(fileData);
        }
      }
    });
  });
};

module.exports = readFiles;
