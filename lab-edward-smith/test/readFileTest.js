const chai            = require('chai');
const expect          = chai.expect;
const chaiAsPromised  = require('chai-as-promised');
const fs              = require('fs');
const readFiles       = require('../lib/readFiles');
const Promise         = require('promise');

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
    var p1 = readFiles.readFile(__dirname + '/first.txt');
    var p2 = readFiles.readFile(__dirname + '/second.txt');
    var p3 = readFiles.readFile(__dirname + '/third.txt');
    return Promise.all([p1, p2, p3]).then(function(values) {
      expect(values[0]).to.eql(fileData[0]);
      expect(values[1]).to.eql(fileData[1]);
      expect(values[2]).to.eql(fileData[2]);
    })


  })

})
