const Counter = require("./lib/data-structures/Counter");

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
    
  const counter1 = new Counter(arr1);
  const counter2 = new Counter(arr2);
  return counter1
    .entries()
    .every(([el, count]) => counter2.get(el ** 2) === count);
};

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3, 3], [1, 4, 9, 9]));
console.log(same([1, 2, 4], [1, 4, 9]));
console.log(same([1, 2, 3], [1, 4, 4]));
console.log(same([1, 2, 3], [1, 4]));
