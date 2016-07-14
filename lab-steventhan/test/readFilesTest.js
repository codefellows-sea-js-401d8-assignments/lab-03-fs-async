// const expect = require('chai').expect;
const readFiles = require('../lib/readFiles');

describe('readFile event emitter', () => {
  // before(() => {
  //   this.argvBackup = process.argv;
  //   readFiles.files = [null, null, './lib/file1.txt', './lib/file2.txt', './lib/file3.txt'];
  // });
  //
  // after(() => {
  //   process.argv = this.argvBackup;
  // });

  it('should read all the files passed in', () => {
    readFiles.files = ['./lib/file1.txt', './lib/file2.txt', './lib/file3.txt'];
    console.log(readFiles);
    readFiles.ee.emit('readFileDone');
    // expect(readFiles.files).to.eql(3);
  });
});
