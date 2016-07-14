const expect = require('chai').expect;
const readFiles = require('../lib/readFiles');
var readFilesCli = require('../bin/readFilesCli');

describe('readFiles', function() {
  it('should read every file in the array', function() {
    expect(process.argv.length).to.eql(readFiles.length);
  });
});

describe('readFilesCli', function() {
  it('should console.log the files in order', function() {
    for(var i = 0; i < process.argv.length; i++) {
      expect(readFilesCli(process.argv[i])).to.eql(process.argv[i].toString());
    }
  });
});
