const path = require('path');

const expect = require('chai').expect;

const readFiles = require('../lib/readFiles');

describe('readFiles()', function() {
  it('reads one file', function(done) {
    const files = ['file1.txt']
      .map((filename) => path.join(__dirname, filename));

    readFiles(files, function(data) {
      expect(data).to.eql(['file one\n']);
      done();
    });
  });

  it('reads multiple files', function(done) {
    const files = ['file1.txt', 'file2.txt', 'file3.txt']
      .map((filename) => path.join(__dirname, filename));

    readFiles(files, function(data) {
      expect(data).to.eql(['file one\n', 'file two\n', 'file three\n']);
      done();
    });
  });
});
