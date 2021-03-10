const Counter = require("./lib/data-structures/Counter");

const solution = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
    
  const counter1 = new Counter(str1);
  const counter2 = new Counter(str2);
  return counter1
    .entries()
    .every(([el, count]) => counter2.get(el) === count);
};

console.log(solution('', ''));
console.log(solution('a', 'a'));
console.log(solution('ab', 'ba'));
console.log(solution('abc', 'bca'));
console.log(solution('abc', 'bcca'));
console.log(solution('ab', 'bcca'));
