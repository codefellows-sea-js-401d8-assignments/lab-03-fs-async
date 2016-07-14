//initial commit
const fs = require('fs');
const Event = require('events');
const ee = new Event();

ee.on('read', (data) => {
  console.log('READ: ', data.toString());
});

function makeReadFile(txt){
  return function(){
    fs.readFile(txt, (err, data) => {
      ee.emit('read', data);
    });
  };
}

var one = makeReadFile('../text/one.txt');
var two = makeReadFile('../text/two.txt');
var three = makeReadFile('../text/three.txt');

process.nextTick(() => {
  one();
});

process.nextTick(() => {
  two();
});

process.nextTick(() => {
  three();
});
