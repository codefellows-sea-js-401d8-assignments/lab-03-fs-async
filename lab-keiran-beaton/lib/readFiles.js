'use strict';
const fs = require('fs');
module.exports = exports = function(fileList, cb) {
  let filesData = [];
  let numDone = 0;
  let totalNum = fileList.length;
  var fileDone = function(opts) {
    filesData[opts.position] = opts.data;
    numDone++;
    if (numDone === totalNum) cb(null, filesData);
  };
  for (let i = 0; i < fileList.length; i++) {
    fs.readFile(fileList[i], function(err, data) {
      if (err) return cb(err);
      fileDone({position: i, data: data});
    });
  }
};
