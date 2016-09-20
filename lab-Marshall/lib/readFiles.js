'use strict';

module.exports = exports = readFile;

const fs = require('fs');

function readFile(txt, cb){
  var outputArray = [];
  var currentFile = 0;
  var total = txt.length;

  function fileCounter(opts){
    outputArray[opts.position] = opts.data;
    currentFile++;
    if (currentFile === total) cb(null, outputArray)
  };

  for (let i = 0; i < txt.length; i++) {
    fs.readFile(txt[i], function(err, data) {
      if (err) return cb(err);
      fileCounter({position: i, data: data});
    });
  }
}
