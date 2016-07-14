const fs = require('fs');

var createContentsArray = function (array) {
  var fileContentsArray = [];
  array.forEach(function(file) {
    process.nextTick(() => {
      fs.readFile(file, function(err, data) {
        if (err) return console.log(err);
        fileContentsArray.push(data.toString());
      });
    });
  });
  return fileContentsArray;
};
