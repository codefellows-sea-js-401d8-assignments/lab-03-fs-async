const expect = require('chai').expect;
const readFiles = require('../lib/readFiles');

describe('file test', function() {
  it('should read and return the file contents', function() {

    expect(readFiles(['one.txt', 'two.txt', 'three.txt'])).to.eql(3);
  });

  describe('aysnc test', function() {
    it('test file output order', function() {


    });
  });

});
