const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();
const argsArr = process.argv.slice(2);

var filesArr = ['./lib/one.txt', './lib/two.txt', './lib/three.txt'];

ee.on('next file', function(data) {
  if(data) console.log(data.toString());
  if(filesArr.length === 0) return;

  fs.readFile(filesArr.shift(), function(err, data) {
    if(err) return console.log(err);
    ee.emit('next file', data);
  });
});

ee.on('next arg', function(data) {
  if(data) console.log(data.toString());
  if(argsArr.length === 0) return;

  fs.readFile(argsArr.shift(), function(err, data) {
    if(err) return console.log(err);
    ee.emit('next arg', data);
  });
});

if(process.argv[2]) ee.emit('next arg');

if(process.argv[2] === undefined) ee.emit('next file');
