/******************************************************************************/

// In order to design an ADT for a list, we have to provide a definition of the
// list, including its properties, as well as the operators performed on it and
// by it.

// A list is an ordered sequence of data. Each data item stored in a list is
// called an element.

// A list with no elements is an empty list. The number of elements stored in a
// list is called the length of the list. Internally, the number of elements in
// a list is kept in a listSize variable. You can append an element to the end
// of a list, or you can insert an element into a list after an existing element
// or at the beginning of a list. Elements are deleted from a list using a
// remove operation. You can also clear a list so that all of its current
// elements are removed.

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;

  function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  function append(element) {
    this.dataStore[this.listSize++] = element;
  }

  function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize--;
      return true
    }
    return false;
  }

  function length() {
    return this.listSize;
  }

  function toString() {
    return this.dataStore;
  }

  function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos+1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true;
      }
    }
    return false;
  }

  function front() {
    this.pos = 0;
  }

  function end() {
    this.pos = this.listSize-1;
  }

  function prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  function next() {
    if (this.pos < this.listSize-1) {
      ++this.pos;
    }
  }
  function currPos() {
    return this.pos;
  }

  function moveTo(position) {
    this.pos = position;
  }

  function getElement() {
    return this.dataStore[this.pos];
  }
}

var fs = require('fs');

function createArr(file) {
  var arr = fs.readFileSync(file, 'utf8').split("\n");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      print(list.getElement()["name"] + ", " + list.getElement()["movie"]);
    } else {
      print(list.getElement());
    }
  } 
}

var movies = createArr('./films.txt');
// var movies = fs.readFileSync('./films.txt', 'utf8', function(err, data) {
//   if (err) return console.log(err);
//
// }).split("\n");
console.log(movies);
var names = new List();
