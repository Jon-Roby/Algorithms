/******************************************************************************/

// Value returning function
function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; i--) {
    product *= i;
  }
  return product;
}

/******************************************************************************/

// A subprocedure or void function
function curve(arr, amount) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += amount;
  }
}

/******************************************************************************/

// Variable Scope
//   The scope of a variable refers to where in a program a variable's value can
// be accessed. The scope of a variable in JS is defined as function scope.
// This means that a variable's value is visible within the function definition
// where the variable is declared and defined and within any functions that are
// nested within that function.
//   When a variable is defined outside of a function, in the main program, the
// variable is said to have global scope, which means its value can be accessed
// by any part of a program, including functions.

function showScope() {
  var localScope = "local"

  return [globalScope, localScope];

}

var globalScope = "global";
console.log(globalScope); // displays "global"
console.log(showScope()); // displays "global"

/******************************************************************************/

// Recursion
function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));

/******************************************************************************/

// Objects

function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  this.balance += amount;
}

function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }

  if (amount > this.balance) {
    console.log("Insufficient funds");
  }
}

function toString() {
  return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());
