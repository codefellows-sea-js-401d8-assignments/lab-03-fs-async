const readFiles = require('../lib/readFiles');


const files = process.argv.slice(2);
const fileArray = [];

var promise = readFiles.readFile(files[0]);
promise.then(function(data) {
  fileArray.push(data);
  return readFiles.readFile(files[1]);
}).then(function(data) {
  fileArray.push(data);
  return readFiles.readFile(files[2]);
}).then(function(data) {
  fileArray.push(data);
}).then(function() {
  console.log(fileArray);
}).catch(function(error) {
  console.log(error);
});
