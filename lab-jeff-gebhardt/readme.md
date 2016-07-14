**A terminal with 'node' and 'npm' is required to run this program.**

All dependencies can be installed by running the command 'npm install' in your terminal from the directory 'lab-jeff-gebhardt'.

Next simply type the command 'gulp' to run the linter and tests. If the linter fails, the tests will not be run.

Their are two modules for reading files, one called 'readFiles' and one called 'readFilesAsync'. They both read the files asynchronously, 'readFiles' does not return the files back in order and 'readFilesAsync' does return the files in order but uses the library 'async'.

To test from the terminal, simply run this command from the root of lab-jeff-gebhardt: node index.js ./lib/fileOne.txt ./lib/fileTwo.txt ./lib/fileThree.txt
