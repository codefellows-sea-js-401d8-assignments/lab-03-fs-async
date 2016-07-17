const readFiles = require('../lib/readFiles');
const files = process.argv.slice(2);

readFiles.process(files);
