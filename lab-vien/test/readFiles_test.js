const expect = require('chai').expect;
var output = require('../lib/fileData');
const read = require('../lib/readFiles');

console.log(output);

var files = ['./lib/textfiles/text1.txt', './lib/textfiles/text4.txt', './lib/textfiles/text3.txt'];

describe('the readFiles function', function() {
  it('should read from the array of files in the input then output correspondingly', function(done) {
    read(files, function(stuff){
      expect(stuff.length).to.eql(files.length);
      done();
    });
  });
});
