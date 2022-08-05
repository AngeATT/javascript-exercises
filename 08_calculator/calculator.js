const add = function(a, b ) {
  return a+b;
};

const subtract = function(number_one, number_two) {
return number_one-number_two;
	
};

const sum = function(array1) {
	let somme = 0
  for (let i of array1) somme+=i;

  return (array1.length >= 1) ? somme : 0;
};

const multiply = function(array1) {
  let result =1
  for (let number of array1) result*= number;

  return (array1.length == 0) ? 0 : result;

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(a) {
  let somme = 1;
  if(!isNaN(a)){
    while ( a > 1 ){
    somme = somme*a;
    a--;
  }}
  return somme;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
