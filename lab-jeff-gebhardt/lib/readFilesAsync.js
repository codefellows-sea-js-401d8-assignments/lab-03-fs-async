var async = require('async');
var fs = require('fs');

module.exports = exports = function output(files){
  async.map(files, fs.readFile, function(err, results){
    if (err) console.log(err);
    console.log(results.toString());
  });
};
