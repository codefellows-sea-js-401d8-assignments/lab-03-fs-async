const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();
const argsArr = process.argv.slice(2);

var fileReader = module.exports = function() {
  var filesArr = ['./lib/one.txt', './lib/two.txt', './lib/three.txt'];
  ee.on('next file', function(data) {
    if(data) console.log(data.toString());
    if(filesArr.length === 0) return;
    fs.readFile(filesArr.shift(), function(err, data) {
      if(err) return console.log(err);
      ee.emit('next file', data);
    });
  });
  ee.emit('next file');
};

var CLReader = module.exports = function() {
  ee.on('next arg', function(data) {
    if(data) console.log(data.toString());
    if(argsArr.length === 0) return;

    fs.readFile(argsArr.shift(), function(err, data) {
      if(err) return console.log(err);
      ee.emit('next arg', data);
    });
  });
  ee.emit('next arg');
};


if(process.argv[2]) CLReader();

if(process.argv[2] === undefined) fileReader();
