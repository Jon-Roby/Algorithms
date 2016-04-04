/******************************************************************************/

// Queues

// A Queue is a type of list where data are inserted at the end are removed from
// the front. They're used to store data in which they occur, as opposed to a
// stack, in which the last piece of data entered is the first element used for
// processing. Similar to a bank. First one in is first one out. FIFO.

/******************************************************************************/

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;

  function enqueue(element) {
    this.dataStore.push(element);
  }

  function dequeue() {
    return this.dataStore.shift();
  }

  function front() {
    return this.dataStore[0];
  }

  function back() {
    return this.dataStore[this.dataStore.length-1];
  }

  function toString() {
    var ret = "";
    for (var i = 0; i < this.dataStore.length; i++) {
      ret += this.dataStore[i] + "\n";
    }
    return ret;
  }
}


/******************************************************************************/
