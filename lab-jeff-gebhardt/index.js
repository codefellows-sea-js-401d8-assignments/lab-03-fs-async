var readFiles = require('./lib/readFiles.js');

var filesArray = ['lib/fileOne.txt', 'lib/fileTwo.txt', 'lib/fileThree.txt'];

console.log('Reading files...');
readFiles(filesArray, 3);
process.nextTick(() => {
  console.log('Finished!');  
});
