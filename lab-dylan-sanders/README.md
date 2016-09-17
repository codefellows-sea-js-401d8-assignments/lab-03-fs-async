readFile.js is a file reader module that exports the read file contents.
It takes an array of files to read. 

To start git clone the repo, then run from the repo root:
  `npm install`

To test and lint: 
  `gulp`

To test: 
  `mocha`

To use the readFilesCLI, first run to make the CLI read as executable: 
  `chmod +x bin/readFilesCLI.js`

Then to use the CLI type: 
  `./bin/readFilesCLI.js 'file path here' 'file path here'`

  example: `./bin/readFilesCLI.js test/one.txt test/two.txt test/three.txt`