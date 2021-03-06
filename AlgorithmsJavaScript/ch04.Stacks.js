/******************************************************************************/

// Stack

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;

  function push(element) {
    this.dataStore[this.top++] = element;
  }
  function peek() {
    return this.dataStore[this.top-1];
  }
  function pop() {
    return this.dataStore[--this.top];
  }
  function clear() {
    this.top = 0;
  }
  function length() {
    return this.top;
  }
}

/******************************************************************************/

// Example - Converting bases

function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

/******************************************************************************/

// Example - Palindromes

function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word === rword)  {
    return true;
  } else {
    return false;
  }
}

/******************************************************************************/

// Example - Recursion

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Simulate recursive processes using a stack

function fact(n) {
  var s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log(factorial(5));
console.log(fact(5));
