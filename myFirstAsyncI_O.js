//Completed October 22, 2015
//learnyounode myFirstAsyncI_O

var fs = require('fs');

//get the file path from the index 2 element of the argv array
name=process.argv[2];

//use nonblocking code to get and use filecontents
var doneReading = function(error, fileContents){
	if (error) return console.error(error);
	var str = fileContents.toString();
	var arr=str.split('\n');
    console.log(arr.length-1);
	
}

fs.readFile(name, doneReading);










