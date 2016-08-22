var fs = require('fs'),
  filePath = '../lib/sample_file.js';
var contents = fs.readFileSync(filePath, 'utf8');
if (contents.isBuffer()) {
  return contents.toString('utf8');
}
console.log(contents);
