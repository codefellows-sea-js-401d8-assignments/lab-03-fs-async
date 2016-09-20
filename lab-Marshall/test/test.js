const expect = require('chai').expect;
const fs = require('fs');
const readFiles = require('../lib/readFiles');

describe('async read files?', function() {
  before(function(done) {
    fs.readFile(__dirname + '/one.txt', (err, data) => {
      fs.readFile(__dirname + '/two.txt', (err, data) => {
        fs.readFile(__dirname + '/three.txt', (err, data) => {
          done();
        });
      });
    });
  });

  it('logs txt in order?', function(done) {
    readFiles([__dirname + '/one.txt', __dirname + '/two.txt', __dirname + '/three.txt'], function(err, txt) {
      expect(txt[0].toString()).to.eql('This should be logged first\n');
      expect(txt[1].toString()).to.eql('This should be logged second\n');
      expect(txt[2].toString()).to.eql('This should be logged third\n');
      done();
    });
  });
});
