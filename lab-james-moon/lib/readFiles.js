const fs = require('fs');

var files = ['first-file.txt', 'second-file.txt', 'third-file.txt'];
var fileContentsArray = [];

var getContents = function() {
  for(var i = 0; i < files.length; i++) {
    fs.readFile(files[i], function(err, data) {
      var dataContents = data.toString();
      if(err) return console.log(err);
      fileContentsArray.push(dataContents);
      if(fileContentsArray.length === files.length) {
        console.log(fileContentsArray);
        return fileContentsArray;
      }
    });
  }
};

getContents();
