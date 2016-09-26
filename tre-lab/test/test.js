const expect = require('chai').expect;
const readFile = require('../lib/_readFiles');
const readFilescli = require('../bin/readCLI');

var files = ['../files/one.txt', '../files/two.txt', '../files/three.txt'];

describe('checking if file reader function is working', () => {
  it('the files should come out in the inputed order', function(done) {
    readFile(files, function(err, data) {
      console.log(data);
      expect(data).to.eql(['This is the first text file.\n', 'This is the second text file.\n', 'This is the third text file\n' ]);
    });
    done();
  });
});
describe('testing CLI', () => {
  before(() => {
    this.argv_backup = process.argv;
    process.argv = [null, null, 'test'];
  });

  after(() => {
    process.argv = this.argv_backup;
  });

  it('test if process argv is being read correctly.', () => {
    var testStream = {
      write: function(input) {
        expect(input).to.eql(readFile('test'));
      }
    };
    readFilescli(testStream);
  });
});
