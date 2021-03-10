const { getDigit, getDigitCount } = require('./helpers');

const sort = (arr) => {
    const maxDigitCount = Math.max(...arr.map(n => getDigitCount(n)));
    for (let i = 0; i < maxDigitCount; i++) {
        const buckets = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            const n = arr[j];
            const digit = getDigit(n, i);
            buckets[digit].push(n);
        }
        arr = buckets.flat();
    }
    return arr;
}

console.log(sort([1, 2, 32, 345, 42]));
console.log(sort([1]));
console.log(sort([1, 2, 32]));
console.log(sort([5, 4, 3, 2]));
console.log(sort([10000, 4, 78]));
