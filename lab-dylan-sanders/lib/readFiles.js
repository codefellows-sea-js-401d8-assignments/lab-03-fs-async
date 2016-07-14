const fs = require('fs');
var EventEmitter = require('events');
var EE = new EventEmitter();

var files = ['one.txt', 'two.txt', 'three.txt'];

var readFiles = exports = module.exports = function() {
  var one = files[0];
  var two = files[1];
  var three = files[2];
  one = readFile(one);
  two = readFile(two);
  three = readFile(three);
  console.log(one);

  return [one, two, three];
};

function readFile(file) {
  fs.readFile(file, (err, data) => {
    if (err) return console.log(err);
    EE.emit('file-read', data);
    return data.toString();
  });
}

EE.on('file-read', function(content) {
  if (content) {
    console.log(content.toString());
  }
});

readFiles();
