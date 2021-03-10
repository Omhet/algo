const swap = (arr, i, j) => ([arr[j], arr[i]] = [arr[i], arr[j]]);

const sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > cur; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = cur;
    }
    return arr;
};

console.log(sort([3, 2, 1]));
console.log(sort([1, 2, 3]));
console.log(sort([3]));
console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 1, 2, 3, 4, 5, 6]));
