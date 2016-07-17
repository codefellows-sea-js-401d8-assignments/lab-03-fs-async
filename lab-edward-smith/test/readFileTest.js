const chai            = require('chai');
const expect          = chai.expect;
const chaiAsPromised  = require('chai-as-promised');
const fs              = require('fs');
const readFiles       = require('../lib/readFiles');

chai.use(chaiAsPromised);

describe('files should be read async', function() {
  var fileData = [];
  before(function(done) {
    fs.readFile(__dirname + '/first.txt', function(err, data) {
      fileData.push(data.toString());
      fs.readFile(__dirname + '/second.txt', function(err, data) {
        fileData.push(data.toString());
        fs.readFile(__dirname + '/third.txt', function(err, data) {
          fileData.push(data.toString());
          done();
        });
      });
    });
  });

  it('should read the files in the order which they were passed', function() {
    var fileArray = [__dirname + '/first.txt', __dirname + '/second.txt', __dirname + '/third.txt'];
    readFiles.process(fileArray, function(err, data) {
      expect(data).to.eql(fileData);
    });
  });
});
