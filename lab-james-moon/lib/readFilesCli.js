const fs = require('fs');

var allFiles = function() {
  return process.argv.slice(2);
};

var files = allFiles();

var printContents = function() {
  for (var i = 0; i < files.length; i++) {
    fs.readFile(files[i], function(err, data) {
      if (err) return console.log(err);
      console.log(data.toString());
      if(files.length === 0) return;
    });
  }
};

printContents();
