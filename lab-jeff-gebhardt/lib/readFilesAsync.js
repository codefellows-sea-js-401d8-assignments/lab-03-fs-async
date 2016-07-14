var async = require('async');
var fs = require('fs');

var fileResults = [];

module.exports = exports = function output(files){
  async.map(files, fs.readFile, function(err, results){
    if (err) console.log(err);
    fileResults.push(results.toString());
    console.log(fileResults);
  });
};
