const readFiles = require('../lib/readFiles');
const args = process.argv.slice(2);

readFiles.process(args, function(err, files) {
  console.log(files);
});
