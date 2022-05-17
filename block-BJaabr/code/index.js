// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num) {
  return num + 1;
}
// - Write a Function Expression
let add = function addOne(num) {
   return num + 1;
}
// - Write an Arrow Function without curly brackets(if possible)
let add1 = num => num + 1;
// - Write an Arrow Function with curly brackets
let add2 = num => {
  return num + 1
}
// - Execute the function
addOne(23);
// - Execute the function and store the return value in a variable.
let returnValue1 = addOne(23)
// - What is the typeof returnValue
// typeof returnValue1 is "number"
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(num) {
  return num - 1;
}
// - Write a Function Expression
let sub = function addOne(num) {
  return num - 1;
}
// - Write an Arrow Function without curly brackets(if possible)
let sub1 = num => num - 1;
// - Write an Arrow Function with curly brackets
let sub2 = num => {
  return num - 1
}
// - Execute the function
substractOne(24);
// - Execute the function and store the return value in a variable.
let returnValue2 = substractOne();
// - What is the typeof returnValue
//typeof returnValue2 is "number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB) {
  return numA + numB;
}
// - Write a Function Expression
let sum = function sum(numA, numB) {
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sum = (numA,numB => {
  return numA + numB;
})
// - Execute the function
sum(20, 30);
// - Execute the function and store the return value in a variable
let returnValue3 = sum(20, 30);
// - What is the typeof returnValue
// typeof returnValue is "number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(numA, numA) {
  return numA * numA;
}
// - Write a Function Expression
let square = function sum(numA, numA) {
  return numA * numA;
}
// - Write an Arrow Function without curly brackets(if possible)
let square = (numA, numA) => numA * numA;
// - Write an Arrow Function with curly brackets
let square = (numA,numA) => {
  return numA * numA;
}
// - Execute the function
square(2, 2);
// - Execute the function and store the return value in a variable
let returnValue4 = square(2, 2);
// - What is the typeof returnValue
// typeof returnValue4 is "number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(numX, numY) {
  if (numX > numY) {
    return true;
  }else {
    return fasle;
  }
}
// - Write a Function Expression
let greater = function isGreater(numX, numY) {
  if (numX > numY) {
    return true;
  }else {
    return fasle;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
let greater1 = (numX, numY) => numX > numY ? true : false;
// - Write an Arrow Function with curly brackets
let greater2 = (numX, numY) => {
  if (numX > numY) {
    return true;
  }else {
    return fasle;
  }
}
// - Execute the function
isGreater(20, 15);
// - Execute the function and store the return value in a variable
let returnValue5 = isGreater(20, 15);
// - What is the typeof returnValue
// typeof returnValue5 is "number"
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number) {
  if(number % 2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}
// - Write an anonymous Function Expression
 let numbersAnonymous = function(number) {
  if(number % 2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
 }
// - Write an named Function Expression
let numbers = function oddOrEven(number) {
  if(number % 2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
 }
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let numbersArrow = (number) => number % 2 == 0 ? even : odd;
// - Write an Arrow Function with curly brackets
let numbers2 = (number) => {
  if(number % 2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}
// - Execute the function
oddOrEven(2)
// - Execute the function and store the return value in a variable
let returnValue6 = oddOrEven(2);
// - What is the typeof returnValue
// typeof returnValue6 "number"