'use strict';

const fs = require('fs');

module.exports = function(fileArray, cb) {
  let total = fileArray.length;
  let finished = 0;
  let fileData = [];
  let fileFinished = function(options) {
    finished++;
    fileData[options.position] = options.data;
    if (finished === total) cb(null, fileData);
  };
  for (let i = 0; i < total; i++) {
    fs.readFile(fileArray[i], function(err, data) {
      if (err) return cb(err);
      fileFinished({position: i, data: data});
    });
  }
};
