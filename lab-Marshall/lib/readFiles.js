const fs = require('fs');
const Event = require('events');
const ee = new Event();

var outputArray = [];

ee.on('read', (data) => {
  console.log('READ: ', data.toString());
});

const makeReadFile = module.exports = function(txt){
  return function(){
    fs.readFile(txt, (err, data) => {
      ee.emit('read', data);
      outputArray.push(makeReadFile(txt));
    });
  };
};

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
