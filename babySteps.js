//Completed October 22, 2015
//learnyounode babySteps

//access arguments using the process object
var arguments = process.argv.slice(2);

//sums up numbers 
arguments= arguments.map(function(digit){
	return parseInt(digit);
});
var total = arguments.reduce(function(a, b) {
  return a + b;
});

console.log(total);

