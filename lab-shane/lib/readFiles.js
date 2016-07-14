module.exports = exports = create;

const fs = require('fs');

var contentsArray = [];
var currentFile = 0;

function create(arr){
  arr.forEach(function(item){
    fs.readFile(item, function(err,data){
      if(err) return console.log(err);
      contentsArray[arr.indexOf(item)] = data.toString();
      currentFile++;
      if(currentFile === arr.length){
        return contentsArray;
      }
    });
  });
}
