const fs       = require('fs');
const readFiles = exports = module.exports = {};

readFiles.read = function(files) {
  var fileArray = [];
  var newFiles = files.map((file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) =>{
        if (err) reject(console.log(err));
        resolve(data.toString());
      });
    });
  });
  return newFiles;
};

readFiles.process = function(files) {
  var fileArray = [];
  Promise.all(this.read(files)).then(value => {
    fileArray.push(value);
  }).then(() => {
    console.log(fileArray);
  }).catch((err) => {
    console.log(err)
  });
}
