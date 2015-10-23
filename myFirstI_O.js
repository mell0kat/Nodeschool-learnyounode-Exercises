//Completed October 22, 2015
//learnyounode myFirstI_O


var fs = require('fs');

//get the file path from the index 2 element of the argv array
var str = fs.readFileSync(process.argv[2]).toString();

 //Split str at new lines
var arr=str.split('\n');

//(arr.length-1) equals number of newlines
console.log(arr.length-1);

