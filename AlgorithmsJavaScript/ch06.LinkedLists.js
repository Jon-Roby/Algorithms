/******************************************************************************/

// Linked Lists

// The main problem with using JS arrays is that arrays in JS are implemented
// as objects, casuing them to be less efficient than arrays built in other
// languages.

// When you determine that the operations performed on an array are too slow for
// practical use, you can consider using the linked list as an alternative data
// structure. The linked list can be used in almost every situation where a one
// dimensional array is used, except when you need random access to elements of
// a list.

// Definition
// A linked list is a collection of objects called nodes. Each node is linked
// to a successor node in the list using an object reference. The reference to
// another node is called a link.

/******************************************************************************/

function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;

  function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      currNode = currNode.next;
    }
  }

  function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
}

var cities = new LList();
cities.insert("A", "head");
cities.insert("B", "A");
cities.insert("C", "B");

/******************************************************************************/
