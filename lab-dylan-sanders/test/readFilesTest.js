'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const readFiles = require('../lib/readFiles.js');

describe('test file read', function() {
  var fileData = [];
  before(function(done) {
    fs.readFile(__dirname + '/one.txt', function(err, data) {
      fileData.push(data);
      fs.readFile(__dirname + '/two.txt', function(err, data) {
        fileData.push(data);
        fs.readFile(__dirname + '/three.txt', function(err, data) {
          fileData.push(data);
          done();
        });
      });
    });
  });

  it('should read and return an array file contents in order', function(done) {
    readFiles([__dirname + '/one.txt', __dirname + '/two.txt', __dirname + '/three.txt'], (err, fileArray) => {
      expect(fileData[0].toString()).to.eql(fileArray[0].toString());
      expect(fileData[1].toString()).to.eql(fileArray[1].toString());
      expect(fileData[2].toString()).to.eql(fileArray[2].toString());
      expect(err).to.eql(null);
      done();
    });
  });
});
