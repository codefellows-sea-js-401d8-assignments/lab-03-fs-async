#!/usr/bin/env node
var readFiles = require(__dirname + '/../lib/readFiles');

var readFilesCli = exports = module.exports = function(array){
  array.forEach(function(file){
    process.nextTick(() => {
      console.log(file);
    });
  });
};

readFilesCli(readFiles);
