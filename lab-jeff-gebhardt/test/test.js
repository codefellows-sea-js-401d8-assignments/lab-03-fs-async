const expect = require('chai').expect;
const readFilesAsync = require('../lib/readFilesAsync');

var filesArray = ['../lib/fileOne.txt', '../lib/fileTWo.txt', '../lib/fileThree.txt'];
readFilesAsync(filesArray);

describe('Read files inputted from the terminal(async)', function(){
  it('should return the content of each file in order', function(){
    expect(filesArray.length).to.equal(fileResults.length);
  });
});
