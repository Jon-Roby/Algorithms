// /******************************************************************************/
//
// // Definition of Array
// // The standard definition for an array is a linear collection of elements, where
// // the elements can be accessed via indices.
//
// // JavaScript Array
// // A JS array is actually a specialized type of JS object, with the indices being
// // property names that be integers used to represent offsets. Because JS arrays
// // are just objects, they are not quite as efficient as the arrays of other
// // programming languages.
//
// /******************************************************************************/
//
// // Creating Arrays
// var numbers = [];
// var numbers = [0,1,2,3,4]
//
// var numbers = new Array();
// var numbers = new Array(0,1,2,3,4);
//
// // Verify Array
// console.log(Array.isArray(numbers));
//
// // Arrays are passed by reference and not value
//
// // Shallow Copy
// var nums = [];
// for (var i = 0; i < 10; i++) {
//   nums[i] = i + 1;
// }
// var samenums = nums;
//
// // Deep Copy
// function copy(arr1, arr2) {
//   for (var i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[i];
//   }
// }
//
// /******************************************************************************/
//
// // Accessor Functions - It doesn't mutate the original arrays.
//
// // indexOf / lastIndexOf
// // indexOf looks to see if the argument passed to the function is found in the
// // array. If so, the function returns the index position, if not, it returns -1.
// // It only returns the first occurrence.
//
// // join()
//
// // toString()
//
// // concat()
// var arr1 = [0,1,2];
// var arr2 = [3,4,5];
//
// var arr3 = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
//
// // splice()
// var arr1 = [0,1,2,3,4,5,6,7,8,9];
// var arr2 = arr1.splice(3,2);
// console.log(arr1);
// console.log(arr2);
//
// /******************************************************************************/
//
// // Mutator Functions
//
// // .push() / .pop() / .unshift() / .shift()
//
// var arr1 = [5,6,7,8];
//
// arr1.push(1); // Adds to end
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// arr1.unshift(2); // Adds to beginning
// console.log(arr1);
//
// // .splice()
// // To add/remove elements to an array using splice
// // A) The starting index
// // B) The number of elements to remove (0 when you are adding)
// // C) The elements you want to add
//
// var arr1 = [0,1,2,3,4,5,6,7,8,9];
// var arr2 = arr1.splice(2,3);
// console.log(arr1);
// console.log(arr2);
//
// var arr1 = [0,1,2,3,4,5,6,7,8,9];
// var arr2 = ["spliced", "array"];
// var arr3 = arr1.splice(2, 0, arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
//
// // .reverse
//
// // sort() - Sorts lexicographically, so to sort numbers:
// function compare(num1, num2) {
//   return num1 - num2;
// }
//
// var nums = [3, 1, 2, 100, 4, 200];
// nums.sort(compare);
// console.log(nums);
//
// /******************************************************************************/
//
// // Iterator Functions
//
// // .forEach()
// var arr1 = [0, 1, 2];
// var arr2 = arr1.forEach(function(x) {
//   return x * 4;
// });
//
// console.log(arr1);
// console.log(arr2);
//
//
// // .every()
//
// // .some()
//
// // .reduce()
// function add(runningTotal, currentValue) {
//   return runningTotal + currentValue;
// }
//
// // .reduceRight()
//
// // Iterator Functions that return new arrays:
//
// // .map()
//
// // .filter()

/******************************************************************************/

// Two Dimensional Arrays

// To create (problematic way):
var twod = [];
var rows = 5;
for (var i = 0; i < rows; i++) {
  twod[i] = [];
}

// JS Good Parts Way (this also works for jagged arrays):
Array.matrix = function(numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i < numrows; i++) {
    var columns = [];
    for (var j = 0; j < numcols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]);

var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]]
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; row++) {
  for (var col = 0; col < grades[row].length; col++) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}

// Arrays can also consist of objects and all the functions and properties of
// arrays work with objects

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function displayPts(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].x + ", " + arr[i].y);
  }
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i < points.length; ++i) {
       console.log("Point " + parseInt(i+1) + ": " + points[i].x + ", " +
             points[i].y);
}
var p5 = new Point(12,-3);
points.push(p5); console.log("After push: ");
displayPts(points);
points.shift();
console.log("After shift: ");
displayPts(points);
