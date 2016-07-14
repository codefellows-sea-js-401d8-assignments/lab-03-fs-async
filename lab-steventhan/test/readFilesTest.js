const expect = require('chai').expect;
const readFilesEE = require('../lib/readFiles');

describe('readFile event emitter', () => {
  before(() => {
    this.argvBackup = process.argv;
    process.argv = [null, null, './lib/file1.txt', './lib/file2.txt', './lib/file3.txt'];
  });

  after(() => {
    process.argv = this.argvBackup;
  });

  it('should read all the files passed in', () => {
    // readFilesEE.emit('readFileDone');
    console.log(readFilesEE.files);
    // expect(readFilesEE.files).to.eql(3);
  });
});
