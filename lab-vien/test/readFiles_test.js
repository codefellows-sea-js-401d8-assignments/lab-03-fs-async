const expect = require('chai').expect;
const read = require('../lib/readFiles');

var files = ['./lab-vien/test/testTextFiles/text1.txt', './lab-vien/test/testTextFiles/text4.txt', './lab-vien/test/testTextFiles/text3.txt'];

var correctOutput = ['text1\n', 'text4\n', 'text3\n'];

describe('the readFiles function', function() {
  it('should read from the array of files in the input then output correspondingly', function(done) {
    read(files, function(readOutput) {
      // stuff is supposed to be the output array
      // testing output array length against input array length
      expect(readOutput.length).to.eql(files.length);
      done();
    }, process.stdout);
  });
});

describe('the readFiles function', function() {
  it('should read from the array of files in the input then output correspondingly, the output needs to be in the right order', function(done) {
    read(files, function(readOutput){
      readOutput.forEach(function(item) {
        expect(item).to.equal(correctOutput[readOutput.indexOf(item)]);
      });
      done();
    }, process.stdout);
  });
});
