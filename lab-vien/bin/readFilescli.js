var read = require('../lib/readFiles');

var readFilescli = exports = module.exports = function(fileArr, callback, writeStream) {
  writeStream = writeStream || process.stdout;
  var fileArgs = process.argv.slice(2);
  read(fileArgs, callback);
  // read(fileArgs).done(function() {
  //   console.log(fileData);
  // });
};

readFilescli();
