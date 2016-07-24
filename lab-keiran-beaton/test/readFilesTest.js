const expect = require('chai').expect;
const fs = require('fs');
const readFiles = require('../lib/readFiles');

describe('read files asynchronously', function() {
  var fileData = [];
  before(function(done) {
    fs.readFile(__dirname + '/fileOne.txt', function(err, data) {
      fileData.push(data.toString());
      fs.readFile(__dirname + '/fileTwo.txt', function(err, data) {
        fileData.push(data.toString());
        fs.readFile(__dirname + '/fileThree.txt', function(err, data) {
          fileData.push(data.toString()) ;
          done();
        });
      });
    });
  });

  it('should read the files in order', function(done) {
    readFiles([__dirname + '/fileOne.txt', __dirname + '/fileTwo.txt', __dirname + '/fileThree.txt'], function(err, fileArr) {
      expect(err).to.eql(null);
      expect(fileArr[0].toString()).to.eql(fileData[0]);
      expect(fileArr[1].toString()).to.eql(fileData[1]);
      expect(fileArr[2].toString()).to.eql(fileData[2]);
      done();
    });
  });
});
