var fs = require('fs');
fs.readFile('soubor.txt', function(err, data){
  console.log('A');
});
console.log('B');