const swap = (arr, i, j) => ([arr[j], arr[i]] = [arr[i], arr[j]]);

const partition = (arr, start = 0, end = arr.length) => {
    let pivot = start;
    const ind = start;

    for (let i = start + 1; i < end; i++) {
        if (arr[i] < arr[ind]) {
            swap(arr, i, pivot + 1);
            pivot++;
        }
    }

    swap(arr, ind, pivot);

    return pivot;
};
// const a = [1, 2, 1, 1, 1, 3];
// console.log(partition(a, 0, 4));
// console.log(a);

const sort = (arr, start = 0, end = arr.length) => {
    if (start < end) {
        const pivot = partition(arr, start, end);
        sort(arr, start, pivot);
        sort(arr, pivot + 1, end);
    }
    
    return arr;
};

console.log(sort([3, 2, 1]));
console.log(sort([1, 2, 3]));
console.log(sort([3]));
console.log(sort([]));
console.log(sort([3, 2, 1, 1]));
console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 1, 2, 3, 4, 5, 6]));
