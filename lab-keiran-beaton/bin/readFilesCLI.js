#!/usr/bin/env node
var readFiles = require(__dirname + '/../lib/readFiles');

var readFilesCli = exports = module.exports = function(array){
  array.forEach(function(file){
    console.log(file);
  });
};

process.argv = readFiles;

readFilesCli(process.argv);
