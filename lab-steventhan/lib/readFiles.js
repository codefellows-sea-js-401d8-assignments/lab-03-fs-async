const fs = require('fs');
const Promise = require('bluebird');

var files = process.argv.slice(2);

files.forEach((file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  }).then((data) => {
    console.log(data.toString());
  }).catch((err) => {
    console.log(err);
  });
});
