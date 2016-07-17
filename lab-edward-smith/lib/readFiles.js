const fs       = require('fs');
const readFiles = exports = module.exports = {};

readFiles.read = function(files) {
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

readFiles.process = function(files, cb) {
  Promise.all(this.read(files)).then(value => {
    var fileArray = [];
    fileArray.push(value);
    cb(null, files);
  }).catch((err) => {
    console.log(err);
  });
};
