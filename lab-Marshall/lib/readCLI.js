#!/usr/bin/env node

const read = require('./readFiles');

var files = process.argv.slice(2);

function CLI(txt){
  console.log(read(txt));
}

CLI(files);
