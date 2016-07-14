var read = require('../lib/readFiles');

var readFilescli = exports = module.exports = function(fileArr, writeStream) {
  writeStream = writeStream || process.stdout;
  var fileArgs = process.argv.slice(2);
  read(fileArgs);
  // read(fileArgs).done(function() {
  //   console.log(fileData);
  // });
};

readFilescli();
