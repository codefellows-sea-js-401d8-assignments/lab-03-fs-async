const expect = require('chai').expect;
var output = require('../lib/fileData');
const read = require('../lib/readFiles');

console.log(output);

var files = ['./lib/textfiles/text1.txt', './lib/textfiles/text4.txt', './lib/textfiles/text3.txt'];

var correctOutput = ['text1\n', 'text4\n', 'text3\n'];

describe('the readFiles function', function() {
  it('should read from the array of files in the input then output correspondingly', function(done) {
    read(files, function(stuff){
      // stuff is supposed to be the output array
      // testing output array length against input array length
      expect(stuff.length).to.eql(files.length);
      done();
    });
  });
});

describe('the readFiles function', function() {
  it('should read from the array of files in the input then output correspondingly', function(done) {
    read(files, function(stuff){
      stuff.forEach(function(item) {
        expect(item).to.equal(correctOutput[stuff.indexOf(item)]);
      });
      done();
    });
  });
});
