const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();
const argsArr = process.argv.slice(2);
const readFiles = require('../readFiles');
const fileOne = require('../lib/one.txt');
const fileTwo = require('../lib/two.txt');
const fileThree = require('../lib/three.txt');
const expect = require('chai').expect;
const fs = require('fs');

describe('reading files', () => {
  before((done) => {
    ee.on('next arg', function(data) {
      if(data) console.log(data.toString());
      if(argsArr.length === 0) return;
      fs.readFile(argsArr.shift(), function(err, data) {
        if(err) return console.log(err);
        ee.emit('next arg', data);
      });
    });
    ee.emit('next arg');
    done();
  });
  it('should read files in order', (done) => {
    expect(readFiles).to.eql(fileOne, fileTwo, fileThree);
    done();
  });
});
