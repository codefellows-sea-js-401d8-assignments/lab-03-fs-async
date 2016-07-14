const expect = require('chai').expect;
const readFiles = require('../readFiles');
const fileOne = require('../lib/one.txt');
const fileTwo = require('../lib/two.txt');
const fileThree = require('../lib/three.txt');


describe('reading files', () => {
  before(() => {
    readFiles();
  });
  it('should read files in order', (done) => {
    expect(readFiles()).to.eql(fileOne.toString() + fileTwo.toString() + fileThree.toString());
    done();
  });
});
