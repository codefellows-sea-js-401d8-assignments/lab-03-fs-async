const Promise  = require('promise');
const fs       = require('fs');

const readFiles = exports = module.exports = {};


readFiles.readFile = function(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, (err, data) => {
      if (err) reject(console.log(err));

      resolve(data.toString());
    });
  });
};
