const DoublyLinkedList = require('../data-structures/DoublyLinkedList');

const list = new DoublyLinkedList();
// console.log(list.push(1));
// console.log(list.push(2));
// console.log(list.push(3));
// console.log(list.toArray());

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.toArray());

console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
console.log(list.toArray());

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.toArray());


// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));


// console.log(list.set(0, 'START'));
// console.log(list.toArray());

// console.log(list.insert(0, 'START'));
// console.log(list.toArray());

console.log(list.remove(2));
console.log(list.toArray());